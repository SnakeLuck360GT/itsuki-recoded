module.exports = {
  name: 'edit',
  description: "does a edit",
  execute(message, args, Discord, client){
    
    message.delete()
  
   message.channel.messages.fetch({around: args[0], limit: 1})
    .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(args[1]);
    
    });

    

    message.channel.send(`Message with ID: ${args[0]} has been edited.\nDeleting this message in 2 seconds.`).then(damessage => damessage.delete({ timeout: 2000, reason: 'It had to be done.' }))


  
     
  }
}
