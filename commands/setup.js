module.exports = {
    name: 'setup',
    description: "does a setup",
    execute(message, args, Discord, Client){
        const guild = message.guild
        
        
        if(message.guild.roles.cache.find(r => r.name === "Member"))
        return message.reply('Setup has already been completed/roles have already been created. Duplicate roles not created.')

        if(message.guild.roles.cache.find(r => r.name === "Muted"))
        return message.reply('Setup has already been completed/roles have already been created. Duplicate roles not created.')

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have the permissions to use this command, you need the permission `ADMINISTRATOR` to use this.");
        
        guild.roles.create({
            data: {
              name: 'Member',
              color: 'RED',
            },
            reason: 'we needed a role for Super normal People'
          })
          .then(
            guild.roles.create({
            data: {
              name: 'Muted',
              color: 'BLUE',
            },
            reason: 'we needed a role for Super gay People'

        }));
        const embed = new Discord.MessageEmbed()
        .setTitle('Itsuki - Setup')
        .setAuthor('Itsuki')
        .setThumbnail('https://cdn.discordapp.com/attachments/778975549070114847/778982178302197760/9a6fd75488a71a4812f52b2b8302d045.jpg')
        .setDescription(`Setup complete! Bot is now ready to use.`)
        .setColor('#FF2D00')
        message.channel.send(embed)
    }
}
