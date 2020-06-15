const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions | يرويك كل الاوامر  الموجودة ",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("خدمات ابو البراء")
      .setURL('https://www.instagram.com/boessa666/')
      .setDescription("List of all commands")
      .setColor("#0099ff")

    

      
    
    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });
    

    helpEmbed.setTimestamp();



    return message.channel.send(helpEmbed);


  }
  
};


