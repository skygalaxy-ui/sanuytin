export async function sendTelegramMessage(message: string) {
    const defaultBotToken = process.env.TELEGRAM_BOT_TOKEN || '8792118053:AAHCY2Z55ktLWXs3NzJgL1fpE9JBArXQThQ';
    const defaultChatId = process.env.TELEGRAM_CHAT_ID || '7693132516';

    const cleanMessage = message.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Restore basic HTML tags used intentionally
    const finalMsg = cleanMessage.replace(/&lt;b&gt;/g, '<b>').replace(/&lt;\/b&gt;/g, '</b>').replace(/&lt;i&gt;/g, '<i>').replace(/&lt;\/i&gt;/g, '</i>').replace(/&lt;a href="([^"]+)"&gt;/g, '<a href="$1">').replace(/&lt;\/a&gt;/g, '</a>');

    try {
        const url = `https://api.telegram.org/bot${defaultBotToken}/sendMessage`;
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: defaultChatId,
                text: finalMsg,
                parse_mode: 'HTML',
                disable_web_page_preview: true,
            }),
            signal: AbortSignal.timeout(8000)
        });
        
        return res.ok;
    } catch (e) {
        console.error('Error sending telegram message:', e);
        return false;
    }
}
