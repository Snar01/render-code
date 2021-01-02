exports.run = async (client, message, args) => {
    if (message.channel.type != 'text' || message.author.bot) return

    let command = message.content.split(' ')[0].slice(1);
    let isBotOwner = message.author.id == '568392123955675146' || '737100011552112720';

    switch (command) {
        case 'stop': {
            if (!isBotOwner) return message.channel.send("**Somente o criador do Render (!) pode executar este comando!**");

            message.channel.send('**A desligar o Render (!)...**').then(m => {
                client.destroy();
            });
            break;
        }
    }
};