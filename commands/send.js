module.exports = {
  name: 'send',
  description: "does a send",
  execute(message, args, Discord, client){

    message.delete()

let e2 = args[1]
    
    if(args[0] === "from"){
    while(e2 <= args[2]){
      message.channel.send("Episode " + e2);
      e2++;
    }};



// originally named cumlord.js
    let e1 = 1

    while(e1 <= args[0]){
      message.channel.send("Episode " + e1);
      e1++;
    }

     
  }
}
