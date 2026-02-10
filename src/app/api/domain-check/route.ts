import { NextRequest, NextResponse } from 'next/server';

// Burst-capable rate limiting
const rateLimitMap = new Map<string, { last: number; count: number }>();
const WINDOW_MS = 10000; // 10 seconds
const MAX_REQUESTS = 20;  // Allow 20 requests per window

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const domain = searchParams.get('domain')?.toLowerCase();

    if (!domain) {
        return NextResponse.json({ error: 'Domain missing' }, { status: 400 });
    }

    const ip = request.ip || request.headers.get('x-forwarded-for') || 'anonymous';
    const now = Date.now();
    const limitData = rateLimitMap.get(ip) || { last: now, count: 0 };

    // Reset count if window passed
    if (now - limitData.last > WINDOW_MS) {
        limitData.count = 0;
        limitData.last = now;
    }

    if (limitData.count >= MAX_REQUESTS) {
        return NextResponse.json({ error: 'TOO_MANY_REQUESTS' }, { status: 429 });
    }

    limitData.count++;
    rateLimitMap.set(ip, limitData);

    try {
        const parts = domain.split('.');
        const tld = parts[parts.length - 1];
        const isTr = tld === 'tr';

        // 1. Google DNS Check (Fastest and most reliable for all TLDs)
        // Works great for .tr, .com.tr, .com, .net, etc.
        try {
            const dnsRes = await fetch(`https://dns.google/resolve?name=${domain}&type=NS`, {
                next: { revalidate: 0 }
            });
            const dnsData = await dnsRes.json();

            // Status 3 = NXDOMAIN (Available)
            if (dnsData.Status === 3) {
                return NextResponse.json({ domain, available: true, provider: "google-dns" });
            }

            // Status 0 with Answer = Taken
            if (dnsData.Status === 0 && dnsData.Answer && dnsData.Answer.length > 0) {
                return NextResponse.json({ domain, available: false, provider: "google-dns" });
            }

            // Fallback for parking/empty records: Check A record
            if (dnsData.Status === 0) {
                const dnsARes = await fetch(`https://dns.google/resolve?name=${domain}&type=A`);
                const dnsAData = await dnsARes.json();
                if (dnsAData.Answer && dnsAData.Answer.length > 0) {
                    return NextResponse.json({ domain, available: false, provider: "google-dns" });
                }
            }
        } catch (e) {
            console.error("DNS check fail", e);
        }

        // 2. TLD Specific Fallbacks (RDAP)
        if (tld === 'com' || tld === 'net' || tld === 'org') {
            const rdapUrl = tld === 'org'
                ? `https://rdap.publicinterestregistry.net/rdap/domain/${domain}`
                : `https://rdap.verisign.com/com/v1/domain/${domain}`;

            try {
                const rdapRes = await fetch(rdapUrl, { next: { revalidate: 0 } });
                if (rdapRes.status === 404) return NextResponse.json({ domain, available: true, provider: "rdap" });
                if (rdapRes.status === 200) return NextResponse.json({ domain, available: false, provider: "rdap" });
            } catch (e) { }
        }

        // 3. Absolute Fallback: Scraping (only for .tr if DNS is inconclusive)
        // TRABIS domains usually have NS even if empty.
        const response = await fetch(`https://www.atakdomain.com/domain/sorgula?domain=${encodeURIComponent(domain)}`, {
            headers: { 'User-Agent': 'Mozilla/5.0' },
            next: { revalidate: 0 }
        });

        const html = await response.text();
        const isAvailable = ['kayıt edilebilir', 'müsait', 'available', 'sepete ekle'].some(t => html.toLowerCase().includes(t));

        return NextResponse.json({
            domain,
            available: isAvailable,
            provider: "fallback"
        });

    } catch (error) {
        console.error('Domain check error:', error);
        return NextResponse.json({ error: 'API_ERROR' }, { status: 500 });
    }
}
