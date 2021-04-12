const Discord = require('discord.js');
const bot = new Discord.Client();
const cron = require("node-cron");
let shelljs = require("shelljs");

var PieIsKickable = false;
var BeAnnoying = true;
var AnnoyingMessage;
var AnnoyingResponses = ["ur sister lol", "ur mom lol", "ur dad lol", "ur brother lol", "my mom lol"];
var StoredMessage;
let MonkeFridayChannel;
const authorID = "211629886081728512";

bot.on('ready' ,async (first, last)=>{
    console.log('The bot is Online');
})

bot.on('message', msg=>{
    if (msg.author.id == bot.user.id) {return;}
    //responses
    if(msg.content.includes("pie") && msg.content.includes("furry") && BeAnnoying)
    {
        msg.channel.send('furry.')
    }
    if(msg.content.includes("salami"))
    {
        msg.channel.send('aint gonna fit (wont fit) https://cdn.discordapp.com/attachments/544377900678381569/735086178344239104/video0.mp4')
    }
    if(msg.content.includes("banana") && BeAnnoying)
    {
        msg.channel.send('OOO OOO AAA AA AA BANANAA OOO OO')
    }
    if(msg.content.includes("why") && BeAnnoying)
    {
        SendandDelete();
    }
    if(msg.content.startsWith("EnableMonkeFridays"))
    {
        cron.schedule("* * * * * *", function(){
            console.log("e");
            MonkeFridayChannel.send("ooo ooo aa aaa");
        })
    }
    if(msg.content.startsWith("SetFridaysHere"))
    {
        MonkeFridayChannel = msg.channel.id;
        MonkeFridayChannel = msg.guild.channels.cache.get(MonkeFridayChannel);
        console.log(MonkeFridayChannel);
        msg.react('🐒');
    }

    async function SendandDelete()
    {
        const SentYMessage = await msg.channel.send(AnnoyingResponses[Math.floor(Math.random() * 5)]);

        SentYMessage.delete({ timeout: 5000 });
    }

    if(msg.content.includes("monkey"))
    {
        msg.react('🐒')
    }
    if(msg.content.startsWith("Msay"))
    {
        SayandDelete();
    }

    async function SayandDelete()
    {
        StoredMessage = msg.content;
        msg.channel.send(StoredMessage.replace("Msay", ""));
        msg.delete({ timeout: 100 });
    }

    //to disable or enable the monkey from saying "ur mom/sister lol"
    if(msg.content.startsWith("monkey, shut up"))
    {
        BeAnnoying = false
        msg.channel.send("okay :(")
    }
    if(msg.content.startsWith("monkey, its okay now"))
    {
        BeAnnoying = true
        msg.channel.send("okay :)")
    }
    //

    // Toggle if pie is kickable or not (only i can toggle it)
    if(msg.content.startsWith("toggle pieiskickable") && msg.author.id == authorID)
    {
        if(PieIsKickable)
        {
            PieIsKickable = false
            msg.channel.send("🐒 Disabled")
        }
        else if (!PieIsKickable)
        {
            PieIsKickable = true
            msg.channel.send("🐒 Enabled")
        }
    }

    //to kick pie
    if(msg.content.startsWith("monkey, kick pie") && PieIsKickable)
    {
        const PieID = "238825126408355842"
        const guild = msg.guild
        const Pie = guild.member(PieID)
        msg.channel.send("kicked :monkey:")
        return Pie.kick()
    }
})

bot.login(process.env.token);