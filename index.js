const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');
const commands = require('./commands.js');


bot.on('ready', async() =>{
  console.log('Le bot est lancé.');
  bot.user.setActivity('Québecqwé');
});


/*------------------------------ Réaction émote au channel rôle ------------------------------*/
bot.on('messageReactionAdd', async (reaction, user) => {
	// When we receive a reaction we check if the reaction is partial or not
	if (reaction.partial) {// If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);// Return as `reaction.message.author` may be undefined/null
			return;
		}
	}

  console.log(`${config.role.channel} config.role.channel`);
  console.log(`${reaction.message.channel.name} reaction.message.channel.toString()`);
  //if(reaction.message.channel.toString() != config.role.channel) return;

	// Now the message has been cached and is fully available
	console.log(`${reaction.message.author.name}'s message "${reaction.message.content}" gained a reaction!`);
	// The reaction is now also fully available and the properties will be reflected accurately:
	console.log(`${reaction.count} user(s) have given the same reaction to this message!`);

/*
  if(reaction == config.role){

  }
  reaction.message.guild.member(user).roles.add(emoji.roles)*/



});
/*
bot.on('messageReactionAdd', (reaction, user) => {

  reaction.MessageReaction(bot,data,msg);
  msg.channel.send(`Yep`)
  /*if (reaction.message.channel.name != config.channel_role) return
  else {
    reaction.message.channel.send(`Yep`)
  }*/
  /*if (!reaction.message.guild || user.bot) return

  const reactionRoleElem = config.reactionRole[reaction.message.id]
  if (!reactionRoleElem) return

  const prop = reaction.emoji.id ? 'id' : 'name'
  const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
  if (emoji) reaction.message.guild.member(user).roles.add(emoji.roles)
  else reaction.users.remove(user)*/
//})*/





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
