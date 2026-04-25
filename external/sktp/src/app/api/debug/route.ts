import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ 
        token: process.env.TELEGRAM_BOT_TOKEN ? 'YES' : 'NO',
        chatId: process.env.TELEGRAM_CHAT_ID ? 'YES' : 'NO',
        pwd: process.cwd(),
        node_env: process.env.NODE_ENV,
        cron_secret: process.env.CRON_SECRET ? 'YES' : 'NO', 
    });
}
