const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on('message', message => { 
    var p = "."
        if (message.content.startsWith(p + `ZERO`)) {
message.guild.setName(`Z`)
.then(msg => {
 setInterval(() => {
message.guild.setName(`ZE`)
.then(msg => {
 setInterval(() => {
message.guild.setName(`ZER`) 
.then(msg => {
 setInterval(() => {
message.guild.setName(`ZERO`)
.then(msg => {
 setInterval(() => {
message.guild.setName(`ZERO`)
.then(msg => {
 setInterval(() => {
message.guild.setName(`MCAR`)
.then(msg => {
 setInterval(() => {
}, 11000);
});
},  10000);
});
},  8000);
});
},  6000);
});
},  4000);
});
},  1000);
})
        .catch(console.error);
  //message.delete().catch(O_o=>{}); 
 
}

});












client.login(process.env.BOT_TOKEN);
