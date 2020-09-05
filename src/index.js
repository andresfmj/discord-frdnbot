const Discord = require('discord.js');
const client = new Discord.Client();
const messageEmbed = require('./utils/messageEmbed');

require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on('message', msg => {
    console.log(msg.content)
    if (msg.channel.type === 'dm') {
        msg.reply(`hola`)
        msg.react('👍')
    }
    
    if (msg.content.toLocaleLowerCase() === 'hola') {
        msg.channel.send(messageEmbed())
    }
})

client.login(DISCORD_TOKEN);
