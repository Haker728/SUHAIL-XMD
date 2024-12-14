const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_07_12_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI1LFxuICAgICAgICAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzLFxuICAgICAgICAzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTczLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDg1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk1LFxuICAgICAgICA4MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk4LFxuICAgICAgICA4LFxuICAgICAgICAxNixcbiAgICAgICAgMjM1LFxuICAgICAgICA4OSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDg3LFxuICAgICAgICA4MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDExMCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNSxcbiAgICAgICAgNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDg2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDUzLFxuICAgICAgICA4NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNixcbiAgICAgICAgNzQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDgwLFxuICAgICAgICA3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImVyL0ZVV3ZSalEzK293MWV2ZlY1dHdGYTVvQ2N2RjJwVDZoOGt5MG80R3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlk3RnhvaHJQUk8taDkwd1p3LV83YndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTkxMDQ0ZGYtMGFiOS00YWUwLWIwZGMtMTQ3N2IyMDg1ZTQ1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgMTMwLFxuICAgICAgMTExLFxuICAgICAgMTMyLFxuICAgICAgMTc3LFxuICAgICAgMjU0LFxuICAgICAgMjQ2LFxuICAgICAgNjcsXG4gICAgICAxODEsXG4gICAgICA0MCxcbiAgICAgIDEwNCxcbiAgICAgIDIxNCxcbiAgICAgIDY4LFxuICAgICAgMjAwLFxuICAgICAgMTgyLFxuICAgICAgMjU0LFxuICAgICAgMTY3LFxuICAgICAgMjM1LFxuICAgICAgMjI2LFxuICAgICAgNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICAyMyxcbiAgICAgIDgyLFxuICAgICAgMTc1LFxuICAgICAgMTAwLFxuICAgICAgMTQ3LFxuICAgICAgMjA2LFxuICAgICAgMjEzLFxuICAgICAgMjUsXG4gICAgICAxNzIsXG4gICAgICAxLFxuICAgICAgMTA1LFxuICAgICAgMzcsXG4gICAgICAxNjEsXG4gICAgICAxODIsXG4gICAgICAxNDcsXG4gICAgICAxMTksXG4gICAgICAyMjQsXG4gICAgICAyMzUsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1I1NUY4RE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzcwNTM1MTE1MDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM3NDgyNDIzMjQyNzU1OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ppazY0c0RFT3FTOTdvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYkkvUktKUzh3NlZjSSsyQzlRdGNKY1VwZ2dKcEI2Q1lIckdsTmQwMDR4OD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0L3NIdW83QnlRbS9NYXFiMUFhbzFNY05PdllYQmsxTlQvM1MvNWhmQk5iaU9QNEtOZml2cXBncUx3dGxkOTY0RjZ5LzdTWXhlTmdyUFZ3eDBUc0lCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQemF3RU9XaU9qWTE5S3RzMVlXUXo1QjJIUHJnSG0xUjFjL2NBQWdBbUVNWDNlTnJ2aGdVK0RIZ0s4TnNkSU83Q1VMb3NmR0oyb0QxN0oxazhZaU1qZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM3MDUzNTExNTA6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQxOTk2NjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHQ0FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdDQS5qc29uIjogIntcImtleURhdGFcIjpcIlZ5ZVJhZE9ZK3ZoTWpsYlFkZFlyQlREaGZyb1h1M2hpL0Vwdmt5NDBFOVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODMwMTMyNzU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMzOTM0NDgzMzcwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
