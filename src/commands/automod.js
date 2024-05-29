const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('automod')
        .setDescription('Manage auto-moderation settings.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('enable')
                .setDescription('Enable auto-moderation.'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('disable')
                .setDescription('Disable auto-moderation.'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('blacklist-add')
                .setDescription('Add a word to the blacklist.')
                .addStringOption(option =>
                    option.setName('word')
                        .setDescription('The word to blacklist')
                        .setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('blacklist-remove')
                .setDescription('Remove a word from the blacklist.')
                .addStringOption(option =>
                    option.setName('word')
                        .setDescription('The word to remove from the blacklist')
                        .setRequired(true))),
    async execute(interaction) {
        if (!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
            return interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
        }

        const subcommand = interaction.options.getSubcommand();
        const word = interaction.options.getString('word');

        if (subcommand === 'enable') {
            // Logic to enable auto-moderation
            await interaction.reply('Auto-moderation has been enabled.');
        } else if (subcommand === 'disable') {
            // Logic to disable auto-moderation
            await interaction.reply('Auto-moderation has been disabled.');
        } else if (subcommand === 'blacklist-add') {
            // Logic to add the word to the blacklist
            await interaction.reply(`The word "${word}" has been added to the blacklist.`);
        } else if (subcommand === 'blacklist-remove') {
            // Logic to remove the word from the blacklist
            await interaction.reply(`The word "${word}" has been removed from the blacklist.`);
        }
    },
};
