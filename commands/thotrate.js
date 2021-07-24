module.exports = {
    name: 'thotrate',
    description: "does a thot",
    execute(message, args, Discord, Client){
      


      let thotrate = Math.floor(Math.random() * 100) 

      const thot1 = new Discord.MessageEmbed()
      .setTitle(`${thotrate}% thot! 😏`)
      .setDescription("🟥⬜⬜⬜⬜⬜⬜⬜⬜⬜")
      .setColor('RANDOM')

      const thot2 = new Discord.MessageEmbed()
      .setTitle(`${thotrate}% thot! 😏`)
      .setDescription("🟥🟥⬜⬜⬜⬜⬜⬜⬜⬜")
      .setColor('RANDOM')
      
      const thot3 = new Discord.MessageEmbed()
      .setTitle(`${thotrate}% thot! 😏`)
      .setDescription("🟥🟥🟥⬜⬜⬜⬜⬜⬜⬜")
      .setColor('RANDOM')

      const thot4 = new Discord.MessageEmbed()
      .setTitle(`${thotrate}% thot! 😏`)
      .setDescription("🟥🟥🟥🟥⬜⬜⬜⬜⬜⬜")
      .setColor('RANDOM')

      const thot5 = new Discord.MessageEmbed()
      .setTitle(`${thotrate}% thot! 😏`)
      .setDescription("🟥🟥🟥🟥🟥⬜⬜⬜⬜⬜")
      .setColor('RANDOM')

      const thot6 = new Discord.MessageEmbed()
      .setTitle(`${thotrate}% thot! 😏`)
      .setDescription("🟥🟥🟥🟥🟥🟥⬜⬜⬜⬜")
      .setColor('RANDOM')

      const thot7 = new Discord.MessageEmbed()
      .setTitle(`${thotrate}% thot! 😏`)
      .setDescription("🟥🟥🟥🟥🟥🟥🟥🟥⬜⬜⬜")
      .setColor('RANDOM')

      const thot8 = new Discord.MessageEmbed()
      .setTitle(`${thotrate}% thot! 😏`)
      .setDescription("🟥🟥🟥🟥🟥🟥🟥🟥⬜⬜")
      .setColor('RANDOM')

      const thot9 = new Discord.MessageEmbed()
      .setTitle(`${thotrate}% thot! 😏`)
      .setDescription("🟥🟥🟥🟥🟥🟥🟥🟥🟥⬜")
      .setColor('RANDOM')

      const thot10 = new Discord.MessageEmbed()
      .setTitle(`${thotrate}% thot! 😏`)
      .setDescription("😏😏😏😏😏😏😏😏😏😏")
      .setColor('RANDOM')



      if (thotrate < 10) return message.channel.send(thot1)
      if (thotrate < 20) return message.channel.send(thot2)
      if (thotrate < 30) return message.channel.send(thot3)
      if (thotrate < 40) return message.channel.send(thot4)
      if (thotrate < 50) return message.channel.send(thot5)
      if (thotrate < 60) return message.channel.send(thot6)
      if (thotrate < 70) return message.channel.send(thot7)
      if (thotrate < 80) return message.channel.send(thot8)
      if (thotrate < 90) return message.channel.send(thot9)
      if (thotrate < 100) return message.channel.send(thot10)
    }
}
