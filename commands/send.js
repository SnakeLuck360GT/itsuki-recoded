module.exports = {
    name: 'send',
    description: "does a send",
    execute(message, args, Discord, client){

      message.delete()

// originally named cumlord.js
      let e1 = 1

      while(e1 <= args[0]){
        message.channel.send("Episode " + e1);
        e1++;
      }

       
    }
}
