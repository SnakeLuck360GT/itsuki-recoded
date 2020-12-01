const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');
 
const prefix = '/';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command, Discord, client);
}
 
 
client.once('ready', () => {
    console.log('Bot Loaded!');
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



client.on('message', async message => {

    // FOR ITSUKI TO DELETE OTHER PEOPLES MESSAGES IT NEEDS PERMS

    if (message.content.includes("/stats"))
    message.delete({ timeout: 1, reason: 'It had to be done.' }).catch(console.error);
    if (message.content.includes("/invite"))
    message.delete({ timeout: 1, reason: 'It had to be done.' }).catch(console.error);
    if (message.content.includes("/slap"))
    message.delete({ timeout: 1, reason: 'It had to be done.' }).catch(console.error);
    if (message.content.includes("/kill"))
    message.delete({ timeout: 1, reason: 'It had to be done.' }).catch(console.error);
    if (message.content.includes("/help"))
    message.delete({ timeout: 1, reason: 'It had to be done.' }).catch(console.error);


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


});

client.login(process.env.token);

