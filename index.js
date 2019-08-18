const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity(`Na là bot`, {
    type: "STREAMING",
    url: "https://www.twitch.tv/namanhishere"})
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
  
    if (message.content.startsWith('pi.kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        if (!channel) return;
          channel.send(`Bạn Đã bị Kick Khỏi Gáy Zone, ${member}`);
        }).catch(err => {
          message.reply('I was unable to kick the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
  if (message.content === 'Nhỉ ?') {
    message.reply('Đúng Rồi');
  }
  if (message.content === 'pi.ping') {
    message.reply('Pong');
  }
    if (message.content === 'pi.help') {
    message.reply('Méo có lệnh j để mà help đâu');
  }
      if (message.content === 'pi.hi') {
    message.reply('hi');
  }
      if (message.content === 'pi.bye') {
    message.reply('bye');
  }
      if (message.content === 'pi.goodmorning') {
    message.reply('Chúc 1 ngày tốt lành');
  }
      if (message.content === 'pi.goodnight') {
    message.reply('Chúc Ngu Ngon');
  }
      if (message.content === 'pi.luck') {
    message.reply('Chúc May Mắn');
  }
      if (message.content === 'pi.test') {
    message.reply('Bot Hoạt Động');
  }
        if (message.content === 'pi.tag') {
    message.reply(`${client.user.tag}`);
  }
          if (message.content === 'pi.test1') {
    message.reply(`Test`);
  }



  if (message.content.startsWith('pi.ban')) {
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



client.login('');

