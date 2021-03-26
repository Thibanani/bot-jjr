module.exports.run = async (bot,msg,args) => {
  const Discord = require('discord.js');
  const exampleEmbed = new Discord.MessageEmbed()
  	.setColor('#0099ff')
  	.setTitle('Pour toi le boulet 🖕')
  	//.setURL('https://discord.js.org/')
  	//.setAuthor('Par moi')
  	.setDescription('Tu trouveras toutes mes fonctions ici et tâche de ne plus de déranger')
  	//.setThumbnail('🖕') //Image en haut a droite
  	.addFields( /*------------------- Pour Les commande vocale -------------*/
      { name: '\u200B', value: '\u200B' },
  		{ name: 'Mes meilleurs réactions vocale',
      value: " commande", inline: true },
  	)
    .addFields(/*------------------- Pour Les commande texte -------------*/
  		{ name: '\u200B', value: '\u200B' },
  		{ name: 'Mes meilleurs commandes texte',
      value: "$Leboss : C'est toi le Boss ? \n $Charlou : :sheep: \n $PDF : Pour un max de rigolade \n $PFC : Teste moi dans un duel a mort \n $clean [N] Pour suprimer N message \n $tinder : Si tu habite dans la Moselle, et que tu cherche des milfs \n $mp @somebody : JE SUIS PAS UN PUTAIN PIGEON VOYAGEUR \n $motiv : A utiliser sans modération :Motiv:", inline: true },
      { name: '\u200B', value: '\u200B' },
  	)
  	.setTimestamp()
  	.setFooter("L'auteur c'est moi");


  msg.channel.send(exampleEmbed);

}

module.exports.help = {
  name: 'help'
}
