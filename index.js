const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log(`${client.user.tag} is ready`);
    function chNickname() {
        const targetguild = client.guilds.cache.get("817004935660175371")
        const me = targetguild.members.cache.get(client.user.id)
        let name = ["D", "D a", "D a n", "D a n g", "D a n g e", "D a n g e r"]
        for (let i = 0; i < name.length; i++)
            me.setNickname(name[i])
    }; setInterval(chNickname, 10000)
    
});

client.on('ready', async () => {
    const chid = "818086744233607198"
    const ch = client.channels.cache.get(chid)
    const connection = await ch.join();
    connection.voice.setSelfMute(true);
    connection.voice.setSelfDeaf(false)
  });

client.on('guildMemberAdd', (member) => {
    const channelId = '817332955264319508';
    const channel = member.guild.channels.cache.get(channelId)
    channel.send(`salam <@${member.id}>be danger khosh amadi.`)
})

//Set the prefix and token of the bot.
const settings = {
  prefix: '/',
}
 
//Whenever someone types a message this gets activated.
//(If you use 'await' in your functions make sure you put async here)

client.on("message", message => {
  const args = message.content.trim().split(/ +/g);
const command = args.shift().toLowerCase();
const saymessage = args.join(" ");
if (command === "d!avatar"){

    let mentionMember = message.mentions.members.first();
    var userm = message.author.username
    var avatarauthor = message.author.displayAvatarURL({  dynamic: true })
if(mentionMember){
    let embedavatar = new Discord.MessageEmbed()
    .setImage(mentionMember.user.displayAvatarURL({dynamic: true }))
    .setFooter('Requested by '+ userm, avatarauthor)

    .setColor('#ff0000')
    .setTitle('Avatar Link')
    .setURL(mentionMember.user.displayAvatarURL({ dynamic: true }))
    .setAuthor(mentionMember.user.tag, mentionMember.user.displayAvatarURL({dynamic: true }))
    message.channel.send(embedavatar)

}  
let avataru = new Discord.MessageEmbed()
.setImage(message.author.displayAvatarURL({dynamic: true }))
.setFooter('Requested by '+ userm, avatarauthor)
.setColor('#ff0000')
.setTitle('Avatar Link')
.setURL(message.author.displayAvatarURL({ dynamic: true }))
.setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic: true }))

if(!mentionMember)return message.channel.send(avataru)
}

})

client.on("message", message => {
    const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const saymessage = args.join(" ");
  if (command === "d!avatar"){
  
      let mentionMember = message.mentions.members.first();
      var userm = message.author.username
      var avatarauthor = message.author.displayAvatarURL({  dynamic: true })
  if(mentionMember){
      let embedavatar = new Discord.MessageEmbed()
      .setImage(mentionMember.user.displayAvatarURL({dynamic: true }))
      .setFooter('Requested by '+ userm, avatarauthor)
    }
}
})

function nitroCodeGen() {
    var length = 18;
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 
 client.on('message', msg => {
   if (msg.content === 'd!give nitro') {
     msg.channel.send("https://discord.gift/" + nitroCodeGen());  
     msg.channel.send("https://discord.gift/" + nitroCodeGen());
     msg.channel.send("https://discord.gift/" + nitroCodeGen());
     msg.channel.send("https://discord.gift/" + nitroCodeGen());
     msg.channel.send("https://discord.gift/" + nitroCodeGen());
     msg.channel.send("https://discord.gift/" + nitroCodeGen());
     
     
 
     
    
     msg.reply('nitro overloaded pls use the cmd again!')
     
 
   }
 });

client.on("message", message => {
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  const saymessage = args.join(' ')
    if(command === "d!anno"){
      if(message.member.hasPermission('ADMINISTRATOR')){
        let ed = new Discord.MessageEmbed()
        .setColor("#ff001c")
        .setTitle("announce")
        .setDescription(saymessage)
       
  
        client.channels.cache.get("818043234960932894").send("||@everyone ||",ed)
        message.delete()
      }

     }
})    

client.on("message", message => {
      const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      if(command === "d!vokick"){
              if(message.member.hasPermission('ADMINISTRATOR')){
        if (!message.mentions.members.first())
        return message.channel.send(
          `Lotfan Member Ke Mikhahid Az Voice Kik Konid Ra Mention Konid `
        );
  
      let { channel } = message.mentions.members.first().voice;
  
      if (!channel)
        return message.channel.send(`Member Morede Nazar Dar Voice Join Nistesh ❌`);
        message.mentions.members.first().voice.kick();
  message.channel.send("member mored nazar az voice kick shod✔")
              }
      }
})

client.on("message", (message) => {
  if (message.content.startsWith("d!ban")) {

      
      var member = message.mentions.members.first();
      
      member.ban().then((member) => {
          
          message.channel.send(":wave: " + member.displayName + " has been successfully banned https://gfycat.com/playfulfittingcaribou :point_right: ");
      }).catch(() => {
          
          message.channel.send("Access Denied");
      });
  }
});


client.on("message", message => {
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  const saymessage = args.join(' ')
      if(command === "d!warn"){
      if(message.member.hasPermission('ADMINISTRATOR')){
        let ed = new Discord.MessageEmbed()
        .setColor("#ffff00")
        .setTitle("warn")
        .setDescription(saymessage)
        client.channels.cache.get("827945504377274448").send(ed)
        message.delete()
      };
    };
})

client.on("message", message => {
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  const saymessage = args.join(' ')
    if(command === "d!twt"){
        let ed = new Discord.MessageEmbed()
        .setColor("#00e2ff")
        .setTitle("twiter")
        .setDescription(saymessage)
       
  
        client.channels.cache.get("827863498284990474").send(ed)
        message.delete()
      }
})

client.on("message", message => {
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  const saymessage = args.join(' ')
    if(command === "d!supdate"){
      if(message.member.hasPermission('ADMINISTRATOR')){
        let ed = new Discord.MessageEmbed()
        .setColor("#00f1ff")
        .setTitle("Server Update")
        .setDescription(saymessage)
       
  
        client.channels.cache.get("827820462272675850").send(ed)
        message.delete()
      }

     }
})



client.on("message", message => {
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  const saymessage = args.join(' ')
    if(command === "d!bupdate"){
      if(message.member.hasPermission('ADMINISTRATOR')){
        let ed = new Discord.MessageEmbed()
        .setColor("#00f1ff")
        .setTitle("bot Update")
        .setDescription(saymessage)
       
  
        client.channels.cache.get("827820721073160192").send(ed)
        message.delete()
      }

     }
})


client.on("message", message => {
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  const saymessage = args.join(' ')
    if(command === "d!qr"){
      if(message.member.hasPermission('ADMINISTRATOR')){
        let ed = new Discord.MessageEmbed()
        .setColor("#01aa00")
        .setTitle("نظر سنجی")
        .setDescription(saymessage)
       
  
        client.channels.cache.get("835061528796725298").send(ed)
        message.delete()
      }

     }
})

client.on("message", message => {
  if(message.channel.id === "835061528796725298"){
    message.react('✅')
    message.react('❌')
   }
})

client.on("message", message => {
  if(message.channel.id === "827608618445701230"){
    message.react('✅')
    message.react('❌')
   }
})

client.on("message", message => {

    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
    
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
    
    if (message.content === "d!voice active") {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have that permission! ❌').then(message.react('❌'))
    const vc_alive = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('DANGER')
	.setTitle('Alive Voice')
	.setThumbnail('https://cdn.discordapp.com/attachments/817470274487189504/833311361370030140/server_2.png')
	.addFields(
		{ name: 'Count Of Users In Voice :', value: `${count}` },
	)
	.setTimestamp()
    .setFooter(`Requested by ${message.author.username}`);
    message.channel.send(vc_alive);
    
    }                                
 });

client.on("message", msg => {

    if (msg.content.startsWith("d!restart")) {
      msg.react('✅').then(() => msg.react('❎')); 

const filter = (reaction, user) => {
	return ['✅', '❎'].includes(reaction.emoji.name) && user.id === msg.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '✅') {
      msg.channel.send("dar hale restart shodan✅");
      client.login(process.env.BOT_TOKEN);
      msg.channel.send("restart shod✅")
		} else {
			msg.channel.send('canncel shod✅');
		}
	})
	.catch(collected => {
		msg.reply('you reacted with neither a thumbs up, nor a thumbs down.');
})
    }
})

client.on("ready", () => {
    function YousamPower() {
        let targetguild = client.guilds.cache.get("817004935660175371")
      let hungry = [`${targetguild.memberCount} members`, "Danger Family"]
      let Power = Math.floor(Math.random() * hungry.length);
      client.user.setActivity(hungry[Power], {type: "STREAMING", url: "https://www.twitch.tv/dangerfamily"});
    }; setInterval(YousamPower, 2000)
});

client.login(process.env.BOT_TOKEN);