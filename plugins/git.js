const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {



    message.sendMessage(Buffer(), Messagetype.text: `*Created by Roshan*
    *Github:https://github.com/RoshanSer/RoshanSer_v2*
    *Join Whatsapp group:* https://chat.whatsapp.com/KequP491eI1IVVipViyWQP
`}) 

}));
