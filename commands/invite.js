module.exports = {
    name: 'invite',
    description: "does a invite",
    execute(message, args, Discord, client){
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Itsuki - The most useless anime discord bot.')
        .setURL('https://discord.com/oauth2/authorize?client_id=778959468360630323&permissions=8&scope=bot')
        .setAuthor('Itsuki - Invite')
        .setColor('#FF2D00')
        message.channel.send(embed)

    

    }
}