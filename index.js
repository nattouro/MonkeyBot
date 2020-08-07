const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready' ,() =>{
    console.log('The bot is Online');
})

bot.on('message', msg=>{
    if (msg.author.id == bot.user.id) {return;}
    if(msg.content.includes("pie") && msg.content.includes("furry"))
    {
        msg.channel.send('furry.');
    }
    if(msg.content.includes("salami"))
    {
        msg.channel.send('aint gonna fit (wont fit) https://cdn.discordapp.com/attachments/544377900678381569/735086178344239104/video0.mp4')
    }
    if(msg.content.includes("banana"))
    {
        msg.channel.send('OOO OOO AAA AA AA BANANAA OOO OO')
    }
    if(msg.content.includes("why"))
    {
        msg.channel.send('ur sister lol')
    }
    if(msg.content.includes("monkey") )
    {
        msg.channel.send("*monkey sounds*")
    }
    if(msg.content.includes("monkey, kick pie"))
    {
        const userID = "238825126408355842"
        const guild = msg.guild
        const member = guild.member(userID)
        msg.channel.send("kicked :monkey:")
        return member.kick()
    }
})

bot.login(process.env.token);