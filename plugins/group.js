

const Asena = require('../events');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'support', fromMe: false, desc: 'Support links'}, (async (message, match) => {
  if (Config.GRPLINK == 'https://chat.whatsapp.com/KequP491eI1IVVipViyWQP') {
            await message.sendMessage(message.jid,'Join *RoshanSer* Support group for updates and doubt clearence\n\n *Group Link*: _https://chat.whatsapp.com/KequP491eI1IVVipViyWQP_ ', MessageType.text);
       } else {
            await message.sendMessage(message.jid,'Join',Config.BOTPLK,'Support group for updates and doubt clearence\n\n *Group Link*:',Config.GRPLINK,'\n\n Join *RoshanSer* Group:https://chat.whatsapp.com/KequP491eI1IVVipViyWQP_ ', MessageType.text);
       
        }

}));
