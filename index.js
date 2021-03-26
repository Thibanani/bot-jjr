const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');
const commands = require('./commands.js');


const bonjour = ["Salut beau gosse","Ouai, salut ouai","Yo","Bonjour à toi","HOOOO, sa gambit ou quoi ?","jtm bb","https://tenor.com/view/penguin-hello-hi-heythere-cutie-gif-3950966"];
const bonsoir = ["Bonsoir","Bonsoir, jeune gueux","Comment von-je ?","https://tenor.com/view/mcfly-carlito-bonsoir-gif-10468909"];

bot.on('ready', async() =>{
  console.log('Le bot est lancé.');
  bot.user.setActivity('Québecqwé');
});


/*------------------------------ Réaction message ------------------------------*/
bot.on('message', async (msg) =>{
  if((msg.content == 'Bonjour')||(msg.content == 'Salut')||(msg.content == 'Coucou')){/*------- Bonjour -------*/
    msg.channel.send(bonjour[Math.floor(Math.random() * bonjour.length)])

  }else if(msg.content == 'Bonsoir'){/*------- Bonsoir -------*/
    msg.channel.send(bonsoir[Math.floor(Math.random() * bonsoir.length)])

  }else if((msg.content == 'Wow')){/*------- Chamy wow -------*/

    msg.channel.send("Juste")
    msg.channel.send("WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOW")

  }else if((msg.content == "'^'")){/*------- Charmy emote -------*/

    msg.channel.send(":smiling_imp:")

  }else if((msg.content == "oui")||(msg.content == "Oui")||(msg.content == "OUI")){/*------- Oui -------*/
    val_temp = Math.floor(Math.random() * 2)
    if (val_temp == 0){
      msg.channel.send("O")
      msg.channel.send("U")
      msg.channel.send("I")
    }
    else {
      msg.react(`🇴`);
      msg.react(`🇺`);
      msg.react(`🇮`);
    }


  }else if(msg.content.startsWith(config.prefix)){/*------- Command -------*/

    cmdArray = msg.content.substring(config.prefix.length).split(" ")
    cmd = cmdArray[0]
    args = cmdArray.slice(1)

    let command = commands.getCommand(cmd);
    if(command) command.run(bot, msg, args);
  }
});



bot.login(config.token);
