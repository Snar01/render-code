module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('Ping???');

  m.edit(`Pong🏓! Latência do Server: **${m.createdTimestamp-message.createdTimestamp}**ms.\nLatência da API: **${Math.round(client.ws.ping)}**ms`)
}