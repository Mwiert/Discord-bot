require("dotenv").config();
const { REST, Routes } = require("discord.js");

const commands = [
   {
      name: "oynat",
      description: "Favori konsomatrisiniz hizmetinizde",
   },
   {
      name: "aq",
      description: "senin",
   },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
   try {
      console.log("KOMUT KAYITLANIYOR.");

      await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });

      console.log("KOMUT KAYITLANMA BİTTİ.");
   } catch (error) {
      console.log(error);
   }
})();
