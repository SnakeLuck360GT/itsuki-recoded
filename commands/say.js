module.exports = {
    name: 'say',
    description: "does a say",
    execute(message, args, Discord, client){

      let TheMessage = args.join(" ").slice(6);

      

      if(args[0] === "embed" && message.author.id === "774587844358045696"){  
      const embed = new Discord.MessageEmbed()
        .setDescription(`${TheMessage}`)
        .setColor('#FF2D00')
        message.channel.send(embed).then(message.delete({ timeout: 1, reason: 'It had to be done.' }).catch(console.error));
        return;}
        
                
        message.channel.send(`${args.join(' ')}`).then(message.delete({ timeout: 1, reason: 'It had to be done.' }).catch(console.error));

    }
}
