module.exports = {
  name: 'spam',
  description: "good luck have fun",
  execute(message, args, Discord, client){
    
    message.delete()

    if(isFinite(args[0])) return message.channel.send("ping someone next time you retard, you put a space and then put the number of you want to spam").then(damessage => damessage.delete({ timeout: 2000, reason: 'It had to be done.' }))

    message.channel.send(`${message.author} has spammed ${args[0]} for ${args[1]} messages!`)


let e1 = 1

    while(e1 <= args[1]){
      message.channel.send(`${args[0]} : \nSpam number: ` + e1)
      e1++;
    }




  }
}

