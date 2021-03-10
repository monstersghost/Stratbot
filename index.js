const Discord = require('discord.js');
const bot = new Discord.Client;
const token ='';
const PREFIX = '!';
const Version = "1.0.1";

bot.on('ready', () =>{
    console.log('this bot is online');
})
bot.on('message', msg=>{
    let args = msg.content.substring(PREFIX.length).split(" ");
    //let args = msg.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'Hello there':
            msg.channel.send('Hello there, General kanobi!')
            break;
            case 'e12strat':
            msg.channel.send('https://cdn.discordapp.com/attachments/593916013192675329/812762555977957376/E12s_P1.jpg')
            break;
            case 'e10strat':
                msg.channel.send('https://cdn.discordapp.com/attachments/593916013192675329/803588430008156180/static.png')
                break;
            case 'info':
                if(args[1] === 'version' ){
                    msg.channel.send('version ' + Version)
                }
                    else {
                        msg.channel.send('Invaled argument')

                    }
                    break; 
            case 'help':
                msg.channel.send('try typing !Hello there ;)  ')
                msg.channel.send('!e12strat: sends pic of e12S Strategy')
                msg.channel.send('!e10strat: sends pic of e10S Strategy')
                msg.channel.send('info Version: current Bot version')
                msg.channel.send('help: you just sent it..')
                break;
            
              
    }
   
})
bot.login(token);

