const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity(`Quản lí GáyZone` ,{
    type: "STREAMING",
    url: "https://www.twitch.tv/taiphung"})
        .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'nome'}`))
        .catch(console.error);
});


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  if (!channel) return;
  channel.send(`Chào mừng bạn đã vào server Gáy Zone, ${member}`);
});


client.on('message', message => {
  if (message.content === 'what is my avatar') {
    message.reply(message.author.avatarURL);
  }
  
    if (message.content.startsWith('!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        if (!channel) return;
          channel.send(`Bạn Đã bị Kick Khỏi Gáy Zone, ${member}`);
        }).catch(err => {
          message.reply('Tôi không có quyền để kick ${member}');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('Bạn chưa ghi tên người bị kick');
    }
  if (message.content === '!ping') {
    message.reply('Pong');
  }
     if (message.content === '!hello') {
    message.reply('hi');
  }
      if (message.content === '!bye') {
    message.reply('bye');
  }
      if (message.content === 'pi.goodnight') {
    message.reply('Chúc Ngu Ngon');
  }


  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          message.console.log(random(55, 956));('I was unable to ban the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
      message.reply('You didn\'t mention the user to ban!');
    }
  }
});



client.login(process.env.token);

