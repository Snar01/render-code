const Discord = require("discord.js");
const config = require("../config.json");

exports.run = async(client, message, args) => {
  message.delete();
  /*message.reply('Oi').then(msg => msg.delete({timeout: 5000}));*/
 


  
  const delay = 2570;
  var embed = new Discord.MessageEmbed()
    .setTitle('Para saber mais sobre os meus comandos clique nas reações abaixo!')
    .setDescription('⚙️ Cmds(comandos para os bots)'); 

    message.channel.send({ embed }).then( msg => {
      msg.react('⚙️').then(setTimeout(r => {
        msg.react('👈');
      }, delay ));

      const adm = (reaction, user) => reaction.emoji.name === '⚙️' && user.id === message.author.id;
      const vol = (reaction, user) => reaction.emoji.name === '👈' && user.id === message.author.id;
      const admCreate = msg.createReactionCollector(adm, {});
      const volCreate = msg.createReactionCollector(vol, {});

      admCreate.on('collect', async (reaction, r2) => {
        embed = new Discord.MessageEmbed()
          .setTitle('')
          .setDescription(``)
          .setColor('BLUE');
          msg.edit(embed);
          reaction.users.remove(message.author);
      });

      volCreate.on('collect', async (reaction, r2) => {
        embed = new Discord.MessageEmbed()
       .setTitle(`Para saber mais sobre os meus comandos clique nas reações abaixo!`)
       .setDescription('⚙️ Cmds(comandos para os bots)')
       .setColor('BLUE');
        msg.edit(embed);
        reaction.users.remove(message.author);
});

});
  message.delete(8000).catch(O_o => {});

};

exports.help = {
  name: 'help'
};