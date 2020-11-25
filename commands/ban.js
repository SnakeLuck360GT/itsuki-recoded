module.exports = {
    name: 'kick',
    description: "does a ban",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned! haha funni they were gaytard");
        }else{
            message.channel.send(`You coudn't kick that member!`);
        }
    }
}