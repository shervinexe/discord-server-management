const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  function chNickname() {
    const targetguild = client.guilds.cache.get("id")
    const me = targetguild.members.cache.get(client.user.id)
    let name = ["1", 2", "3", "4", "5", "6"]
    for (let i = 0; i < name.length; i++)
        me.setNickname(name[i])
}; setInterval(chNickname, 10000)
});

client.on('ready', async () => {
  const chid = "id"
  const ch = client.channels.cache.get(chid)
  const connection = await ch.join();
  connection.voice.setSelfMute(true);
  connection.voice.setSelfDeaf(false)
});

client.on('guildMemberAdd', (member) => {
  const channelId = 'id';
  const channel = member.guild.channels.cache.get(channelId)
  channel.send(`salam <@${member.id}>be danger khosh amadi.`)

                    let ed = new Discord.MessageEmbed()
      .setColor("#1b00ff")
      .setTitle("welcomer system activeted =>")       

      client.channels.cache.get("id").send(ed)
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
                              let eda = new Discord.MessageEmbed()
      .setColor("#ff7b00")
      .setTitle("announce actived =>")
      client.channels.cache.get("id").send(eda)
      client.channels.cache.get("id").send("||@everyone ||",ed)
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
      `Lotfan Member Ke Mikhahid Az Voice Kick Konid Ra Mention Konid `
    );

  let { channel } = message.mentions.members.first().voice;

  if (!channel)
    return message.channel.send(`Member Morede Nazar Dar Voice Join Nistesh ❌`);
    message.mentions.members.first().voice.kick();
message.channel.send("member mored nazar az voice kick shod✔")
            
                                    let eda = new Discord.MessageEmbed()
    .setColor("#3b8335")
    .setTitle("voice kick actived =>")
    client.channels.cache.get("id").send(eda)
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
                                let eda = new Discord.MessageEmbed()
        .setColor("#00ffc7")
        .setTitle("one member baned =>")
        .setDescription("member baned >")
        client.channels.cache.get("id").send(eda)
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
      client.channels.cache.get("id").send(ed)
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
     

      client.channels.cache.get("id").send(ed)
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
     

      client.channels.cache.get("id").send(ed)
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

      message.delete()
    }

   }
})

client.on("message", message => {
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
const text = args.join(' ')
  if(command === "d!dm"){
    if(message.member.hasPermission('ADMINISTRATOR')){
      
       message.mentions.members.first().send(text)
      message.delete()
    }

   }
})

client.on("message", message => {
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
const text = args.join(' ')
  if(command === "d!channelcreate"){
    if(message.member.hasPermission('ADMINISTRATOR')){
    message.guild.channels.create(text, {type: "text"})
      message.delete()
      
              let ed = new Discord.MessageEmbed()
      .setColor("#00f1ff")
      .setTitle("channel created with command =>")
      .setDescription(text)
     

      client.channels.cache.get("id").send(ed)}
  }
})

client.on('message', message =>{
  //React
    const reactEmojiTick = message.guild.emojis.cache.find(tick => tick.name === '✅')
  
  //Code
    if (message.content.toLocaleLowerCase().startsWith('d!rankup maneger')){
      
                      let ed = new Discord.MessageEmbed()
          .setColor("#1b00ff")
          .setTitle("updated user role to maneger =>")       
    
          client.channels.cache.get("836481859423698944").send(ed)
  
      if (!message.member.hasPermission('MANAGE_ROLES'))return message.channel.send('You dont have permission to `Mute`');
  
      let MentionUser = message.mentions.members.first()
  
      if (!MentionUser) 
      return message.channel.send ('>>> Please mention someone to `Mute` him');
  
      if (MentionUser){
  
        const muteRole = message.guild.roles.cache.find(role => role.name === '|💎|𝙈𝙖𝙣𝙖𝙜𝙚𝙧|💎|')
  
        if (muteRole){
          
          MentionUser.roles.add(muteRole)
          message.channel.send(new Discord.MessageEmbed()
          .setTitle (`${message.member.guild.name} | Mods`)
          .setColor ('#47ffb3')
          .addFields (
            {name: ':negative_squared_cross_mark: | User :', value: '<@' + MentionUser.user.id + '>', inline: true},
            {name: '???? | Server :', value: '`' + MentionUser.guild.name + '`',inline: true},
            {name: '???? | Author :', value: '<@' + message.member.user.id + '>', inline: true}
          )).then(message =>{
            message.react(reactEmojiTick)
            message.delete({timeout: 20000})
         
          
          })
          message.delete({timeout: 30000})
        }
  
        if (!muteRole){
  
          message.member.send('Muted role not found | Please use command again (I created `Mute` role)')
          if (message.guild.me.hasPermission('MANAGE_ROLES')){
             return message.guild.roles.create({
              data: {
                name: 'Muted',
                color: 'RED',
                permissions: 'VIEW_CHANNEL'
              }
            })
          }
  
          if (!message.guild.me.hasPermission('MANAGE_ROLES')) 
          return message.channel.send('somethings is wrong please check my permissions') 
        }
        
    }
  }
  })

  client.on('message', message =>{
    //React
      const reactEmojiTick = message.guild.emojis.cache.find(tick => tick.name === '✅')
    
    //Code
      if (message.content.toLocaleLowerCase().startsWith('mute')){
        
        
    
        if (!message.member.hasPermission('MANAGE_ROLES'))return message.channel.send('You dont have permission to `Mute`');
    
        let MentionUser = message.mentions.members.first()
    
        if (!MentionUser) 
        return message.channel.send ('>>> Please mention someone to `Mute` him');
    
        if (MentionUser){
    
          const muteRole = message.guild.roles.cache.find(role => role.name === 'Mute')
    
          if (muteRole){
            
            MentionUser.roles.add(muteRole)
            message.channel.send(new Discord.MessageEmbed()
            .setTitle (`${message.member.guild.name} | Mods`)
            .setColor ('#47ffb3')
            .addFields (
              {name: '❎ | User :', value: '<@' + MentionUser.user.id + '>', inline: true},
              {name: '???? | Server :', value: '`' + MentionUser.guild.name + '`',inline: true},
              {name: '???? | Author :', value: '<@' + message.member.user.id + '>', inline: true}
            )).then(message =>{
              message.react(reactEmojiTick)
              message.delete({timeout: 20000})
           
            
            })
            message.delete({timeout: 30000})
          }
    
          if (!muteRole){
    
            message.member.send('Muted role not found | Please use command again (I created `Mute` role)')
            if (message.guild.me.hasPermission('MANAGE_ROLES')){
               return message.guild.roles.create({
                data: {
                  name: 'Muted',
                  color: 'RED',
                  permissions: 'VIEW_CHANNEL'
                }
              })
            }
    
            if (!message.guild.me.hasPermission('MANAGE_ROLES')) 
            return message.channel.send('somethings is wrong please check my permissions') 
            
            
          }
          
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
               client.channels.cache.get("id").send(ed)
                  let edlog = new Discord.MessageEmbed()
        .setColor("#ffffff")
        .setTitle("nazarsangisystem activeted =>")
        .setDescription(saymessage)
       
  
        client.channels.cache.get("836481859423698944").send(edlog)}
        message.delete()
    }
})

client.on("message", message => {
  if(message.channel.id === "id"){
    message.react('✅')
    message.react('❌')
                      let edlog = new Discord.MessageEmbed()
        .setColor("#ff001c")
        .setTitle("auto react activeted =>")
       
  
        client.channels.cache.get("id").send(edlog)
   }
})

client.on("message", message => {
  if(message.channel.id === "id"){
    message.react('✅')
    message.react('❌')
                          let edlog = new Discord.MessageEmbed()
        .setColor("#ff001c")
        .setTitle("auto react activeted =>")
       
  
        client.channels.cache.get("id").send(edlog)
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
                              let edlog = new Discord.MessageEmbed()
      .setColor("#ffff00")
      .setTitle("requesting for voice active command =>")
     

      client.channels.cache.get("id").send(edlog)
  
  }                                
});

client.on("message", msg => {

  if (msg.content.startsWith("d!restart")) {
    msg.react('✅').then(() => msg.react('❎')); 
                                    let edlog = new Discord.MessageEmbed()
      .setColor("#ffff00")
      .setTitle("restart request activated =>")
     

      client.channels.cache.get("id").send(edlog)
    
                                          let eedlog = new Discord.MessageEmbed()
      .setColor("#ffff00")
      .setTitle("restart complated =>")
     

      client.channels.cache.get("id").send(eedlog)

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

client.on('message', message => {
  if (message.content === `d!ping`) {
      const embed = new Discord.MessageEmbed()
        .setColor("FF6400")
        .setAuthor(`ping : ${Math.round(message.client.ws.ping)}`)
        
          message.channel.send(embed);
  }
      });

client.on("ready", () => {
  function YousamPower() {
      let targetguild = client.guilds.cache.get("id")
    let hungry = [`${targetguild.memberCount} members`, "Danger Family"]
    let Power = Math.floor(Math.random() * hungry.length);
    client.user.setActivity(hungry[Power], {type: "STREAMING", url: "https://www.twitch.tv/dangerfamily"});
  }; setInterval(YousamPower, 2000)
});

client.login('application token');
