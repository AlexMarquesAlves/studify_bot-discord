/* eslint-disable @typescript-eslint/no-var-requires */
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kale')
    .setDescription('Ofende o KaleSins'),

  async execute(interaction) {
    await interaction.reply({ content: `KaleSin é safado`, ephemeral: false })
  },
}
