const config = {
  prefix: "$",
  token: process.env.BOT_TOKEN,
  channel_role: "jjr",


  role: {
          channel: "attribution-des-rôle",
          role: "718970160647635056"
      }


/*
  reactionRole : {
      "721812281347932311": {
          emojis: [{
              id: "719563468008718348",
              roles: "722404495371534358"
          }]
      },
      "721812680763244596": {
          removable: true,
          emojis: [{
              name: "💻",
              roles: ["722088168458813584", "722088234963828747"]
          }, {
              name: "🎮",
              roles: "722088255402672139"
          }]
      }
    }*/
};

module.exports = config;
