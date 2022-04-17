const { SlashCommandBuilder } = require('@discordjs/builders');
const description = require('../descriptions/start-introduction');
const sharedDescription = require('../descriptions/shared');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('start-introduction')
        .setDescription( description.introduction )
        .addBooleanOption( option => option
            .setName('ready')
            .setDescription(`Everybody ready? Let's go!`)),
    async execute(interaction) {
        const value = interaction.options.getBoolean('ready');

        if ( value === true ) return interaction
            .reply( description.questionOne );
        else if ( value === false ) return interaction
            .reply(`Call me again when you're ready, I'll wait!`);

        return interaction.reply( sharedDescription.invalidCommand )
    },
};
