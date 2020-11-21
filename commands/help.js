module.exports = {
    name: 'help',
    description: "does a help",
    execute(message, args, Discord, client){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Itsuki - The most useless anime discord bot.')
        .setURL('https://cdn.discordapp.com/attachments/778975549070114847/778982150614679612/EsKMsr2.jpg')
        .setAuthor('Itsuki')
        .setDescription("Hi! I'm Itsuki! The fucking useless bot brought to you by God. \n Itsuki > Miku")
        .setColor('#FF2D00')
        .setThumbnail('https://cdn.discordapp.com/attachments/778975549070114847/778982178302197760/9a6fd75488a71a4812f52b2b8302d045.jpg')
        .setImage('https://cdn.discordapp.com/attachments/778975549070114847/778982150614679612/EsKMsr2.jpg')
        .setFooter('shh dont look down here', 'https://cdn.discordapp.com/attachments/778975549070114847/778982178302197760/9a6fd75488a71a4812f52b2b8302d045.jpg')
        .addFields({
          name: 'Commands',
          value: 'work it out yourself',
          inline: true
        }, {
          name: 'What perms do you need',
          value: 'manage messages ig',
          inline: true
        })
        .setTimestamp();

      message.channel.send(embed);
    

    }
}