validArgs = ["aliascommand", "channel", "prefix", "bot"];

exports.run = async (client, message, args) => {
  if (message.webhookID) {
    return client.lib.message.send(client, message.channel, "CANNOT_WEBHOOK");
  }

  if (args.length === 0) {
    //Display current settings:
    mes = "";
    noDisplay = [
      "alias",
      "gamemove",
      "last_updated",
      "language",
      "hidden",
      "guild",
    ];

    for (key in client.guild.config) {
      if (noDisplay.includes(key)) continue;
      if (key === "channel") {
        mes +=
          "**" +
          key +
          "**: " +
          message.guild.channels.cache.find(
            (val) =>
              val.id === client.guild.config[key] ||
              val.name === client.guild.config[key]
          ).name +
          "\n";
        continue;
      }
      mes += "**" + key + "**: " + client.guild.config[key] + "\n";
    }

    message.channel.send({
      embed: {
        title: "Current config",
        color: 0x43b581,
        description: mes,
      },
    });
    return {
      success: true,
      message: "Displayed current config",
    };
  }

  //No valid args are given
  if (!validArgs.includes(args[0])) {
    mes = "Please give a valid argument, valid arguments are: ";
    validArgs.forEach((element) => {
      if (validArgs[validArgs.length - 1] === element) {
        //Last element
        mes = mes + element + ".";
      } else {
        //All other elements
        mes = mes + element + ", ";
      }
    });
    message.channel.send(mes);
    return {
      success: false,
      message: mes,
    };
  }

  //Arguments are given

  //Check if administrator
  if (!client.lib.permissions.isAdmin(message.member)) {
    message.channel.send("You need to be an administrator to change config.");
    return {
      success: false,
      message: "You need to be an administrator to change config.",
    };
  }

  //Check the second argument
  if (args[0] == "aliascommand") {
    response = client.lib.config.changeAliasCommand(client, message, args);
  } else if (args[0] == "channel") {
    response = client.lib.config.changeChannel(client, message, args);
  } else if (args[0] == "prefix") {
    response = client.lib.config.changePrefix(client, message, args);
  } else if (args[0] == "bot") {
    response = client.lib.config.changeBotEnabled(client, message, args);
  }
  return response;
};

module.exports.help = {
  name: "config",
  detail: "Change config for your server.",
  enabled: true,
  aliases: ["con"],
};
