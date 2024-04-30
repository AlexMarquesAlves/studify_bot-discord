const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('playlist')
    .setDescription('Ouça a melhor playlist de estudos'),

  async execute(interaction) {
    await interaction.reply(
      'https://open.spotify.com/playlist/1YbHmfZCO8V91Nd0LGoXY2?si=4f850eff20ba4991'
    )
  },
}
