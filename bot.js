const Discord = require("discord.js");
const client = new Discord.Client();
client.on('guildMemberAdd', member => {
     var guild;
    while (!guild)
        guild = client.guilds.get("487670104646090754") 
let channel = member.guild.channels.find('name', 'moments');
  if (!channel) return; 
client.channels.get("525749764474798087").send(`**. # Welcome To Moments Server:heart: :notes:** `) 
});

client.login(process.env.BOT_TOKEN);
