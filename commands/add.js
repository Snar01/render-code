const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const msg = args.join(' ');
    const embed = new Discord.MessageEmbed()
    .addField('Autor', message.author)
    .addField('No que pedio add?', msg)
    .addField(`Para aceitar digite !aceitar <@user> para reprovar digite !reprovar <@user> <rasão>`)
    .setColor('YELLO')
    .setFooter('Todos os direitos reservados!')

    message.guild.channels.cache.get('795284372558184448').send(embed)
    message.delete()
    return message.author.send('Enviando com sucesso!')
}