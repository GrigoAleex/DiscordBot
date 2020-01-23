const {Client, RichEmbed} = require('discord.js');
const bot = new Client();


const token = 'NjY5ODQ0NTc2NjUwOTE5OTM2.XilwWQ.AYhwSJwCvuFWg3jzLR_6mgm1B9Y';
var isReady = true; 

// Costum
bot.on('ready', () => {
    console.log("I AM ONLINE");
});

// Embends
const creator = new RichEmbed()
    .setTitle('Grigorescu Alexandru')
    .setColor(0xFF0000)
    .setDescription('instagram.com/grigo_aleex');

bot.on('message', message=>{
    // adaugare prefix
    let args = message.content.split(" ");

    // commands
    if (isReady){
        if(message.content === 'ADRIANO'){
            isReady = false;
            var voiceChannel = message.member.voiceChannel;
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.playFile('./music/Adriana.m4a');
                dispatcher.on("end", end => {
                    voiceChannel.leave();
                    isReady = true;
                });
            }).catch(err => console.log(err));
        }
        if(message.content === 'CORNELIA'){
            isReady = false;
            var voiceChannel = message.member.voiceChannel;
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.playFile('./music/Cornelia.m4a');
                dispatcher.on("end", end => {
                    voiceChannel.leave();
                    isReady = true;
                });
            }).catch(err => console.log(err));
        }
    }

})

bot.login(token);