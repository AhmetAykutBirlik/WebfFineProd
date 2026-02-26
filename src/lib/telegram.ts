import { Telegraf } from 'telegraf';

interface TelegramReportData {
    domain: string;
    pagesAudited: number;
    avgScore: number;
    durationMs: number;
    errors: number;
    warnings: number;
    clientIp: string;
    email?: string;
    healthLevel?: string;
}

export async function sendTelegramReport(data: TelegramReportData): Promise<void> {
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const token = process.env.TELEGRAM_BOT_TOKEN;

    if (!token || !chatId) {
        console.warn('Telegram credentials missing.');
        return;
    }

    try {
        const bot = new Telegraf(token);

        const health = data.healthLevel || (data.avgScore < 60 ? "🚨 Critical" : data.avgScore < 80 ? "⚠️ Needs Optimization" : "✅ High Potential");

        const text = `
🔥 *WebFine SEO Lead*

🌐 *Domain:* ${data.domain}
📧 *Email:* ${data.email || 'N/A'}

📊 *Score:* ${data.avgScore}/100
❌ *Errors:* ${data.errors}
⚠ *Warnings:* ${data.warnings}
📄 *Pages:* ${data.pagesAudited}
⏱ *Duration:* ${data.durationMs}ms

💡 *Health:* ${health}

#WebFine #SEOLead
`.trim();

        await bot.telegram.sendMessage(chatId, text, { parse_mode: 'Markdown' });
    } catch (err) {
        console.error('Failed to send Telegram message:', err);
    }
}
