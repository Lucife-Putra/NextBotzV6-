/**
 * Jangan Di Hapus!!
 *
 * Script Bot By @SaipulAnuar (ᴹᴿ᭄ King Of Bear ×፝֟͜×)
 * Youtube: https://youtu.be/pwLZpdfO8AU
 * 
 * Ingin tambah fitur tapi tidak bisa coding?
 * Ingin perbaiki fitur error tapi tidak bisa coding?
 * hubungi: https://wa.me/6288279268363
 * 
 */
 

import fetch from 'node-fetch' 
import moment from 'moment-timezone'
 let handler = async(m, { conn, usedPrefix, args, command }) => { 
     let name = db.data.users[m.sender].name 
 let fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 9998282719181899999,
    status: 404,
    surface : 404,
    message: `${ucapan()}`,
    orderTitle: `${ucapan()}`,
    thumbnail:   await (await fetch(`https://telegra.ph/file/4149491a34cdd06cd6dd7.jpg`)).buffer(),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
 let judul = ''
  const sections = [ 
                 { 
                   "rows": [{ 
                     "title": `Asupan Gheayubi`, 
                     "rowId": `${usedPrefix}asupan2 gheayubi` 
                   }, { 
                     "title": "Asupan Rikagusriani",  
                     "rowId": `${usedPrefix}asupan2 rikagusriani` 
                   }, { 
                     "title": `Asupan Clarissaong`, 
                     "rowId": `${usedPrefix}asupan2 clarissaong` 
                   }, { 
                     "title": `Asupan Jihan Enjil`, 
                     "rowId": `${usedPrefix}asupan2 kumpulan.cantik.eksi` 
                   }] 
                  }
               ]
         const listMessage = {
      text: `Asupan Tiktok Real Account`,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: judul.trim(),
      buttonText: "Click Here",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fload, mentions: await conn.parseMention(judul), contextInfo: { externalAdReply :{ 
     showAdAttribution: true, 
      }} 
   })
    
    }
handler.help = ['asupan']
handler.tags = ['tools']
handler.command = /^asupan$/i

handler.fail = null
handler.register = true

export default handler 

function ucapan() {
    let res = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = ('Hi')
  if (time >= 0) {
    res = ('Selamat Malam🌃')
  }
  if (time >= 4) {
    res = ('Selamat Pagi🌄')
  }
  if (time >= 12) {
    res = ('Selamat Siang☀️')
  }
  if (time >= 16) {
    res = ('️ Selamat Malam🌇')
  }
  if (time >= 23) {
    res = ('Selamat Malam🌙')
  }
  return res
}