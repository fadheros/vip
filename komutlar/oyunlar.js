const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {

  const embedgenel = new Discord.MessageEmbed()
    .setAuthor(`Berlin Bot | Oyunlar`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/823592301796392960/826048182990667806/standard_2.gif"
    )
    .setDescription(
      `🌀 Berlin Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__1v1__`,
      ` 🚩  \`${prefix}1v1\` Duello Komutudur`,
      true
    )
   .addField(
      `__Yazan Kazanır__`,
      ` 🚩  \`${prefix}yazan-kazanır\` İlk Yazan Kazanır`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      ` 🚩  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n ⚠️ \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n ⚠️ \`${prefix}iletişim\` | Berlin Bot  İletişim Bilgileri.`
    );
  return message.channel.send(embedgenel);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "oyunlar",
  description: "Genel Menüsü",
  usage: "genel"
};
