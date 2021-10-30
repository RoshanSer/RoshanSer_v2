

const Asena = require('../events');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'support', fromMe: false, desc: 'Support/help group link'}, (async (message, match) => {
  
      await message.sendMessage(message.jid,'Join',Config.BOTPLK,'Support group for updates and doubt clearence\n\n *Group Link*:',Config.GRPLINK, MessageType.text);
   
}));
