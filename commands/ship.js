module.exports = {
    name: 'ship',
    description: "does a shipppp",
    execute(message, args, Discord, Client){
      


      let couplerate = Math.floor(Math.random() * 100) 

      const cp1 = new Discord.MessageEmbed()
      .setTitle(`${couplerate}% compatible! ❤️`)
      .setDescription("🟥⬜⬜⬜⬜⬜⬜⬜⬜⬜")
      .setColor('RANDOM')

      const cp2 = new Discord.MessageEmbed()
      .setTitle(`${couplerate}% compatible! ❤️`)
      .setDescription("🟥🟥⬜⬜⬜⬜⬜⬜⬜⬜")
      .setColor('RANDOM')
      
      const cp3 = new Discord.MessageEmbed()
      .setTitle(`${couplerate}% compatible! ❤️`)
      .setDescription("🟥🟥🟥⬜⬜⬜⬜⬜⬜⬜")
      .setColor('RANDOM')

      const cp4 = new Discord.MessageEmbed()
      .setTitle(`${couplerate}% compatible! ❤️`)
      .setDescription("🟥🟥🟥🟥⬜⬜⬜⬜⬜⬜")
      .setColor('RANDOM')

      const cp5 = new Discord.MessageEmbed()
      .setTitle(`${couplerate}% compatible! ❤️`)
      .setDescription("🟥🟥🟥🟥🟥⬜⬜⬜⬜⬜")
      .setColor('RANDOM')

      const cp6 = new Discord.MessageEmbed()
      .setTitle(`${couplerate}% compatible! ❤️`)
      .setDescription("🟥🟥🟥🟥🟥🟥⬜⬜⬜⬜")
      .setColor('RANDOM')

      const cp7 = new Discord.MessageEmbed()
      .setTitle(`${couplerate}% compatible! ❤️`)
      .setDescription("🟥🟥🟥🟥🟥🟥🟥⬜⬜⬜")
      .setColor('RANDOM')

      const cp8 = new Discord.MessageEmbed()
      .setTitle(`${couplerate}% compatible! ❤️`)
      .setDescription("🟥🟥🟥🟥🟥🟥🟥🟥⬜⬜")
      .setColor('RANDOM')

      const cp9 = new Discord.MessageEmbed()
      .setTitle(`${couplerate}% compatible! ❤️`)
      .setDescription("🟥🟥🟥🟥🟥🟥🟥🟥🟥⬜")
      .setColor('RANDOM')

      const cp10 = new Discord.MessageEmbed()
      .setTitle(`${couplerate}% compatible! ❤️`)
      .setDescription("❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️")
      .setColor('RANDOM')



      if (couplerate < 10) return message.channel.send(cp1)
      if (couplerate < 20) return message.channel.send(cp2)
      if (couplerate < 30) return message.channel.send(cp3)
      if (couplerate < 40) return message.channel.send(cp4)
      if (couplerate < 50) return message.channel.send(cp5)
      if (couplerate < 60) return message.channel.send(cp6)
      if (couplerate < 70) return message.channel.send(cp7)
      if (couplerate < 80) return message.channel.send(cp8)
      if (couplerate < 90) return message.channel.send(cp9)
      if (couplerate < 100) return message.channel.send(cp10)
    }
}
