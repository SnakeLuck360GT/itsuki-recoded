const moment = require('moment');

module.exports = {
  name: 'profile',
  description: "The bot will return the info about the user",
  execute(message, args, Discord, client){
      let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author)

      const embed = new Discord.MessageEmbed()
      .setColor('#DAF7A6') // or .setColor('RANDOM')
      .setAuthor(`${userinfoget.user.tag}`, userinfoget.user.displayAvatarURL())
      .addFields(
          {name: `User ping`,
          value: `<@${userinfoget.id}>`}
      )
      .addFields(
          {name: `User ID`,
          value: `${userinfoget.id}`}
      )
      .addFields(
          {name: 'Joined server',
          value: moment(userinfoget.joinedAt).format('LLLL')}
      )
      .addFields(
          {name: 'Account creation date',
          value: moment(userinfoget.user.createdAt).format('LLLL')}
      )
      .addFields(
          {name: 'Online Status',
          value: `${userinfoget.user.presence.status}`}
      )

      .setFooter(`Bot made by SnakeLuck360GT#0011 • Delivered by ${client.user.username} |\n| Do /profile (@user) to check another person's stats!`)
  

      message.channel.send(embed);
      
  }
}

