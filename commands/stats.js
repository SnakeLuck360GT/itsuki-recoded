
module.exports = {
    name: 'stats',
    description: "displays stats",
    execute(message, args, Discord, client){
                
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        
        
        const embed = new Discord.MessageEmbed() 
        .setTitle('Itsuki - Stats')
        .setAuthor('Itsuki')
        .setDescription(`**Logged in as ${client.user.tag}**
        \n Uptime: ${uptime}
        \n Users: ${client.users.cache.size}
        \n Channels: ${client.channels.cache.size}
        \n Servers: ${client.guilds.cache.size}
        \n Ping:  ${Math.round(client.ws.ping)}ms
        `)
        .setColor('#FF2D00')
        .setThumbnail('https://cdn.discordapp.com/attachments/778975549070114847/778982178302197760/9a6fd75488a71a4812f52b2b8302d045.jpg')
        message.channel.send(embed)
        .then().catch(console.error).then(d_msg => { d_msg.delete({ timeout: 5000, reason: 'It had to be done.' });})
    }
}