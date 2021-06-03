const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = '/'


client.once('ready', () => {
  console.log('Bot Loaded!')
  });

client.on('message', async message => {
  var server = message.guild

if(server.channels.cache.find(c => c.name == "none-what-noob"))return console.log("New channel not created as it already exists");
  if(!server.channels.cache.find(c => c.name == "【⏸】Current Anime(s)" && c.type == "category"))return console.log("big bad");

  server.channels.create("none-what-noob")
  .then(channel => {
      let category = server.channels.cache.find(c => c.name == "【⏸】Current Anime(s)" && c.type == "category");
    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
  }).catch(console.error);

})

// bye bye episode reactions

client.login(process.env.token);

