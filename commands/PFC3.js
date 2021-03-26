module.exports.run = async (bot,msg,args) => {
  var temps = 30000;

  const pfc1 = [`Ha ouai, tu veux qu'on se règle`,`Viens chte bz`];
  const pfc = ['✊','✋','✌️'];

  const pfc2 =["C'est entre vous","Quelqu'un ose te défier"]

  if(args == ''){

    msg.channel.send(`${pfc1[Math.floor(Math.random() * pfc1.length)]}`)
    const filter_1_1 = m => m.author.id === bot.user.id && m.content === `On rappelle pour les débiles :  pierre :fist:    feuille :raised_hand:    ciseaux :v:`;
    const collector_1_1 = msg.channel.createMessageCollector(filter_1_1, { max: 1,time: temps });
    symb = pfc[Math.floor(Math.random() * pfc.length)]

    msg.channel.send(`On rappelle pour les débiles :  pierre :fist:    feuille :raised_hand:    ciseaux :v:`)

    collector_1_1.on('collect', m => {
    	console.log(`Collected :${m.content}`);

      const filter_1_2 = (reaction, user) => user.id === msg.author.id;
      const collector_1_2 = m.createReactionCollector(filter_1_2, { max: 1,time: temps });

      collector_1_2.on('collect', (reaction, user) => {
  	     console.log(`Collected ${reaction.emoji.name}`);

         if (symb ==  '✊'){
           m.react(`✊`)
           if (reaction.emoji.name == '✊'){
             msg.channel.send(`Tu copies`)

           }else if (reaction.emoji.name == '✋') {
             msg.channel.send(`Vous êtes mon maitre`)

           }else if (reaction.emoji.name == '✌️') {
             msg.channel.send(`Bas alors on est nul!`)

           }else{msg.channel.send(`Apprend à jouer avec $help`)}
         }

         else if (symb ==  '✋'){
           m.react(`✋`)
           if (reaction.emoji.name == '✊'){
             msg.channel.send(`Bas alors on est nul!`)

           }else if (reaction.emoji.name == '✋') {
             msg.channel.send(`Tu copies`)

           }else if (reaction.emoji.name == '✌️') {
             msg.channel.send(`Vous êtes mon maitre`)

           }else{msg.channel.send(`Apprend à jouer avec $help`)}
         }

         else if (symb ==  '✌️'){
           m.react(`✌️`)
           if (reaction.emoji.name == '✊'){
             msg.channel.send(`Vous êtes mon maitre`)

           }else if (reaction.emoji.name == '✋') {
             msg.channel.send(`Bas alors on est nul!`)

           }else if (reaction.emoji.name == '✌️') {
             msg.channel.send(`Tu copies`)

           }else{msg.channel.send(`Apprend à jouer avec $help`)}
         }
      });


      collector_1_2.on('end', collected => {
        if (collected.size == 0) {
          msg.channel.send('Sale couard !')
        }
      });
    });

    collector_1_1.on('end', collected => {
      if (collected.size == 0) {
        msg.channel.send("Et la c'est le bug, appeller le 36-30")
      }
    });
  }
  else {
    let joueur_2 = msg.mentions.members.first();
    let joueur_1 = msg.author;

    if(!joueur_2) {//Si l'id est correct
      msg.channel.send(`**${msg.author.username}**, Putain mais gros mentionne quelqu'un`)
      return msg.channel.send(`**${args[i]}**, Putain mais c'est personne`)
    }

    joueur_1.createDM().then(channel_1 => {
      channel_1.send(`${pfc2[Math.floor(Math.random() * pfc2.length)]}`)

      //---------------------------Message au joueur 1
      const filter_2_0 = m => m.author.id === bot.user.id && m.content === `On rappelle pour les débiles :  pierre :fist:    feuille :raised_hand:    ciseaux :v:`;
      const collector_2_0 = channel_1.createMessageCollector(filter_2_0, { max: 1,time: 15000 });
      channel_1.send(`On rappelle pour les débiles :  pierre :fist:    feuille :raised_hand:    ciseaux :v:`)
      //collecteur du message envoyée
      collector_2_0.on('collect', m => {
      	console.log(`Collected :${m.content}`);

    //---------------------------collecteur de l'émoji du joueur 1
        const filter_2_1 = (reaction, user) => user.id === msg.author.id;
        const collector_2_1 = m.createReactionCollector(filter_2_1, { max: 1,time: temps });

        collector_2_1.on('collect', (reaction_1, user) => {
           console.log(`Collected ${reaction_1.emoji.name}`);

    //---------------------------Message au joueur 2
          joueur_2.createDM().then(channel_2 => {
            channel_2.send(`${pfc2[Math.floor(Math.random() * pfc2.length)]}`)
            const filter_2_01 = m => m.author.id === bot.user.id && m.content === `On rappelle pour les débiles :  pierre :fist:    feuille :raised_hand:    ciseaux :v:`;
            const collector_2_01 = channel_2.createMessageCollector(filter_2_0, { max: 1,time: 15000 });
            channel_2.send(`On rappelle pour les débiles :  pierre :fist:    feuille :raised_hand:    ciseaux :v:`)
            //collecteur du message envoyée
            collector_2_01.on('collect', m => {
            console.log(`Collected :${m.content}`);

      //---------------------------collecteur de l'émoji du joueur 2
              const filter_2_2 = (reaction, user) => user.id === joueur_2.id;
              const collector_2_2 = m.createReactionCollector(filter_2_2, { max: 1,time: temps });
              collector_2_2.on('collect', (reaction_2, user) => {
                 console.log(`Collected ${reaction_2.emoji.name}`);

                 if (reaction_1.emoji.name ==  '✊'){
                   if (reaction_2.emoji.name == '✊'){
                     joueur_1.send(`Egalité, QUI COPIE`)
                     joueur_2.send(`Egalité, QUI COPIE`)

                   }else if (reaction_2.emoji.name == '✋') {
                     joueur_1.send(`T'a perdue gros naze`)
                     joueur_2.send(`T'a gagné ptite salope`)

                   }else if (reaction_2.emoji.name == '✌️') {
                     joueur_2.send(`T'a perdue gros naze`)
                     joueur_1.send(`T'a gagné ptite salope`)

                   }else{joueur_2.send(`Apprend à jouer avec $help`)}
                 }

                 else if (reaction_1.emoji.name ==  '✋'){
                   if (reaction_2.emoji.name == '✊'){
                     joueur_2.send(`T'a perdue gros naze`)
                     joueur_1.send(`T'a gagné ptite salope`)

                   }else if (reaction_2.emoji.name == '✋') {
                     joueur_2.send(`Egalité, QUI COPIE`)
                     joueur_1.send(`Egalité, QUI COPIE`)

                   }else if (reaction_2.emoji.name == '✌️') {
                     joueur_1.send(`T'a perdue gros naze`)
                     joueur_2.send(`T'a gagné ptite salope`)

                   }else{joueur_2.send(`Apprend à jouer avec $help`)}
                 }

                 else if (reaction_1.emoji.name ==  '✌️'){
                   if (reaction_2.emoji.name == '✊'){
                     joueur_1.send(`T'a perdue gros naze`)
                     joueur_2.send(`T'a gagné ptite salope`)

                   }else if (reaction_2.emoji.name == '✋') {
                     joueur_2.send(`T'a perdue gros naze`)
                     joueur_1.send(`T'a gagné ptite salope`)

                   }else if (reaction_2.emoji.name == '✌️') {
                     joueur_2.send(`Egalité, QUI COPIE`)
                     joueur_1.send(`Egalité, QUI COPIE`)

                   }else{joueur_2.send(`Apprend à jouer avec $help`)}
                 }else{joueur_1.send(`Apprend à jouer avec $help`)}
              });

              collector_2_2.on('end', collected => {
                if (collected.size == 0) {
                  joueur_2.send('Sale couard !')
                  joueur_1.send('Ton adversaire a fui !')
                }
              });
            });
          })
        });


        collector_2_1.on('end', collected => {
          if (collected.size == 0) {
            joueur_1.send('Sale couard !')
            joueur_2.send('Ton adversaire a fui !')
          }
        });
      });

      collector_2_0.on('end', collected => {
        if (collected.size == 0) {
          msg.channel.send("Et la c'est le bug, appeller le 36-30")
        }
      });
    })

  }

}

module.exports.help = {
  name: 'PFC'
}
