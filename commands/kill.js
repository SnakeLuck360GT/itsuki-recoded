module.exports = {
    name: 'kill',
    description: "does a kill",
    execute(message, args, Discord, client){
        
        {
            message.channel.send(`${message.author} killed ${args.join(' ')}`)
             message.channel.send({
                files: ['https://cdn.discordapp.com/attachments/800027530580459560/800028093015785572/tenor_4.gif']
              });

            }
    }
}
