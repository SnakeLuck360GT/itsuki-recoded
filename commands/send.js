const { MessageButton } = require("discord-buttons")
module.exports = {
  name: 'send',
  description: "does a send",
  execute(message, args, Discord, client){

    message.delete()


    const button = new MessageButton()
    .setStyle("green")
    .setEmoji("641703416376066048")
    .setLabel('Completed')
    .setID("smart")
    
    // buttons ^

let e2 = args[1]

    
    if(args[0] === "from"){
    while(e2 <= args[2]){
      message.channel.setTopic(`${args[2]}`)
      message.channel.send("Episode " + e2, button)
      e2++;
    }};



// originally named cumlord.js
    let e1 = 1

    while(e1 <= args[0]){
      message.channel.setTopic(`${args[0]}`)
      message.channel.send("Episode " + e1, button)
      e1++;
    }


    if(args[0] === "only"){
      message.channel.send(`Episode ${[args[1]]}`, button)
    }

     
  }
}
