const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');
const commands = require('./commands.js');


bot.on('ready', async() =>{
  console.log('Le bot est lancé.');
  bot.user.setActivity('Québecqwé');
});


/*------------------------------ Réaction émote au channel rôle ------------------------------*/
bot.on('messageReactionAdd', (reaction, user) => {
  if (reaction){
    reaction.message.channel.send(`Yep`)
  }
  /*if (!reaction.message.guild || user.bot) return
  const reactionRoleElem = config.reactionRole[reaction.message.id]
  if (!reactionRoleElem) return
  const prop = reaction.emoji.id ? 'id' : 'name'
  const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
  if (emoji) reaction.message.guild.member(user).roles.add(emoji.roles)
  else reaction.users.remove(user)*/
})





/*------------------------------ Réaction message ------------------------------*/
bot.on('message', async (msg) =>{
  if(msg.content.startsWith(config.prefix)){/*------- Command -------*/

    cmdArray = msg.content.substring(config.prefix.length).split(" ")
    cmd = cmdArray[0]
    args = cmdArray.slice(1)

    let command = commands.getCommand(cmd);
    if(command) command.run(bot, msg, args);
  }
});



bot.login(config.token);
