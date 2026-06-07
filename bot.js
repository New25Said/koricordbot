import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`Conectado como ${client.user.tag}`);
});

client.on("messageCreate", message => {

  if (message.author.bot) return;

  console.log(
    `[${message.channel.name}] ${message.author.username}: ${message.content}`
  );

});

client.login(process.env.DISCORD_TOKEN);
