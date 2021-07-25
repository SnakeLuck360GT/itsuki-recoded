const Discord = require('discord.js');
const client = new Discord.Client();
const buttonass = require('discord-buttons')(client);
const ms = require('ms');


 
const prefix = '/';

 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command, Discord, client);
}

const { MessageButton } = require("discord-buttons")


client.on('clickButton', async (button) => {
    if (button.id === 'dumbass') {
        button.defer()
      button.channel.send(`${button.clicker.user.tag} is a dumbass!`);
    }

    if(button.id === 'smart') {
        button.defer()
     
       const button1 = new MessageButton()
            .setStyle("green")
            .setEmoji("641703416376066048")
            .setLabel('Completed')
            .setID("smart")

        let epnum = button.message.content
        let epnumber = epnum.slice(8)

        epnumber++

        button.channel.send(`Episode ` + epnumber, button1)

        const heart = new MessageButton()
        .setStyle("red")
        .setEmoji("849990768008757278")
        .setLabel("Good episode?")
        .setID("heart")
        


var currentdate = new Date(); 
var datetime = "Finished at: " + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
console.log(datetime)
 




button.message.edit("<a:hype:849994064425386034> | "+ `${button.message.content}`+ `\n<a:hehehi:849994109706829864> | ${datetime}` + `\n<a:heart:849990768008757278> | Good episode? : `, heart)
    }
    
        if (button.id === 'heart') {
        button.defer()
          const end = new MessageButton()
          .setStyle("green")
          .setEmoji("641703416376066048")
          .setLabel(`Done!`)
          .setID("end")
        
        button.message.edit(`${button.message.content} ` + " ❤️", end)
    }

    if (button.id === 'end'){
      button.clicker.user.send("what did you expect from clicking this button")
    }
    
    
    
    
    
    })
 




 

 
client.once('ready', () => {
    console.log('Bot Loaded!')
    const BootChannel = "827983469945552907"
        const shank = new Discord.MessageEmbed()
        .setTitle('Booted Up!')
        .setColor('RANDOM')
        client.channels.cache.get(BootChannel).send(shank)
});


const activities_list = [
    "❤️| Itsuki > Miku", 
    "❤️| Hi!",
    "❤️| Itsuki!", 
    "❤️| Hugging y'all",
    "❤️| Pay me",
    "❤️| Itsuki > Miku",
    "❤️| Uesugi-san~ ",
    "❤️| Five-part even from here on~",
    "❤️| This message will self-destruct in 10 seconds",
    "❤️| CurryBoi666#5518 is gay",
    "❤️| SnakeLuck360GT#0011 is good ig",
    "❤️| /help",
    "❤️| /stats",
    "❤️| /slap",
    "❤️| /kill"

    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});





 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'stats'){
        client.commands.get('stats').execute(message, args, Discord, client);
    } 

    if(command === 'dm'){
        client.commands.get('dm').execute(message, args, Discord, client);
    }

    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord, client);
    }

    if(command === 'invite'){
        client.commands.get('invite').execute(message, args, Discord, client);
    }

    if(command === 'slap'){
        client.commands.get('slap').execute(message, args, Discord, client);
    }

    if(command === 'kill'){
        client.commands.get('kill').execute(message, args, Discord, client);
    }

    if(command === 'say'){
      client.commands.get('say').execute(message, args, Discord, client);
    }

    if(command === 'clear'){
        client.commands.get('clear').execute(message, args, Discord, client);
    }

    if(command === 'kick'){
        client.commands.get('kick').execute(message, args, Discord, client);
    }

    if(command === 'ban'){
        client.commands.get('ban').execute(message, args, Discord, client);
    }

    if(command === 'commands'){
        client.commands.get('commands').execute(message, args, Discord, client);
    }

    if(command === 'mute'){
        client.commands.get('mute').execute(message, args, Discord, client);
    }
    
    if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args, Discord, client);
    }

    if(command === 'setup'){
        client.commands.get('setup').execute(message, args, Discord, client);
    }

        if(command === 'anime'){
        client.commands.get('anime').execute(message, args, Discord, client);
    }

            if(command === 'cry'){
        client.commands.get('cry').execute(message, args, Discord, client);
    }

          if(command === 'webtoon'){
        client.commands.get('webtoon').execute(message, args, Discord, client);
    }

              if(command === 'send'){
        client.commands.get('send').execute(message, args, Discord, client);
    }

    
              if(command === 'manhua'){
        client.commands.get('manhua').execute(message, args, Discord, client);
    }

                  if(command === 'edit'){
        client.commands.get('edit').execute(message, args, Discord, client);
    }

                      if(command === 'spam'){
        client.commands.get('spam').execute(message, args, Discord, client);
    }

                          if(command === 'profile'){
        client.commands.get('profile').execute(message, args, Discord, client);
    }

                                  if(command === 'apply'){
        client.commands.get('apply').execute(message, args, Discord, client);
    }

                                          if(command === 'button'){
        client.commands.get('button').execute(message, args, Discord, buttonass);
    }
 
         if(command === 'cat'){
        client.commands.get('cat').execute(message, args, Discord, client);
    }

      if(command === 'ship'){
        client.commands.get('ship').execute(message, args, Discord, client);
    }

          if(command === 'simprate'){
        client.commands.get('simprate').execute(message, args, Discord, client);
    }

    
          if(command === 'thotrate'){
        client.commands.get('thotrate').execute(message, args, Discord, client);
    }



});

client.login(process.env.token);
  
