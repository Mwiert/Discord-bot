require("dotenv").config();
const { Client, IntentsBitField, Intents } = require("discord.js");

const client = new Client({
   intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
      IntentsBitField.Flags.GuildVoiceStates,
   ],
});

client.on("ready", (c) => {
   console.log("💀" + c.user.tag + " ZEHİRİ SALIYOR.");
});

client.on("interactionCreate", async (interaction) => {
   if (!interaction.isChatInputCommand()) return;

   const { commandName } = interaction;
   if (commandName === "oynat") {
      if (interaction.member.voice.channel) {
         await interaction.member.voice.channel.join();
         await interaction.reply("KANALA DAMLADIM");
      } else {
         await interaction.reply("Bi kanala gir da.");
      }
   }
});

client.login(process.env.TOKEN);
