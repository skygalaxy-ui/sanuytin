const token = '8777399265:AAEKAT6BG5Mv2FM552qKainbU8eEOCaEtCc';
const url = `https://api.telegram.org/bot${token}/getUpdates`;

async function fetchChatId() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.ok && data.result.length > 0) {
      const chatId = data.result[data.result.length - 1].message.chat.id;
      console.log('SUCCESS! Chat ID:', chatId);
    } else {
      console.log('NO MESSAGES YET. Please send a message to the bot.');
    }
  } catch(e) {
    console.error('Error fetching chat ID', e);
  }
}

fetchChatId();
