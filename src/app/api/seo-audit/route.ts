import { NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyTurnstile, checkSSRF, incrementAudits, decrementAudits } from '@/lib/seo-audit/security';
import { Crawler } from '@/lib/seo-audit/crawler';
import { getMessage } from '@/lib/seo-audit/i18n';

const AuditSchema = z.object({
    url: z.string().url(),
    turnstileToken: z.string(),
    lang: z.enum(['tr', 'en']).default('en'),
});

function getHealthLevel(score: number, lang: string): string {
    if (score < 60) return getMessage(lang, 'health_critical');
    if (score < 80) return getMessage(lang, 'health_needs_optimization');
    return getMessage(lang, 'health_high_potential');
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const parsedBody = AuditSchema.parse(body);
        const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';

        if (!incrementAudits()) {
            return NextResponse.json({
                success: false,
                message: getMessage(parsedBody.lang, 'rate_limited')
            }, { status: 503 });
        }

        try {
            await verifyTurnstile(parsedBody.turnstileToken, ip, parsedBody.lang);
            await checkSSRF(parsedBody.url, parsedBody.lang);

            const crawler = new Crawler({
                maxDepth: 1,
                maxPages: 12,
                concurrency: 3,
                timeoutMs: 12000,
                maxHtmlSize: 3000000,
            });

            const results = await crawler.start(parsedBody.url);

            const totalScore = Math.round(results.reduce((acc: number, r: any) => acc + r.score, 0) / (results.length || 1));
            const totalErrors = results.reduce((acc: number, r: any) => acc + r.issues.filter((i: any) => i.type === 'error').length, 0);
            const totalWarnings = results.reduce((acc: number, r: any) => acc + r.issues.filter((i: any) => i.type === 'warning').length, 0);
            const totalDuration = results.reduce((a: number, b: any) => a + b.durationMs, 0);
            const site = new URL(parsedBody.url).hostname;
            const healthLevel = getHealthLevel(totalScore, parsedBody.lang);

            return NextResponse.json({
                success: true,
                site,
                score: totalScore,
                healthLevel,
                summary: {
                    errors: totalErrors,
                    warnings: totalWarnings,
                    info: results.reduce((acc: number, r: any) => acc + r.issues.filter((i: any) => i.type === 'info').length, 0)
                },
                pagesAudited: results.length,
                durationMs: totalDuration,
                preview: {
                    topIssues: results.flatMap((r: any) => r.issues).filter((i: any) => i.type === 'error').slice(0, 5)
                },
                report: results
            });
        } finally {
            decrementAudits();
        }
    } catch (err: any) {
        console.error('Audit API Error:', err);
        return NextResponse.json({ success: false, message: err.message || 'Error' }, { status: 400 });
    }
}
