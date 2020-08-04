const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready' ,() =>{
    console.log('The bot is Online');
})

bot.on('message', message=>{
    if (msg.author.id == bot.user.id) {return;}
    msg = message.content.toLowerCase();
    if(msg.includes("pie") && msg.includes("furry"))
    {
        msg.channel.send('furry.');
    }
    if(msg.includes("salami"))
    {
        msg.channel.send('aint gonna fit (wont fit) https://cdn.discordapp.com/attachments/544377900678381569/735086178344239104/video0.mp4')
    }
    if(msg.includes("banana"))
    {
        msg.channel.send('OOO OOO AAA AA AA BANANAA OOO OO')
    }
    if(msg.includes("why"))
    {
        msg.channel.send('ur mom lol')
    }
    if(msg.includes("monkey") )
    {
        msg.channel.send("*monkey sounds*")
    }
})

bot.login(process.env.token);