const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUpudmFjd1BqVjZWRFlTc0hTcXloVXB2KzBlZzltT0J0WUx6K1FmRWpFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3oweW01YkxSWjdEeDNEYVk3L1pvUFZPTFZONUNpcTVmakdUMXFRM1Ntaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTS25tNHFwTjNRb0daWmxwVDJRSTIwVVVmeFNjM0NDY3JEeG9CS2F6TmtvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxaXBNRWdKdFpvRUFlWUhGaTcrOFRha1JpaGNvT2NBRTI0V3pyZUp0aTNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhPd2pKR0NDQ0UwbGM3WVJTdk1mWUtPMDMyNVd2enlhWVRtOUF5cE1LRUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVXaEdaR1ZRdk1MaXcrV0RMQ3FlV0RVajE3azd4QXFiNDNWRUNpODdtVHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFBSMWs1QnEreVlJN0hOelluSUloYkdVWWpNVk5PbDZZazg1anZINTNGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEhpd05vbThYOVFUM1VLaEcvamdub2hSSSsxeUdBNTQ1YVhyUXorMXVuQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNamVnOXFUWlNiZUJucnlGNmc2dXVJeDhrMmM0Y3labUtJYXgvMUdIa0pBY1R0UDJjTzl2L25uTElRL0hKWC90akVTVXkzbVBONkNGVU85TVNsZGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTYsImFkdlNlY3JldEtleSI6IlFQNnpIYlRCcDVHWnc3Yy8xaXNDRUp3cGRzcGdraUlPV09JTjMzVFp2RkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTI2MTg0OTk3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU1REYxRURBNjY5RjFFN0RBMDg5MkEzNjUwMzRDMkQwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUwMjIyNDh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEyNjE4NDk5N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDMThBMzkzNjQxOTZCMTkwM0Q2OEE3OTg4MjgzRTg3NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1MDIyMjQ4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMjYxODQ5OTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjdENERBMjE1NjgwQ0I3Q0Q1MTZFQTYwNkY5RjhEMzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTAyMjI1MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUEJaTlFOUUMiLCJtZSI6eyJpZCI6IjkyMzEyNjE4NDk5NzoxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTU3ODAxOTgwNjY1OTExOjFAbGlkIiwibmFtZSI6IlJhbmFBd2FpcyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGJwaTY4REVLT0g3c1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiLzZEbjZWQ3o0NjJRM09WbWdzeEtTM2tUbllWN0pTTkRKMFV3R3hEVHd4VT0iLCJhY2NvdW50U2lnbmF0dXJlIjoieE1HdDVZTlEzd2NCUTZiRmYwaUg2c0pocmFTbmxBbTd6c2xGajBxZFRILzg1YnQvNStxalBRNGZpT0FHRW9DK25qTEZ1RVJpbm5raGxSd0MrcGlGQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6Ilg2Rk1QVy9SRElSZkVCYmxZOUhoUGRCWm9hRTJGR0tJNHpFU3hCTkRPaStlQVhmT1pHcjU1SGl4QUoyWkpWRkQ2d0FDQmJrdGd4UlI4bUZFb1BKUmlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTI2MTg0OTk3OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZitnNStsUXMrT3RrTnpsWm9MTVNrdDVFNTJGZXlValF5ZEZNQnNRMDhNViJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1MDIyMjQ2LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSFlOIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/tom52w.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Rana_Awais",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Rana_Awais",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923126184997",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Rana-Awais",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/tom52w.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923126184997",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
