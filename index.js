const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready' ,() =>{
    console.log('The bot is Online');
})

bot.on('message', msg=>{
    if(msg.content.includes("pie"))
    {
        msg.reply('furry');
    }
    if(msg.content.includes("salami"))
    {
        msg.reply('aint gonna fit (wont fit) https://cdn.discordapp.com/attachments/544377900678381569/735086178344239104/video0.mp4')
    }
    if(msg.content.includes("banana"))
    {
        msg.reply('OOO OOO AAA AA AA BANANAA OOO OO')
    }
    if(msg.content.includes("why"))
    {
        msg.reply('ur mom lol')
    }
})

bot.login(process.env.token);