module.exports = {
    name: 'commands',
    description: "does a command list",
    execute(message, args, Discord, client){
        const embed = new Discord.MessageEmbed()
        .setTitle('Itsuki - Commands')
        .setAuthor('Itsuki')
        .setThumbnail('https://cdn.discordapp.com/attachments/778975549070114847/778982178302197760/9a6fd75488a71a4812f52b2b8302d045.jpg')
        .setDescription(`
        __Admin Commands__
        \nSetup - Sets up key roles needed for commands, recommended to do before using commands.
        \nKick - Kicks a member
        \nBan - Bans a member
        \nClear -  Purges messages
        \nMute - Mutes a member, please do /setup before trying this command.
        \nUnmute - Unmutes a member (must have above set up)
        \nDM - DM's a member
        \nSay - Makes the bot say a message.
        \n__General Commands__
        \nHelp - Displays useless information
        \nStats - Displays the Bot's stats.
        \nInvite - Gives an invite for the bot.
        \n__Misc Commands__
        \nSlap - Slaps someone.
        \nKill - Kills someone.
        `)
        .setColor('#FF2D00')
        message.channel.send(embed)
    

        }
    }
