module.exports = {
    name: 'webtoon',
    description: "does a webtoon",
    execute(message, args, Discord, client){
      
      
message.delete()


if(!args[0]) return message.channel.send("Incorrect arguments,\nExample: `/webtoon create/rate (number/name)` (link to webtoon) (number of ep)");


if(args[0] === "create"){  
  if(!isFinite(args[3])) return message.channel.send("The argument: `args[2]` is not a number, and cannot be set as a channel topic, please retry the command with a valid argument.")
var server = message.guild
server.channels.create(`${args[1]}`)
  .then(channel => {
    channel.setParent("822946322080071690");
    channel.setTopic(`${args[3]}`)
    channel.setName ("【💚】" + channel.name)
    channel.send(`/send ${args[3]}`);
    client.channels.cache.get("822946391424892948").send(`${args[2]}`)
  })}




if(!message.channel.topic) return message.channel.send("There is no channel topic, change it to the number of episodes you want.");
if(!args[1] && args[0] === "rate") return message.channel.send("Please rate the anime with a number; `args[2]`");

if(args[0] === "rate"){
message.channel.setParent('822946322080071690')


const embed = new Discord.MessageEmbed()
        .setTitle('Itsuki - Webtoon Finished!')
        .setAuthor('Itsuki')
        .setThumbnail('https://cdn.discordapp.com/attachments/778975549070114847/778982178302197760/9a6fd75488a71a4812f52b2b8302d045.jpg')
        .setDescription(`Webtoon name: ${message.channel.name}\n
        Episodes: ${message.channel.topic}\n
        Rating: ${args[1]}⭐/10⭐`)
        .setColor('#FF2D00')
        message.channel.send(embed);

 if(args[1] === "10")  message.channel.send("💜 | `Rated 10/10, it's good!!`")
}


}};
