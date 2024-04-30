/* eslint-disable @typescript-eslint/no-var-requires */
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bru')
    .setDescription('Ofende a Bruna'),

  async execute(interaction) {
    await interaction.reply({ content: `@brubiixxxz Otária`, ephemeral: false })
    await interaction.deleteReply()
  },
}
