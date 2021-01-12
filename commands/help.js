const Discord = require("discord.js");
const config = require("../config.json");
const cor = require('../colors.json');

exports.run = async(client, message, args) => {
  message.delete();
  /*message.reply('Oi').then(msg => msg.delete({timeout: 5000}));*/
 


  
  const delay = 2570;
  var embed = new Discord.MessageEmbed()
    .setTitle('Para saber mais sobre os meus comandos clique nas reações abaixo!')
    .setColor(cor.amarelo)
    .setDescription('⚙️ Comandos administração \n 😋 Comandos diversão'); 

    message.channel.send({ embed }).then( msg => {
      msg.react('⚙️').then(setTimeout(r => {
        msg.react('😋')
        msg.react('👈');
      }, delay ));

      const adm = (reaction, user) => reaction.emoji.name === '⚙️' && user.id === message.author.id;
      const vol = (reaction, user) => reaction.emoji.name === '😋' && user.id === message.author.id;
      const vol2 = (reaction, user) => reaction.emoji.name === '👈' && user.id === message.author.id;
      const admCreate = msg.createReactionCollector(adm, {});
      const volCreate = msg.createReactionCollector(vol, {});
      const vol2Create = msg.createReactionCollector(vol2, {});

      admCreate.on('collect', async (reaction, r2) => {
        embed = new Discord.MessageEmbed()
          .setTitle('Comandos de administradores')
          .setDescription(`${config.prefix}aceitar <user>
          ${config.prefix}ban <user>
          ${config.prefix}clear <2 a 99>
          ${config.prefix}dm <user> <mensagem>
          ${config.prefix}kick <user> <motivo>
          ${config.prefix}lock
          ${config.prefix}modolento <seguntos/minutos/horas> <motivo>
          ${config.prefix}reprovar <user> <motivo>
          ${config.prefix}say <mensagem>
          ${config.prefix}unlock`)
          .setColor(cor.ciano);
          msg.edit(embed);
          reaction.users.remove(message.author);
      });

      vol2Create.on('collect', async (reaction, r2) => {
        embed = new Discord.MessageEmbed()
       .setTitle(`Para saber mais sobre os meus comandos clique nas reações abaixo!`)
       .setDescription('⚙️ Comandos administração \n 😋 Comandos diversão')
       .setColor('BLUE');
        msg.edit(embed);
        reaction.users.remove(message.author);
});



volCreate.on('collect', async (reaction, r2) => {
  embed = new Discord.MessageEmbed()
  .setTitle('Diversão')
  .setDescription(`${config.prefix}add <oq o bot faz prefixo e convite>
  ${config.prefix}avatar <user>
  ${config.prefix}beijar <user>
  ${config.prefix}ping
  ${config.prefix}ticket
  ${config.prefix}uptime`)
  .setColor(cor.ciano)
  msg.edit(embed);
  reaction.users.remove(message.author);
});

});
  message.delete(8000).catch(O_o => {});

};

exports.help = {
  name: 'help'
};