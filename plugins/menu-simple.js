/*
 * Jangan Di Hapus!!
 * 
 * Creator @KingOfBear
 * Recode PutraModz 
 * Youtubeku: https://youtu.be/dTNrtQagzmc
 * 
 * Ingin tambah fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6282214729677
 * 
 */

import fetch from 'node-fetch' 
import moment from 'moment-timezone'
 let handler = async(m, { conn, usedPrefix, args, command }) => { 
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
  const time = moment.tz('Asia/Jakarta').format('HH')
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
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
    message: `Script by PutraModz ×፝֟͜×`,
    orderTitle: `${ucapan()}`,
    thumbnail:   await conn.resize(await (await fetch(pp)).buffer(), 300, 250),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
 let judul = ''
  const sections = [ 
                 { 
                   "rows": [
                {
                  "title": `[🧾] Semua Perintah`,
                  "description": "Memberikan Semua Fitur Bot",
                  "rowId": ".allmenu"
                }, {
                  "title": "[🕋] Islam",
                  "description": "Menu Tentang Islam",
                  "rowId": ".? quran"
                }, {
                  "title": "[🏫] Edukasi",
                  "description": "Menu Edukasi",
                  "rowId": ".? edukasi"
                }, {
                  "title": "[📰] News",
                  "description": "Menu Berita",
                  "rowId": ".? News"
                },  {
                  "title": "[🎮] Game",
                  "description": "Menu Game",
                  "rowId": ".game"
                }, {
                  "title": "[🗺️] Epic Rpg",
                  "description": "Menu Game RPG",
                  "rowId": ".rpg"
                }, {
                  "title": "[📈] XP",
                  "description": "XP Dan Level",
                  "rowId": ".xp"
                },  {
                  "title": "[🔞] NSFW",
                  "description": "Menu 18+",
                  "rowId": ".menunsfw"
                }, {
                  "title": "[😭] Cekversi NextBotz",
                  "description": "Mau Cek Versi kack",
                  "rowId": ".cekversi"
                }, {
                  "title": "[🎇] Stiker",
                  "description": "Menu Buat Stiker",
                  "rowId": ".stikerr"
                }, {
                  "title": "[🐚] Kerang Ajaib",
                  "description": "Menurut Kerang ajaib....",
                  "rowId": ".kerangg"
                }, {
                  "title": "[📑] Quotes",
                  "description": "Menu Quotes",
                  "rowId": ".menuquotes"
                }, {
                  "title": "[🏛️] Admin",
                  "description": "Menu Admin Group",
                  "rowId": ".? admin"
                }, {
                  "title": "[🏢] Grup",
                  "description": "Menu Group",
                  "rowId": ".grup"
                }, {
                  "title": "[🔝] Premium",
                  "description": "Menu Untuk Premium",
                  "rowId": ".premium"
                }, {
                  "title": "[🖥️] Internet",
                  "description": "Cari Sesuatu Di Bot",
                  "rowId": ".internet"
                }, {
                  "title": "[🥷] Anonymous",
                  "description": "Mainkan Anonymous Chat",
                  "rowId": ".anonymous"
                }, {
                  "title": "[✒️] Nulis & Logo",
                  "description": "Menu Nulis & Logo",
                  "rowId": ".menunulis"
                }, {
                  "title": "[📺] Downloader",
                  "description": "Download Sesuatu Di Bot",
                  "rowId": ".downloader"
                }, {
                  "title": "[🔧] Tools",
                  "description": "Tools Yang Bisa di Gunakan Di Bot",
                  "rowId": ".tools"
                }, {
                  "title": "[🎇] Fun",
                  "description": "Menu Ceria",
                  "rowId": ".fun"
                }, {
                  "title": "[📂] Database",
                  "description": "Simpan Sesuatu Di Bot",
                  "rowId": ".? database"
                }, {
                  "title": "[📝] Vote & Absen",
                  "description": "Menu Vote & Absen",
                  "rowId": ".menuvote"
                }, {
                  "title": "[🎙️] Pengubah Suara",
                  "description": "Ubah Suaramu",
                  "rowId": ".? audio"
                }, {
                  "title": "[🤖️] MenuList2",
                  "description": "Menampilkan ListMenu2",
                  "rowId": ".? sound"
                }, {
                  "title": "[🎙️] Vn Imuet",
                  "description": "Mendengarkan Vn Yang Sangat Imuet",
                  "rowId": ".vn"
                }, {
                  "title": "[🤖] TopUp FreeFire",
                  "description": "Fitur Topup Otomatis",
                  "rowId": ".topupff"
                }, {
                  "title": "[⛩️] Anime",
                  "description": "Cari Anime Di Bot",
                  "rowId": ".anime"
                }, {
                  "title": "[ℹ️] Info",
                  "description": "Info Tentang Bot",
                  "rowId": ".menuinfo"
                }, {
                  "title": "[🔧] Virus",
                  "description": "Virus Yang Bisa Membuat Whatsapp Orang Ngelag/Error",
                  "rowId": ".menuvirtex"
                }, {
                  "title": "Tanpa Kategori",
                  "description": "",
                  "rowId": ".? tanpakategori"
                }, {
                  "title": "[🧑‍💻] Owner",
                  "description": "Menu Khusu Owner",
                  "rowId": ".menuowner"
                }, {
                  "title": "[📸] Logo",
                  "description": "Menu Khusus Logo",
                  "rowId": ".logolist"
                }, {
                  "title": "[📸] Maker",
                  "description": "Menu Khusus Maker",
                  "rowId": ".? maker"
                }
              ] 
            }
          ]
         const listMessage = {
      text: `${ucapan()} ${name}`,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: judul.trim(),
      buttonText: "Klik Disini",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fload, mentions: await conn.parseMention(judul)}, m, {
  'document':{'url':'https://youtu.be/hklv-Ysqqac'},
'mimetype':global.dpdf,
'fileName':'「 ᴹᴿ᭄ PutraModz ×፝֟͜× 」',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'previewType':'pdf',
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://youtu.be/dTNrtQagzmc',
                        mediaType: 2,
                        description: `⚘ ᴄʀᴇᴀᴛᴇ PutraModz ×፝֟͜×`,
                        title: `💌 My Ultah: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `⚘ by PutraModz ×፝֟͜×`,          previewType: 0,
                        thumbnail: await (await fetch(thumb)).buffer(),
                        mediaUrl: 'https://youtu.be/dTNrtQagzmc'
                        
                      }}
})
  }
handler.help = ['menu2', '?', 'help']
handler.tags = ['main']
handler.command = /^(menu2|\?|help)$/i

handler.fail = null

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
