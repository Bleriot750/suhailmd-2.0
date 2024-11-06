ppconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_34_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MixcbiAgICAgICAgMjksXG4gICAgICAgIDUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgODEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM2LFxuICAgICAgICA0NSxcbiAgICAgICAgNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgzLFxuICAgICAgICA3MSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODksXG4gICAgICAgIDgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NixcbiAgICAgICAgOCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTksXG4gICAgICAgIDcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDgwLFxuICAgICAgICA2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE3LFxuICAgICAgICA0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjksXG4gICAgICAgIDcyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI5LFxuICAgICAgICA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMixcbiAgICAgICAgMjksXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NSxcbiAgICAgICAgMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjYVVSbGFsUEswRFl5Y2V4aHg4MjA0UmxPSnVYcjJFS3NSUkQ2RkJHdWJrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4QTFiaktVT1IwYVRWMTNXb1ZUN01RXCIsXG4gIFwicGhvbmVJZFwiOiBcImFiOTRhM2NlLTZhODAtNGVkMy05ZTc2LTg2M2ZmYTZiN2IzZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICAxODAsXG4gICAgICAxMixcbiAgICAgIDIxNyxcbiAgICAgIDEyLFxuICAgICAgNixcbiAgICAgIDIyMixcbiAgICAgIDM1LFxuICAgICAgMTg5LFxuICAgICAgMTAzLFxuICAgICAgMjM4LFxuICAgICAgMjMyLFxuICAgICAgOTcsXG4gICAgICAxOTYsXG4gICAgICAxNTQsXG4gICAgICA3OCxcbiAgICAgIDEyMixcbiAgICAgIDE1MyxcbiAgICAgIDM3LFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDIyMixcbiAgICAgIDU3LFxuICAgICAgNzYsXG4gICAgICAxODgsXG4gICAgICA0NixcbiAgICAgIDEyMCxcbiAgICAgIDUsXG4gICAgICAyMDIsXG4gICAgICAxNixcbiAgICAgIDIxMSxcbiAgICAgIDExNyxcbiAgICAgIDExNCxcbiAgICAgIDIyNCxcbiAgICAgIDEzOSxcbiAgICAgIDE5NyxcbiAgICAgIDIzOSxcbiAgICAgIDczLFxuICAgICAgMTQyLFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhNRk5KTTVWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2OTIyNDc3NTY6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NzEyNTYyNTkzOTgzOjU1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lxUS80TUlFTjYzckxrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSU9wTlN6TEt6UG1qMm9uK0xvRTNmdlVnelBhcFRZNlhBeWw3QWViOFVGWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3OExGcEVGZWgrcmtxbklrZENVa21DTHNxWFFlbVAwU0pwNVFyV1JHeVpxOTJRUGlMMm1TVTJRTnRzSDNYdWRFZ2pselIvTkxJc3dTWFhPQlZGeXNodz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2T1FUUE5TSW1QWXF0ZUcwaE0zNFdSY0FNeDl4MUZpbjF0WENiK3MyUHFtYUUxOVB1Tm9LSGtaQlVJVi9YS3l2SDZrMkFsQ2J3UzE1UkJrdHpSUmRBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2OTIyNDc3NTY6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDg3ODQzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBRFVBQU5EdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFEVUFBTkR0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVmJoM1J4bFFMNGhmY0lSdGlYM2VTb1ErYXVaVFZIbDdDZjRJSVhuN2dmdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTU1ODU3OTMwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDUzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA4MDUxMzkyNDdcIn0iCn0="  // PUT your SESSION_ID 


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
