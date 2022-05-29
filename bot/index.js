const Discord = require('discord.js')
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
})

Client.on('ready', () => console.log("Quoi-Feur est opérationnel !"))

Client.on('messageCreate', message => {
    if (/[QK]+U*(OI|OUA)+[\s.!;,?!]*$/i.test(message.content))
        message.channel.send("Feur !")
    else if (/H*(E*|A*)I+[NM]+[\s.!;,?!]*$/i.test(message.content))
        message.channel.send("2 !")
    else if (/O+U+I+[\s.!;,?!]*$/i.test(message.content))
        message.channel.send("Stitti !")
})

Client.login("OTc5ODEzNjYzNTUwNjE5Njc4.GbhndW.2zmLIVJPYwAkgkNYrCWL5tc1qvME7ikwX5s_7k")

