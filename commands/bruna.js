/* eslint-disable @typescript-eslint/no-var-requires */
const { SlashCommandBuilder } = require('discord.js')

const wait = require('node:timers/promises').setTimeout

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bru')
    .setDescription('Ofende a Bruna'),

  async execute(interaction) {
    await interaction.reply({ content: `@brubiixxxz Otária`, ephemeral: false })
    await wait(2_000)
    await interaction.deleteReply()
  },
}
