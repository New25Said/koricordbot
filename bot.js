import { Client, GatewayIntentBits } from "discord.js";
import http from "http";

const PORT = process.env.PORT || 10000;

http.createServer((req, res) => {
    res.writeHead(200);
    res.end("KoriBot vivo");
}).listen(PORT);

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once("clientReady", () => {
    console.log(`Conectado como ${client.user.tag}`);
});

client.on("messageCreate", message => {

    if (message.author.bot) return;

    console.log(
        `[${message.guild?.name}] ${message.author.username}: ${message.content}`
    );

});

client.login(process.env.DISCORD_TOKEN);
