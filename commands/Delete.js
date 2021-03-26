module.exports.run = async (bot, msg, args) => {

     if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("Il me faut la permision pour supprimer les messages")
     if (!args[0]) return msg.channel.send("Il faut spécifier le nombre de message a supprimer")

     if (args[0] > 99) return msg.channel.send("Il y a trop de messages a supprimer")

     msg.channel.bulkDelete(args[0]).then(() => {
          msg.channel
               .send("**" + args[0] + "** messages supprimer")
               .then(msg => msg.delete(6000))
     })

}

module.exports.help = {
  name: 'clean'
}
