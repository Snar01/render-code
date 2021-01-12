const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const fs = require('fs');
const Enmap = require('enmap');
client.config = config;

client.on('ready', () => {
  setInterval(function(){ 
      console.log("ping");
   }, 9000);
});

client.on("ready", () => {
  console.log(`${client.user.tag} ready`);
  client.user.setActivity(`${config.prefix}help | Render Code`)
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Comando ${ commandName } carregado`);
    client.commands.set(commandName, props);
  });
});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
  
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    const cmd = client.commands.get(command);
  
    if (!cmd) return;
  
    cmd.run(client, message, args);
});

client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("792364532353335296");
  let channel = await client.channels.cache.get("795281274720878613");
  if (guild != member.guild) {
    return console.log("Um usuário está a entar num servidor que não é meu por isso sem boas vindas pra ele!");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor(config.verde)
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`<:render:795296632673009665> Boas-vindas <:render:795296632673009665>`)
      .setImage("https://cdn.discordapp.com/attachments/793859455200002058/795296907379081236/Render.png")
      .setDescription(`<:render:795296632673009665> Bem vindo, ${member.user} acabou de entar no servidor,
      Leia o canal <#792364532986413096> para evitares ser ponido
      
      Seu nome: ${member.user.tag}
      
      Seu id: ${member.user.id}
      
      Sua tag: ${member.user.discriminator}
      
      Total de membros agor: **${member.guild.memberCount}** membros`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Todos os direitos reservados")
      .setTimestamp();

    channel.send(embed);
  }
});

client.on("guildMemberRemove", async (member) => { 

  let guild = await client.guilds.cache.get("792364532353335296");
  let channel = await client.channels.cache.get("795281274720878613");
  if (guild != member.guild) {
    return console.log("Um usuário saio do servidor como não é do meu está tudo bem :)");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor(config.vermelho)
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`<:render:795296632673009665> Adeus! <:render:795296632673009665>`)
      .setImage("https://cdn.discordapp.com/attachments/793859455200002058/795296907379081236/Render.png")
      .setDescription(`Adues o ${member.user} acabou de sair do servidor, partio-me o coração 💔
      
      Seu nome: ${member.user.tag}
      
    