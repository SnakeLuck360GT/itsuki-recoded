module.exports = {
    name: 'slap',
    description: "does a slap",
    execute(message, args, Discord, client){
        
        {
            message.channel.send(`${message.author} slapped ${args.join(' ')}`)
             message.channel.send({
                files: ['https://cdn.discordapp.com/attachments/800027530580459560/800028068768907334/tenor_3.gif']
              });

            }
    }
}
