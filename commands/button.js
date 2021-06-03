const { MessageButton } = require("discord-buttons")


module.exports = {
    name: 'button',
    description: "does a button",
    execute(message, args, Discord, buttonass){
      message.delete()
     
    const embed = new Discord.MessageEmbed()
    .setTitle("Are you smart")
    .setColor("BLUE")

    const yes = new MessageButton()
    .setStyle("green")
    .setEmoji("641703416376066048")
    .setLabel('Completed')
    .setID("smart")

    const no = new MessageButton()
    .setStyle("green")
    .setLabel('Yes')
    .setID("smart")

message.channel.send("yes", yes)






      
  


    }
}
