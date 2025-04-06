// code by ⿻ ⌜ 𝙹𝙸𝙽𝚆𝙸𝙸𝙻 𝙾𝙽𝙶𝙸𝙽𝙹𝙾 🕸️👻 ⌟⿻⃮͛🇰🇪𖤐

const axios = require("axios");
const config = require('../config');
const { cmd } = require('../command');

cmd({
  pattern: "sss",
  alias: ["ssweb"],
  react: "💫",
  desc: "Download screenshot of a given link.",
  category: "other",
  use: ".ss <link>",
  filename: __filename,
}, 
async (conn, mek, m, {
  from, l, quoted, body, isCmd, command, args, q, isGroup, sender, 
  senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, 
  groupMetadata, groupName, participants, isItzcp, groupAdmins, 
  isBotAdmins, isAdmins, reply 
}) => {
  if (!q) {
    return reply("Please provide a URL to capture a screenshot.");
  }

  try {
    // created by 𝙹𝙸𝙽𝚆𝙸𝙸𝙻𝚃𝙴𝙲𝙷𝚅 
    const response = await axios.get(`https://api.davidcyriltech.my.id/ssweb?url=${q}`);
    const screenshotUrl = response.data.screenshotUrl;

    // give credit and use
    const imageMessage = {
      image: { url: screenshotUrl },
      caption: "*WEB SS DOWNLOADER*\n\n> *© Powered By 𝙹𝙸𝙽𝚆𝙸𝙸𝙻𝚃𝙴𝙲𝙷𝚅*",
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363388529450317@newsletter',
          newsletterName: "𝙹𝙸𝙽𝚆𝙸𝙸𝙻𝚃𝙴𝙲𝙷𝚅",
          serverMessageId: 143,
        },
      },
    };

    await conn.sendMessage(from, imageMessage, { quoted: m });
  } catch (error) {
    console.error(error);
    reply("Failed to capture the screenshot. Please try again.");
  }
});

// ⿻ ⌜ 𝙹𝙸𝙽𝚆𝙸𝙸𝙻𝚃𝙴𝙲𝙷𝚅 ⌟⿻⃮͛🇰🇪𖤐
