
const { cmd } = require("../command");

cmd({
  pattern: "vv",
  alias: ["viewonce", 'retrive'],
  react: '👾',
  desc: "Owner Only - retrieve quoted message back to user",
  category: "owner",
  filename: __filename
}, async (client, message, match, { from, isOwner }) => {
  try {
    if (!isOwner) {
      return await client.sendMessage(from, {
        text: "*📛 This is an owner command.*"
      }, { quoted: message });
    }

    if (!match.quoted) {
      return await client.sendMessage(from, {
        text: "*🍁 Please reply to a view once message!*"
      }, { quoted: message });
    }

    const buffer = await match.quoted.download();
    const mtype = match.quoted.mtype;
    const options = { quoted: message };

    let messageContent = {};
    switch (mtype) {
      case "imageMessage":
        messageContent = {
          image: buffer,
          caption: match.quoted.text || '',
          mimetype: match.quoted.mimetype || "image/jpeg"
        };
        break;
      case "videoMessage":
        messageContent = {
          video: buffer,
          caption: match.quoted.text || '',
          mimetype: match.quoted.mimetype || "video/mp4"
        };
        break;
      case "audioMessage":
        messageContent = {
          audio: buffer,
          mimetype: "audio/mp4",
          ptt: match.quoted.ptt || false
        };
        break;
      default:
        return await client.sendMessage(from, {
          text: "❌ Only image, video, and audio messages are supported"
        }, { quoted: message });
    }

    await client.sendMessage(from, messageContent, options);
  } catch (error) {
    console.error("vv Error:", error);
    await client.sendMessage(from, {
      text: "❌ Error fetching vv message:\n" + error.message
    }, { quoted: message });
  }
});
// 𝙹𝙸𝙽𝚆𝙸𝙸𝙻𝚃𝙴𝙲𝙷

const { cmd } = require("../command");

cmd({
  pattern: "vv5",
  alias: ["viewonce", '🙃'],
  react: '👾',
  desc: "Owner Only - retrieve quoted message back to user",
  category: "owner",
  filename: __filename
}, async (client, message, match, { from, isOwner }) => {
  try {
    if (!isOwner) {
      return await conn.sendMessage(from, {
        text: "*📛 This is an owner command.*"
      }, { quoted: message });
    }

    if (!match.quoted) {
      return await conn.sendMessage(from, {
        text: "*🍁 Please reply to a view once message!*"
      }, { quoted: message });
    }

    const buffer = await match.quoted.download();
    const mtype = match.quoted.mtype;
    const options = { quoted: message };

    let messageContent = {};
    switch (mtype) {
      case "imageMessage":
        messageContent = {
          image: buffer,
          caption: match.quoted.text || '',
          mimetype: match.quoted.mimetype || "image/jpeg"
        };
        break;
      case "videoMessage":
        messageContent = {
          video: buffer,
          caption: match.quoted.text || '',
          mimetype: match.quoted.mimetype || "video/mp4"
        };
        break;
      case "audioMessage":
        messageContent = {
          audio: buffer,
          mimetype: "audio/mp4",
          ptt: match.quoted.ptt || false
        };
        break;
case 'idch': case 'cekidch': {
if (!text) return reply("channel link?")
if (!text.includes("https://whatsapp.com/channel/")) return reply("Link must be valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await conn.newsletterMetadata("invite", result)
let teks = `* *ID : ${res.id}*
* *Name :* ${res.name}
* *Total Followers :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
interactiveMessage: {
body: {
text: teks }, 
footer: {
text: "by Lorein Xmd" }, //input watermark footer
  nativeFlowMessage: {
  buttons: [
             {
        "name": "cta_copy",
        "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
           },
     ], },},
    }, }, },{ quoted : m });
await conn.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }
);
}
break

      default:
        return await conn.sendMessage(from, {
          text: "❌ Only image, video, and audio messages are supported"
        }, { quoted: message });
    }

    await conn.sendMessage(from, messageContent, options);
  } catch (error) {
    console.error("vv Error:", error);
    await conn.sendMessage(from, {
      text: "❌ Error fetching vv message:\n" + error.message
    }, { quoted: message });
  }
});

/*
const { cmd } = require("../command");

cmd(
  {
    pattern: "vv4",
    alias: ["viewonce", "retrive"],
    desc: "download viewOnce Message.",
    category: "whatsapp",
    use: "<query>",
    react: "🫦",
    filename: __filename,
  },
  async (_0x5e331d, _0x237d8a) => {
    try {
      var _0x17ffa2 = false;
      if (_0x5e331d.reply_message) {
        if (
          _0x5e331d.reply_message.viewOnce ||
          ((_0x5e331d.device === "ios" || _0x5e331d.device === "android") &&
            /audioMessage|videoMessage|imageMessage/g.test(
              _0x5e331d.reply_message.mtype
            ))
        ) {
          _0x17ffa2 = _0x5e331d.reply_message;
        }
      }
      _0x17ffa2.mtype = _0x17ffa2.mtype2;
      if (!_0x17ffa2) {
        return _0x5e331d.reply("```Please Reply A ViewOnce Message```");
      }
      let _0x86453 = {
        key: _0x17ffa2.key,
        message: {
          conversation: "```[🤫🍆😁]```",
        },
      };
      let _0x22f0a2 = await _0x5e331d.bot.downloadAndSaveMediaMessage(
        _0x17ffa2.msg
      );
      // Modified line below: Changed _0x5e331d.jid to _0x5e331d.sender for inbox
      await _0x5e331d.bot.sendMessage(
        _0x5e331d.sender, // This sends to user's personal inbox
        {
          [_0x17ffa2.mtype2.split("Mess")[0]]: {
            url: _0x22f0a2,
          },
          caption: _0x17ffa2.body,
        },
        {
          quoted: _0x86453,
        }
      );
    } catch (_0x23316d) {
      await _0x5e331d.error(_0x23316d + "\n\ncommand: vv2", _0x23316d);
    }
  }
);
