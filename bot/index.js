const Discord = require('discord.js')
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
})

Client.on('ready', () => console.log("Quoi-Feur est opérationnel !"))

Client.on('messageCreate', message => {
    if (/[QK]+U*(OI|OUA)+[\s.!;,?!]*$/i.test(message.content)) {
        message.channel.send("Feur !")
    }
})

Client.login("OTc5ODEzNjYzNTUwNjE5Njc4.GbhndW.2zmLIVJPYwAkgkNYrCWL5tc1qvME7ikwX5s_7k")