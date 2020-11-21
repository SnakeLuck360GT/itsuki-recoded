module.exports = {
    name: 'say',
    description: "does a say",
    execute(message, args, Discord, client){
                
        message.channel.send(`${args.join(' ')}`).then(message.delete({ timeout: 1, reason: 'It had to be done.' }).catch(console.error));

    }
}