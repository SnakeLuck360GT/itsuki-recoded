module.exports = async (Discord, client, message) => {

    const profileModel = require("../../models/profileSchema");
    
      if (!message.content.startsWith(prefix) || message.author.bot) return;
    
      let profileData;
      try {
        profileData = await profileModel.findOne({ userID: message.author.id });
        if (!profileData) {
          let profile = await profileModel.create({
            userID: message.author.id,
            serverID: message.guild.id,
            coins: 1000,
            bank: 0,
          });
          profile.save();
        }
      } catch (err) {
        console.log(err);
      }
      
      const args = message.content.slice(prefix.length).split(/ +/);
      const cmd = args.shift().toLowerCase();
      

      command.execute(message, args, cmd, client, Discord, profileData);
    }
