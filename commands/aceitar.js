const {MessageEmbed} = require('discord.js');

exports.run = async (client, message, args) => {
   
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.channel.send(`Você não mencionou um usuário ou forneceu uma identificação inválida`);

    /*let rasao = args.slice(1).join(" ");

    if(!rasao) return message.channel.send("Você não especificou sua mensagem");*/

const embed = new MessageEmbed()
    .setTitle('Aprovado!')
    .setDescription(`Olá, o ${message.author} aceitou o bot de  ${user}`)
    .setColor('YELLO')
    .setFooter('Todos os direitos reservados!')


    message.guild.channels.cache.get('795282095743565878').send(embed)
    message.delete()
};