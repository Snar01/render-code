/*const Discord = require('discord.js')

exports.run = (client, message, args) =>{
      const user = message.author.id;
    const name = "ticket-" + user;
    if(message.guild.channels.cache.find(ch => ch.name == name)){
        const eb = new Discord.MessageEmbed()
        .setTitle(`${message.author} você já abriu um ticket!`)
        message.channel.send(eb)
    }else{
message.guild.channels.create(name).then((chan)=>{
chan.updateOverwrite(message.guild.roles.everyone, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
})
chan.updateOverwrite(user,{
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
})
const ebw = new Discord.MessageEmbed()
.setTitle(`${message.author} já criai um ticket para você!`)
message.channel.send(ebw);

const ebww = new Discord.MessageEmbed()
.setTitle(`${message.author} o suporte já vem o atender!`)
chan.send(ebww).then((m)=>{ m.pin() })
})
}
}

module.exports.help = {
name : 'ticket',
aliases: ["ticket", "tic", "ti"],
}*/

const Discord = require("discord.js");
const config = require("../config.json");

exports.run = async(client, message, args) => {
  message.delete();
  /*message.reply('Oi').then(msg => msg.delete({timeout: 5000}));*/
 
  const delay = 2570;
  var embed = new Discord.MessageEmbed()
    .setTitle('Clica nas reações para saberres mais sobre os meus comandos!')
    .setDescription('Olá clique na reação 🎟️ para abrir um ticket de suporte ? muderação'); 

    message.channel.send({ embed }).then( msg => {
      msg.react('🎟️').then(setTimeout(r => {
      }, delay ));

      const adm = (reaction, user) => reaction.emoji.name === '🎟️' && user.id === message.author.id;
      const admCreate = msg.createReactionCollector(adm, {});

      admCreate.on('collect', async (reaction, r2) => {

        const user = message.author;
        const name = "ticket";
        if(message.guild.channels.cache.find(ch => ch.name == name)){
            const eb = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag} já abriu um ticket`)
            message.channel.send(eb).then(msg => msg.delete({timeout: 5000}));
        }else{
    message.guild.channels.create(name).then((chan)=>{
    chan.updateOverwrite(message.guild.roles.everyone, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: false
    })
    chan.updateOverwrite(user,{
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true
    })
    const ebw = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag} já criai um ticket para você!`)
    message.channel.send(ebw).then(msg => msg.delete({timeout: 5000}));
    
    const ebww = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag} o suporte já vem o atender!, mas atenção não fale bobagem porque poderá ser ban!`)
    chan.send(ebww).then((m)=>{ m.pin() })
    })
    }
          msg.edit(embed);
          reaction.users.remove(message.author);
      });

});
  message.delete(8000).catch(O_o => {});

};

module.exports.help = {
    name : 'ticket',
    aliases: ["ticket", "tic", "ti"],
}