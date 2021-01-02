const Discord = require("discord.js");
const client  = new Discord.Client();
const pass = require('./token.json');
const config = require('./config.json');

client.on("message", message => {
if(message.channel.id === "792364533427339324") {
  message.react('👍')
  message.react('👎')
};
});

client.on("message", (msg) => {
  if(msg.content == "<@787339966685642784>") {
    return msg.reply(`Olá eu sou o <@787339966685642784> e como mencionou-me acho que precisa de ajuda, \n Então o meu prefixo é: ${config.prefix} \n \n  agora basta fazer ${config.prefix}help e eu ajudarai!`)
  }
});

client.on('ready', () => {
    setInterval(function(){ 
        console.log("ping");
     }, 30 * 1000);
});

//Boas vindas
client.on("guildMemberAdd", async (member) => { 

    let guild = await client.guilds.cache.get("792364532353335296");
    let channel = await client.channels.cache.get("792364532676427793");
    let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "nomedoemoji");
    if (guild != member.guild) {
      return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
     } else {
        let embed = await new Discord.MessageEmbed()
        .setColor("#7c2ae8")
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(`${emoji} Boas-vindas ${emoji}`)
        .setImage("")
        .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco! :heart:`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setFooter("Código de Hyouka Discord")
        .setTimestamp();
  
      channel.send(embed);
    }
});

//saida 
client.on("guildMemberRemove", async (member) => { 

    let guild = await client.guilds.cache.get("792364532353335296");
    let channel = await client.channels.cache.get("792364532676427794");
    let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "nomedoemoji");
    if (guild != member.guild) {
      return console.log("Algum saco pela saiu do servidor. Mas não é nesse, então tá tudo bem :)");
     } else {
        let embed = await new Discord.MessageEmbed()
        .setColor("#7c2ae8")
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(`${emoji} Adeus! ${emoji}`)
        .setImage("https://imgur.com/3vYVlHb.gif")
        .setDescription(`**${member.user.username}**, saiu do servidor! :broken_heart:`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setFooter("Código de Hyouka Discord")
        .setTimestamp();
  
      channel.send(embed);
    }
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

   const args = message.content
       .trim().slice(config.prefix.length)
       .split(/ +/g);
   const command = args.shift().toLowerCase();

   try {
       const commandFile = require(`./commands/${command}.js`)
       commandFile.run(client, message, args);
   } catch (err) {
   console.error('Erro:' + err);
 }
});

client.on("ready",()=>{
    console.log(`Logando com o bot ${client.user.tag}`);
    client.user.setActivity(`${config.prefix}help (não tem) | "Render Bot"`)
});


client.login(pass.pass);