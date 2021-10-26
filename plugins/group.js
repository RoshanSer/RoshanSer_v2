

const Asena = require('../events');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'support', fromMe: false, desc: 'more txtit commands'}, (async (message, match) => {
  
  await message.sendMessage('Join *RoshanSer* Support group for updates and doubt clearence\n\n *Group Link*:_https://chat.whatsapp.com/KequP491eI1IVVipViyWQP_');

}));
