module.exports = {
    name: 'slap',
    description: "does a slap",
    execute(message, args, Discord, client){
        
        {
            message.channel.send(`${message.author} slapped ${args.join(' ')}`)
             message.channel.send({
                files: ['https://cdn.discordapp.com/attachments/778975549070114847/779059416686526534/tenor_3.gif']
              });

            }
    }
}