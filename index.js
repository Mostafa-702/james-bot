const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
client.user.setActivity("Made in Github");
consile.log("Ready");
})

client.on('message', async message => {
if(message.author.bot) return;
if(!message.guild) return;
if(message.content.startsWith('ping')) {
message.channel.send(Date.now() - message.createdTimestamp)
}
});

client.login("ODY2MzY5NDI1Mjc5NDE4Mzg5.YPRjZw.n1yYJ5_dIW2IB0Tih07-zOivj8s");
