module.exports = {
    name: 'dm',
    description: "does a dm",
    execute(message, args, Discord, client){
                
        message.delete({ timeout: 1, reason: 'It had to be done.' }).catch(console.error);
        let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if (!dUser) return message.channel.send("Can't find user!")
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
        let dMessage = args.join(" ").slice(22);
        if(dMessage.length < 1) return message.reply('You must supply a message!')
    
        dUser.send(`${dMessage}`)
        dUser.send
        files:["https://cdn.discordapp.com/attachments/778975549070114847/778982150614679612/EsKMsr2.jpg"]
    
        message.author.send(`${message.author} You have sent your message to ${dUser}`)
    }
}
