const {MessageEmbed} = require('discord.js');

exports.run = async (client, message, args) => {
   
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.channel.send(`Você não mencionou um usuário ou forneceu uma identificação inválida`);

    let rasao = args.slice(1).join(" ");

    if(!rasao) return message.channel.send("Você não especificou sua mensagem");

const embed = new MessageEmbed()
    .setTitle('Reprovado')
    .setDescription(`Olá, o ${message.author} reprovou o bot de ${user} com o motivo de: \n ${rasao}`)
    .setColor('RED')
    .setFooter('Todos os direitos reservados!')


    message.guild.channels.cache.get('795282095743565878').send(embed)
    message.delete()
};