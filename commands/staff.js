
const Discord = require(`discord.js`);
const prefix = ("!")


exports.run = async (client, message, args) => {

    await message.author.createDM()
    message.delete()
    message.channel.send(`${message.author}, Olhe privado o processo ira ser por la`)
    const embed = new Discord.MessageEmbed()
        .setAuthor('Formulário staff de Render Code', client.user.avatarURL())
        .setDescription('💯 Olá, fazer sua Formulário, explique ela de forma clara e obvia. \n \n  📌 Para começar Fazer sua Formulário digite \`continuar`\, não será tolerado brincadeiras com este comando, caso acontecer será punido sem aviso prévio.')
        .setColor('#0000CD')
        .setTimestamp()
        .setFooter('<:ArvoresCoqueiro7PNG:793706820111564831> Render Code | Oficial • ©️ Todos os direitos reservados.')
    message.author.send(embed)

    var main = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, {
        time: 100000 * 50,
        max: 1
    })

    main.on('collect', a => {

        const pergun1 = new Discord.MessageEmbed()
            .setColor("#0000CD")
            .setDescription(`\`\`\`📍 - Qual seu nome?\`\`\` `) /*Pergunta 1*/

        if (a.content.toLowerCase() === "cancelar") return message.author.send('Formulário cancelada.');
        if (a.content.toLowerCase() === "continuar") message.author.send(pergun1)

        var prg2 = message.author.dmChannel.createMessageCollector(b => b.author.id == message.author.id, {
            time: 100000 * 50,
            max: 1
        })

        prg2.on('collect', b => {
            if (b.content.toLowerCase() === "cancelar") return message.author.send('Formulário cancelada');
            let n1 = b.content
            const pergun2 = new Discord.MessageEmbed()
                .setColor("#0000CD")
                .setDescription(`\`\`\`💡 - Qual sua idade?\`\`\``) /*Pergunta 2*/
            message.author.send(pergun2)

            var prg28 = message.author.dmChannel.createMessageCollector(f => f.author.id == message.author.id, {
                time: 100000 * 50,
                max: 1
            })

            prg28.on('collect', f => {
                if (b.content.toLowerCase() === "cancelar") return message.author.send('Formulário cancelada');
                let n3 = f.content
                const pergun3 = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`\`\`\`💡 - Qual seu email (caso aconteça algo poderemos-o contactar)\`\`\``) /*Pergunta 3*/
                message.author.send(pergun3)

                var prg27 = message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id, {
                    time: 100000 * 50,
                    max: 1
                })

                prg27.on('collect', b => {
                    if (b.content.toLowerCase() === "cancelar") return message.author.send('Formulário cancelada');
                    let n4 = b.content
                    const pergun2 = new Discord.MessageEmbed()
                        .setColor("#0000CD")
                        .setDescription(`\`\`\`💡 - Porque quer entar na staff?\`\`\``) /*Pergunta 4*/
                    message.author.send(pergun2)
        
                    var prg28 = message.author.dmChannel.createMessageCollector(f => f.author.id == message.author.id, {
                        time: 100000 * 50,
                        max: 1
                    })
        
                    prg28.on('collect', f => {
                        if (b.content.toLowerCase() === "cancelar") return message.author.send('Formulário cancelada');
                        let n5 = f.content
                        const pergun3 = new Discord.MessageEmbed()
                            .setColor("RANDOM")
                            .setDescription(`\`\`\`💡 - Como pode ajudar?\`\`\``) /*Pergunta 5*/
                        message.author.send(pergun3)
        
                        var fim = message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id, {
                            time: 100000 * 50,
                            max: 1
                        })                    

                fim.on('collect', c => {
                    let n2 = c.content
                    const pergun3 = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription(`**Seu Formulário foi enviado com sucesso aguarde algum staff analisar!**`)
                    message.author.send(pergun3)

                    const avaliacao = new Discord.MessageEmbed()
                        .setTitle("**<a:Boost2:757983630176813136> Novo formulário! <a:Boost2:757983630176813136>**")
                        .setColor("#0000CD")
                        .setDescription(`**<a:kk:757983899384283288> Nome:**\`\`\`${n1}\`\`\` \n<a:rjp_estrela:757984029109911675> **RDM:** \`\`\`${n3}\`\`\`\n<a:rjp_estrela:757984029109911675> **VDM:** \`\`\`${n4}\`\`\`\n<a:rjp_estrela:757984029109911675> **PowerGaming:** \`\`\`${n2}\`\`\`\n<a:rjp_estrela:757984029109911675> **MetaGaming:**\`\`\`${n5}\`\`\``)
                        .setThumbnail("https://cdn.discordapp.com/attachments/793859455200002058/795296907379081236/Render.png")
                        .setFooter('<:ArvoresCoqueiro7PNG:793706820111564831> Render Code | Oficial • ©️ Todos os direitos reservados.')
                        client.channels.cache.get('795443553517830164').send(`Novo formuçário recebido de ${message.author} @everyone`)
                    client.channels.cache.get('795443553517830164').send(avaliacao).then(async msg => {
                    });
                });
            });
        });
    });
});
});
};
exports.help = {
    name: "staff"
}