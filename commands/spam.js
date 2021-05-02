module.exports = {
  name: 'spam',
  description: "good luck have fun",
  execute(message, args, Discord, client){

    let mention = message.mentions.users.first();
    let mentionid = mention.id

    if(mention.id === "774587844358045696"){console.log(`${message.author.username} tried spamming you for ${args[1]} times!`)}
    
    if(mention.id === "774587844358045696") return message.channel.send(`<@774587844358045696>, ${message.author} tried to spam you for ${args[1]} times! , but you were on the whitelist, so it was prevented.`)



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
