module.exports = {
    name: 'simprate',
    description: "does a simprate",
    execute(message, args, Discord, Client){
      




      let simprate = Math.floor(Math.random() * 100)



      
      
      
      const simp1 = new Discord.MessageEmbed()
      .setTitle(`You are ${simprate}% simp!`)
      .setDescription("🟥⬜⬜⬜⬜⬜⬜⬜⬜⬜")
      .setColor('RANDOM')

      const simp2 = new Discord.MessageEmbed()
      .setTitle(`You are ${simprate}% simp!`)
      .setDescription("🟥🟥⬜⬜⬜⬜⬜⬜⬜⬜")
      .setColor('RANDOM')
      
      const simp3 = new Discord.MessageEmbed()
      .setTitle(`You are ${simprate}% simp!`)
      .setDescription("🟥🟥🟥⬜⬜⬜⬜⬜⬜⬜")
      .setColor('RANDOM')

      const simp4 = new Discord.MessageEmbed()
      .setTitle(`You are ${simprate}% simp!`)
      .setDescription("🟥🟥🟥🟥⬜⬜⬜⬜⬜⬜")
      .setColor('RANDOM')

      const simp5 = new Discord.MessageEmbed()
      .setTitle(`You are ${simprate}% simp!`)
      .setDescription("🟥🟥🟥🟥🟥⬜⬜⬜⬜⬜")
      .setColor('RANDOM')

      const simp6 = new Discord.MessageEmbed()
      .setTitle(`You are ${simprate}% simp!`)
      .setDescription("🟥🟥🟥🟥🟥🟥⬜⬜⬜⬜")
      .setColor('RANDOM')

      const simp7 = new Discord.MessageEmbed()
      .setTitle(`You are ${simprate}% simp!`)
      .setDescription("🟥🟥🟥🟥🟥🟥🟥🟥⬜⬜⬜")
      .setColor('RANDOM')

      const simp8 = new Discord.MessageEmbed()
      .setTitle(`You are ${simprate}% simp!`)
      .setDescription("🟥🟥🟥🟥🟥🟥🟥🟥⬜⬜")
      .setColor('RANDOM')

      const simp9 = new Discord.MessageEmbed()
      .setTitle(`You are ${simprate}% simp!`)
      .setDescription("🟥🟥🟥🟥🟥🟥🟥🟥🟥⬜")
      .setColor('RANDOM')

      const simp10 = new Discord.MessageEmbed()
      .setTitle(`You are ${simprate}% simp!`)
      .setDescription("❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️")
      .setColor('RANDOM')
      



      if (simprate < 10) return message.channel.send(simp1)
      if (simprate < 20) return message.channel.send(simp2)
      if (simprate < 30) return message.channel.send(simp3)
      if (simprate < 40) return message.channel.send(simp4)
      if (simprate < 50) return message.channel.send(simp5)
      if (simprate < 60) return message.channel.send(simp6)
      if (simprate < 70) return message.channel.send(simp7)
      if (simprate < 80) return message.channel.send(simp8)
      if (simprate < 90) return message.channel.send(simp9)
      if (simprate < 100) return message.channel.send(simp10)



    }
}
