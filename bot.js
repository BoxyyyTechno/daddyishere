const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js');

var prefix = "!"

bot.on('ready', () => {
  console.log('Bot Ready!');

bot.user.setGame('daddyisherebot.weebly.com')

});

bot.on('message', message => {
  

let msg = message.content.toUpperCase();
let sender = message.author;
let cont = message.content.slice(prefix.length).split(' ')
let args = cont.slice(1);




  if (message.content.startsWith (prefix + 'yardım')) {
    message.channel.send('Komutlar: HAVADURUMU Şehirinizi yazarak hava durumunu öğrenebilirsiniz.');

  }

  if(msg.startsWith (prefix + 'HAVADURUMU')) {

    weather.find({search: args.join(" "), degreeType: "F"}, function(err, result) {
if(err) message.channel.send(er);

var current = result[0].current;
var location = result[0].location;

const embed = new Discord.RichEmbed()
     .setDescription(`**HAVA DURUMU**`)
    .setAuthor(`Weather for ${current.observationpoint}`)
     .setThumbnail(current.imageUrl)
     .setColor(0x009fff)
     .addField('Zaman', `UTC${location.timezone}`, true)
     .addField('Derece', location.degreeType, true)
     .addField('Sıcaklık', `${current.temperature} Degrees`, true)
     .addField('Rüzgar', current.winddisplay, true)
     .addField('Nem',  `${current.humidity}%`,true)



     message.channel.send({embed})

    })
  }


});


bot.login(process.env.TOKEN);
