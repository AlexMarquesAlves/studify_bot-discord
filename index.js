/* eslint-disable @typescript-eslint/no-var-requires */
const { Client, Events, GatewayIntentBits } = require('discord.js')

// dotenv
const dotenv = require(`dotenv`)
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Tudo Certo! Logado como ${readyClient.user.tag}`)
})

// Log in to Discord with your client's token
client.login(TOKEN)
