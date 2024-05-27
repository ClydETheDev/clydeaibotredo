const {
    ApplicationCommandType,
    PermissionFlagsBits
} = require("discord.js");
module.exports = {
    name: "invite",
    description: `Cyde's support server invite`,
    type: ApplicationCommandType.ChatInput,
    options: [],
    userPermissions: [PermissionFlagsBits.SendMessages],
    botPermissions: [PermissionFlagsBits.SendMessages],
    run: async (client, interaction) => {
        return interaction.reply({
            content: `https://discord.gg/Ava4WGeRPP`
        })
    }
}