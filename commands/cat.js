const meow = require("random-meow");


module.exports = {
    name: 'cat',
    description: "does a clear",
   async  execute(message, args, Discord, client) {

     message.delete()


     var messages = ["Hey, cat is going to make day better ok :)", "yhahahahehnenska kitty is here aaaaaa","keep smiling qt ❤️","kitty","cat","cat will hug u better ok awawawaawawawa","Stay PAWsitive! (i am so so sorry for cat puns please forgive me)","keep trying you'll get better i promise :))","ooooo kitty", "kitty catty how cuteeee"]
     var behappierthanbeforeplease = messages[Math.floor(Math.random()*messages.length)];

     meow().then(url => message.channel.send(`${behappierthanbeforeplease}\n`+`${url}`)).catch(console.error);





   


 }
}   
