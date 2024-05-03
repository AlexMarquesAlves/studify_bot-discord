const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('playlist')
    .setDescription('Ouça a melhor playlist de estudos'),

  async execute(interaction) {
    await interaction.reply(
<<<<<<< HEAD
      'https://open.spotify.com/playlist/1YbHmfZCO8V91Nd0LGoXY2?si=4f850eff20ba4991'
=======
      'https://open.spotify.com/playlist/5TUxgTIxzLbLVh7RUf9V8i?si=d79ad3b1a72840b6'
>>>>>>> b2d4dd98c86db4014f61c47875589daae1a170d9
    )
  },
}
