const Discord = require('discord.js');
const client = new Discord.Client();
var colors = require('colors');
var Long = require("long");
const config = require("./config.json");


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`.rainbow);
    client.channels.get("620852303301443584").send("back online!")
});

client.on("disconnect", function(event) {
    console.log(`The WebSocket has closed and will no longer attempt to reconnect`.red);
});

client.on('message', message => {
    var quoteArray = [
        "Trying to define yourself is like trying to bite your own teeth.",
        "We seldom realize, for example that our most private thoughts and emotions are not actually our own. For we think in terms of languages and images which we did not invent, but which were given to us by our society.",
        "Man suffers only because he takes seriously what the gods made for fun.",
        "This is the real secret of life -- to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play.",
        "The meaning of life is just to be alive. It is so plain and so obvious and so simple. And yet, everybody rushes around in a great panic as if it were necessary to achieve something beyond themselves.",
        "All camels will eventually thrive",
        "No valid plans for the future can be made by those who have no capacity for living now.",
        "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
        "I have realized that the past and future are real illusions, that they exist in the present, which is what there is and all there is.",
        "Never pretend to a love which you do not actually feel, for love is not ours to command.",
        "You and I are all as much continuous with the physical universe as a wave is continuous with the ocean.",
        "Zen does not confuse spirituality with thinking about God while one is peeling potatoes. Zen spirituality is just to peel the potatoes.",
        "But I'll tell you what hermits realize. If you go off into a far, far forest and get very quiet, you'll come to understand that you're connected with everything.",
        "You don't look out there for God, something in the sky, you look in you.",
        "You are that vast thing that you see far, far off with great telescopes."

    ];
    var quote = quoteArray[Math.floor(Math.random() * quoteArray.length)]
    if (message.content === 'ping') {
        console.log("Ping Pong!".red);
        message.reply('Pong!');
    }
    if (message.content === 'bong') {
        message.reply('wtf are you trying to do?');
    }
    if (message.content === 'no') {
        message.reply('yes');
    }
    if (message.content === 'nick') {
        message.guild.members.get(client.user.id).setNickname("Alan Wattz! in the house!");
    }
    if (message.content === 'unnick') {
        message.guild.members.get(client.user.id).setNickname("");
    }
    if (message.content === 'quote') {
        //quoteArray[Math.floor(Math.random()*quoteArray.length)]
        

        //message.reply(quoteArray[Math.floor(Math.random()*quoteArray.length)]);
      //  var quote = quoteArray[Math.floor(Math.random() * quoteArray.length)]
        message.channel.send("```" + quote + "```")
            //console.log("sending quote");
        console.log("sending quote".yellow)
        console.log(quote.green);
    }
    if (message.content === 'help') {
        console.log("helped a user today!".yellow);
        message.reply('my commands are quote, ping and help!');
    }
    if (message.content === 'pong') {
        console.log("Its Fucking Ping NOT PONG!!".underline.red);
        message.reply('its ping not pong!');
    }if(message.content ==='read quote'){
        console.log("Reading quote".yellow)
        console.log(quote.green);
        message.channel.send("```" + quote + "```",{tts: true})

    }
    // if (message.channel.type == 'text') {
    //   message.reply('fuck');
    // return;
    //}

});


client.login(config.token); //login with the token


// code to allow me to enter commands in console!


// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt me to input data in console.
console.clear();
console.log("Enter commands below!".yellow);

// When user input data and click enter key.
standard_input.on('data', function(data) {

    // User input exit.
    if (data === 'exit\n') { //if the command exit is issued then close the prossess
        // Program exit.
        console.log("Program Exiting!".underline.red); //print to the console what we are doing
        process.exit(); //close the prossess
    } else {
        if (data === 'clear\n') {
            console.log("clearing".cyan);
            console.clear();
        } else {
            if (data === '\n') {
                console.log("wtf".magenta)
            } else {
                console.log(data.america)
            }
        }
    }
});

function shutDown(arg) {
    if (arg == 1) {
        console.log("shutting down safely!");
        client.destroy();
        process.exit();

    } else {
        console.log("Not shutting down!");
        client.channels.get("620852303301443584").send("false alarm!")

    }
}

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    client.channels.get("620852303301443584").send("A keyboard Interupt detected! shutting down!")

    setTimeout(shutDown, 1500, '1');

});


///message.guild.members.get(bot.user.id).setNickname("some nickname");
