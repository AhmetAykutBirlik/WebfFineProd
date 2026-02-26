import { NextResponse } from 'next/server';
import { sendTelegramReport } from '@/lib/telegram';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { domain, email, score, errors, warnings, pagesAudited, durationMs } = body;

        // Validation
        if (!domain || !email) {
            return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 });
        }

        // Send Telegram Notification
        await sendTelegramReport({
            domain,
            email,
            avgScore: score || 88,
            errors: errors || 0,
            warnings: warnings || 0,
            pagesAudited: pagesAudited || 1,
            durationMs: durationMs || 0,
            clientIp: req.headers.get('x-forwarded-for') || '127.0.0.1'
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Audit API Error:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
