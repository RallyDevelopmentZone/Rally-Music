/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Get information about bot and commands.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Music Commands**')
        .addFields(
          { name: '🎹 Play', value: 'Stream a song from a given link or text from sources' },
          { name: '⏹️ Stop', value: 'Makes the bot stop playing music and leave the voice' },
          { name: '📊 Queue', value: 'View and manage the song queue of this server' },
          { name: '⏭️ Skip', value: 'Skip the current playing song' },
          { name: '⏸️ Pause', value: 'Pause the currently playing song' },
          { name: '▶️ Resume', value: 'Resume the current paused song' },
          { name: '🔁 Loop', value: 'Toggle loop mode for queue and current song' },
          { name: '🔄 Autoplay', value: 'Enable or disable autoplay [play random songs ]' },
          { name: '⏩ Seek', value: 'Seek to a specific time in the current song' },
          { name: '⏮️ Previous', value: 'Play the previous song in the queue' },
          { name: '🔀 Shuffle', value: 'Shuffle the songs in queue' },
          { name: '📃 playlist', value: 'manage the playlists' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=654f37ba&is=653cc2ba&hm=648a2e070fab36155f4171962e9c3bcef94857aca3987a181634837231500177&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Basic Commands**')
        .addFields(
          { name: '🏓 Ping', value: "Check the bot's latency" },
          { name: '🗑️ Clear', value: 'Clear the song queue of this server' },
          { name: '⏱️ Time', value: 'Display the current song playback time' },
          { name: '🎧 Filter', value: 'Apply filters to enhance the sound as you love' },
           { name: '🎵 Now Playing', value: 'Display the currently playing song information' },
          { name: '🔊 Volume', value: 'Adjust the music volume [ hearing at high volumes is risky ]' },
        ) 
       .setImage('https://media.discordapp.net/attachments/1222854469620858973/1222879304531181589/standard_4.gif?ex=6617d21a&is=66055d1a&hm=56e55aea8f4055f652f47be0a4ee58bad68dbc147e566dc6b672bede78a7caf2&=&width=850&height=300')
      const button1 = new ButtonBuilder()
        .setLabel('Instagram')
        .setURL('https://www.instagram.com/rally_hue?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/3QaPhdGxWx')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('Facebook')
        .setURL('https://www.facebook.com/profile.php?id=61554048449240')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};

/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
