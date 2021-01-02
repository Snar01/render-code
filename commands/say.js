const Discord = require("discord.js");
const config = require("../config.json");

exports.run = async(client, message, args) => {
 const msg = args.join(' ')
  message.delete();
  message.channel.send(msg)
}