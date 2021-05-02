
module.exports = {
    name: 'stats',
    description: "displays stats",
    execute(message, args, Discord, client){

      const UserPFP = client.user.avatarURL();
                
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        
        
        const embed = new Discord.MessageEmbed() 
        .setTitle(`${client.user.username} - Stats`)
        .setAuthor(`${client.user.username}`)
        .setDescription(`**Logged in as ${client.user.tag}**
        \n Uptime: ${uptime}
        \n Users: ${client.users.cache.size}
        \n Channels: ${client.channels.cache.size}
        \n Servers: ${client.guilds.cache.size}
        \n Ping:  ${Math.round(client.ws.ping)}ms
        `)
        .setColor('#FF2D00')
        .setFooter('If you want your user stats, do /profile .')
        .setThumbnail(UserPFP)
        message.channel.send(embed)
        .then().catch(console.error).then(d_msg => { d_msg.delete({ timeout: 5000, reason: 'It had to be done.' });})
    }
}
