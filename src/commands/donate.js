const { ApplicationCommandType, PermissionFlagsBits } = require("discord.js");
module.exports = {
  name: "donate",
  description: `consider helping out ;>`,
  type: ApplicationCommandType.ChatInput,
  options: [],
  userPermissions: [PermissionFlagsBits.SendMessages],
  botPermissions: [PermissionFlagsBits.SendMessages],
  run: async (client, interaction) => {
    return interaction.reply({
      content: `https://ko-fi.com/clydey`,
    });
  },
};
