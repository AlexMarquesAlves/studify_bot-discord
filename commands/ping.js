/* eslint-disable @typescript-eslint/no-var-requires */
const { SlashCommandBuilder } = require('discord.js')

export const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription("Responde com 'Pong!")
export async function execute(interaction) {
  await interaction.reply('Pong!')
}
