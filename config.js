const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254773416867";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_32_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxODYsXG4gICAgICAgIDc4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMixcbiAgICAgICAgMTc3LFxuICAgICAgICAzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc5LFxuICAgICAgICA2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTksXG4gICAgICAgIDM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ0LFxuICAgICAgICA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyOSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQkxET2tMWTU2K296YVdRZ0hQN1AwNjYrbXl1THE2ZzBQdWJYT0NRdENNbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUlRyZVVxWFBTRVc1RkpJNzJ1VDREd1wiLFxuICBcInBob25lSWRcIjogXCIwMDFjYjNkNy05YzUyLTRlNTktODljNy1iYWY1YTQ5Zjc0ZjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICA1MyxcbiAgICAgIDE5NixcbiAgICAgIDExMCxcbiAgICAgIDQ1LFxuICAgICAgMTY4LFxuICAgICAgMTQ0LFxuICAgICAgNTIsXG4gICAgICAyMzYsXG4gICAgICAxNTksXG4gICAgICA1MyxcbiAgICAgIDI0NixcbiAgICAgIDE4MixcbiAgICAgIDkzLFxuICAgICAgMTI0LFxuICAgICAgMzEsXG4gICAgICA2NyxcbiAgICAgIDE0MCxcbiAgICAgIDUsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICA3OCxcbiAgICAgIDIyLFxuICAgICAgMjI4LFxuICAgICAgMjE3LFxuICAgICAgMTcxLFxuICAgICAgMTc0LFxuICAgICAgOTQsXG4gICAgICAyMTksXG4gICAgICA5MyxcbiAgICAgIDIzNixcbiAgICAgIDIyNyxcbiAgICAgIDIxLFxuICAgICAgMjA5LFxuICAgICAgMTk4LFxuICAgICAgMTQ2LFxuICAgICAgMTYsXG4gICAgICAyMzAsXG4gICAgICAyMzcsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNEo5SkpSVkVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc3MzQxNjg2Nzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NjU5NjkxNjU2ODIxNjo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pEUXc2MEhFUEtmKzdRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRVZ3VTdaMVBUVEVLdGNBdG5lN0E0T3dvK0JKRk5qd3EwMkhOa2loK0IzVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4RmRmNU13RXcwZGRoUEpwT1lJY1h0Rys2SzNDYzZZUGtVTFhEQXQ1NjVRNjl3L1JMZ1Q3cU04WnRIVjkzYy9idDBEWVN6K05TeURPNnYzMDVMSDBDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrVXord1N0UlRoR1U3b1J4dy82NFdiVHNvcDdKakdjNmJuWGNBUHdSYmZkRXliYWZVcjJzUHFnVWo1cWFnSHBEZkJIamdHa1JkYjRaY0ZZS0lvcnhCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NzM0MTY4Njc6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY4Mzk1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1BUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUFRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRDZWbFZ0N0ZpT3djR2dqWmpNUHNZSENVNU1VZHNaWTZ1OExybFozWVA5cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTc0NTI4MDE2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1ODk2NDQyMzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
