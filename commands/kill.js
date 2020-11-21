module.exports = {
    name: 'kill',
    description: "does a kill",
    execute(message, args, Discord, client){
        
        {
            message.channel.send(`${message.author} killed ${args.join(' ')}`)
             message.channel.send({
                files: ['https://cdn.discordapp.com/attachments/778975549070114847/779061100665765898/tenor_4.gif']
              });

            }
    }
}