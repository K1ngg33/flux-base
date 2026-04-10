// Inicio de index.js.
const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");

const client = new ForgeClient({
    intents: [
        "Guilds",
        "GuildMembers",
        "GuildModeration",
        "GuildEmojisAndStickers",
        "GuildIntegrations",
        "GuildWebhooks",
        "GuildInvites",
        "GuildVoiceStates",
        "GuildPresences",
        "GuildMessages",
        "GuildMessageReactions",
        "GuildMessageTyping",
        "DirectMessages",
        "DirectMessageReactions",
        "DirectMessageTyping",
        "MessageContent",
        "GuildScheduledEvents",
        "AutoModerationConfiguration",
        "AutoModerationExecution",
        "GuildMessagePolls",
        "DirectMessagePolls"
    ],
    extensions: [
    new ForgeDB()
    ],
    prefixes: [
        ".",
        "..",
        "?",
        "!"
    ]
});
console.log("Tudo funcionando");
client.functions.load('./Funções');
client.commands.load('./Handler/cmds');
client.applicationCommands.load('./Handler/slsh');

client.login("SEU-TOKEN (recomendamos colocar em um .env)");
