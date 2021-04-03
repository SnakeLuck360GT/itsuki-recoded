  module.exports = {
  name: "balance",
  description: "Check the user balance",
  execute(message, args, client, Discord, profileData) {
    message.channel.send(`Your wallet bal is ${profileData.coins}, you banks bal is ${profileData.bank}`);
  },
};
