module.exports.run = async (bot, msg, args)=> {
  const audio = './src/Audio/taggl.mp3'
  const volume = 0.5

  msg.channel.bulkDelete(1);


  /*---------- Vérification de la permission ----------*/
  if(!msg.member.hasPermission("MUTE_MEMBERS")) {
    return msg.channel.send(`**${msg.author.username}**, Ta crus t'étais dieux ?`)
  }
  if(!msg.guild.me.hasPermission("MUTE_MEMBERS")) {
    return msg.channel.send(`**${msg.author.username}**, ... j'aimerai bien`)
  }

  if (args != ''){
    /*---------- Vérification de l'id a kick ----------*/
    let target = msg.mentions.members.first();

     if(!target) {//Si l'id est correct
       return msg.channel.send(`**${msg.author.username}**, Putain mais gros mentionne quelqu'un`)
     }
     if(target.id === msg.author.id) {//Si l'id est pas celui de l'auteur
       return msg.channel.send(`**${msg.author.username}**, T'es maso ou quoi`)
      }

      target.voice.setMute(true,"Oui")
    }
    else {
      let channel = msg.member.voice.channel;

      for (let member of channel.members) {
        do {
            member[1].voice.setMute(true)
        } while (member[1].voice.mute);
      }

      const connection = await msg.member.voice.channel.join();
      const dispatcher = connection.play(audio);//, {volume: 2});

      dispatcher.setVolume(volume);

      dispatcher.on('finish', () => {
         connection.disconnect();
      });
    }
}


module.exports.help = {
  name: 'm'
}
