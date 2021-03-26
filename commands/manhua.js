module.exports = {
    name: 'manhua',
    description: "does a manhua",
    execute(message, args, Discord, client){
      
      
message.delete()


if(!args[0]) return message.channel.send("Incorrect arguments,\nExample: `/manhua create (name of manhua) (ongoing/finished) (link to manhua)`");


if(args[0] === "create"){  
var server = message.guild
server.channels.create(`${args[1]}`)
  .then(channel => {
    channel.setParent("822946322080071690");
    channel.setTopic(`${args[2]}`)
    channel.setName ("【💛】" + channel.name)
    channel.send(`Manhua: ${args[1]}\nOngoing/finished: ${args[2]}`);
    client.channels.cache.get("823698561563623435").send(`${args[3]}`)
  })}




if(!message.channel.topic) return message.channel.send("There is no channel topic, change it to the number of episodes you want.");
if(!args[1] && args[0] === "rate") return message.channel.send("Please rate the anime with a number; `args[2]`");

if(args[0] === "rate"){
message.channel.setParent('822946322080071690')


const embed = new Discord.MessageEmbed()
        .setTitle('Itsuki - Manhua Finished!')
        .setAuthor('Itsuki')
        .setThumbnail('https://cdn.discordapp.com/attachments/778975549070114847/778982178302197760/9a6fd75488a71a4812f52b2b8302d045.jpg')
        .setDescription(`Manhua name: ${message.channel.name}\n
        Episodes: ${message.channel.topic}\n
        Rating: ${args[1]}⭐/10⭐`)
        .setColor('#FF2D00')
        message.channel.send(embed);

 if(args[1] === "10")  message.channel.send("💜 | `Rated 10/10, it's good!!`")
}


}};
