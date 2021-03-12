module.exports = {
    name: 'finished',
    description: "does a finished",
    execute(message, args, Discord, client){
      
      
message.delete()



if(!message.channel.topic) return message.channel.send("There is no channel topic, change it to the number of episodes you want.")
if(!args[0]) return message.channel.send("Please rate the anime with a number; `args[0]`")
message.channel.setParent('652990993834049566')


const embed = new Discord.MessageEmbed()
        .setTitle('Itsuki - Anime Finished!')
        .setAuthor('Itsuki')
        .setThumbnail('https://cdn.discordapp.com/attachments/778975549070114847/778982178302197760/9a6fd75488a71a4812f52b2b8302d045.jpg')
        .setDescription(`Anime name: ${message.channel.name}\n
        Episodes: ${message.channel.topic}\n
        Rating: ${args[0]}⭐/10⭐`)
        .setColor('#FF2D00')
        message.channel.send(embed);

 if(args[0] === "10")  message.channel.send("💜 | `Rated 10/10, rewatchable.`")


}};
