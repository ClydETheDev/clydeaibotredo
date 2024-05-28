const {
    ApplicationCommandType,
    PermissionFlagsBits
} = require("discord.js");
module.exports = {
    name: "ping",
    description: `Check API latency`,
    type: ApplicationCommandType.ChatInput,
    options: [],
    userPermissions: [PermissionFlagsBits.SendMessages],
    botPermissions: [PermissionFlagsBits.SendMessages],
    run: async (client, interaction) => {
        return interaction.reply({
            content: `API latency: \`${client.ws.ping}ms\``
        })
    }
}