const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('start-introduction')
        .setDescription('Start the introduction talk helper')
        .addStringOption(option => option
            .setName('ready')
            .setDescription('Everybody ready? Y/N')),
    async execute(interaction) {
        const value = interaction.options.getString('ready');

        if (value === 'Y' || value === 'y') return interaction
            .reply(`Let's have a conversation about our topic of the month. To start off, what do you already know about it?`);
        if (value === 'N' || value === 'n') return interaction
            .reply(`Call me again when you're ready, I'll wait!`);

        return interaction.reply(`Sorry, that's not a valid option`);
    },
};
