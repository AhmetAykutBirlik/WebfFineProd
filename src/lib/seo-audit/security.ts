import axios from 'axios';
import dns from 'node:dns/promises';
import { getMessage } from './i18n';
import ipaddr from 'ipaddr.js';

const BLOCKED_RANGES = [
    '0.0.0.0/8', '10.0.0.0/8', '100.64.0.0/10', '127.0.0.0/8',
    '169.254.0.0/16', '172.16.0.0/12', '192.0.0.0/24', '192.0.2.0/24',
    '192.88.99.0/24', '192.168.0.0/16', '198.18.0.0/15', '198.51.100.0/24',
    '203.0.113.0/24', '224.0.0.0/4', '240.0.0.0/4', '255.255.255.255/32',
];

const BLOCKED_RANGES_V6 = [
    '::/128', '::1/128', 'fc00::/7', 'fe80::/10',
];

function isIpPrivate(ipString: string): boolean {
    try {
        const addr = ipaddr.parse(ipString);
        const range = addr.kind();
        if (range === 'ipv4') {
            const v4Addr = addr as ipaddr.IPv4;
            for (const cidr of BLOCKED_RANGES) {
                if (v4Addr.match(ipaddr.parseCIDR(cidr))) return true;
            }
        } else if (range === 'ipv6') {
            const v6Addr = addr as ipaddr.IPv6;
            for (const cidr of BLOCKED_RANGES_V6) {
                if (v6Addr.match(ipaddr.parseCIDR(cidr))) return true;
            }
        }
        return false;
    } catch (e) { return true; }
}

let activeAudits = 0;
const MAX_CONCURRENT_AUDITS = 2;

export function incrementAudits(): boolean {
    if (activeAudits >= MAX_CONCURRENT_AUDITS) return false;
    activeAudits++;
    return true;
}

export function decrementAudits() {
    activeAudits = Math.max(0, activeAudits - 1);
}

export async function checkSSRF(url: string, lang: string = 'en'): Promise<string> {
    let parsed: URL;
    try { parsed = new URL(url); } catch (e) { throw new Error(getMessage(lang, 'invalid_url')); }
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') throw new Error(getMessage(lang, 'invalid_url'));
    const port = parsed.port || (parsed.protocol === 'http:' ? '80' : '443');
    if (port !== '80' && port !== '443') throw new Error(getMessage(lang, 'blocked_ssrf'));
    const hostname = parsed.hostname.toLowerCase();
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '0.0.0.0') throw new Error(getMessage(lang, 'blocked_ssrf'));
    try {
        const lookup = await dns.lookup(parsed.hostname, { all: true });
        if (!lookup.length) throw new Error(getMessage(lang, 'invalid_url'));
        for (const entry of lookup) {
            if (isIpPrivate(entry.address)) throw new Error(getMessage(lang, 'blocked_ssrf'));
        }
        return lookup[0].address;
    } catch (e: any) {
        if (e.message === getMessage(lang, 'blocked_ssrf')) throw e;
        throw new Error(getMessage(lang, 'blocked_ssrf'));
    }
}

const tokenCache = new Set<string>();

export async function verifyTurnstile(token: string, ip: string, lang: string = 'en'): Promise<void> {
    const secret = process.env.TURNSTILE_SECRET_KEY || '0x4AAAAAACfXqARzzOEvNen-SjTmm9adlAk';

    // Bypass for mock-token or if no secret is provided (useful for instant setup)
    if (token === 'mock-token' || !secret) {
        console.warn('⚠️ Turnstile verification bypassed (Mock Token or Missing Secret)');
        return;
    }
    if (!secret) throw new Error(getMessage(lang, 'server_error'));
    if (!token || token === 'undefined') throw new Error(getMessage(lang, 'turnstile_failed'));
    if (tokenCache.has(token)) throw new Error(getMessage(lang, 'turnstile_failed'));

    const formData = new URLSearchParams();
    formData.append('secret', secret);
    formData.append('response', token);
    formData.append('remoteip', ip);

    const res = await axios.post('https://challenges.cloudflare.com/turnstile/v0/siteverify', formData, { timeout: 3000 });
    if (res.data.success) {
        tokenCache.add(token);
        setTimeout(() => tokenCache.delete(token), 300000);
        return;
    }
    throw new Error(getMessage(lang, 'turnstile_failed'));
}
