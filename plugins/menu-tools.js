/*
 * Jangan Di Hapus!!
 * 
 * Creator @KingOfBear
 *
 * Youtubeku: https://youtu.be/pwLZpdfO8AU
 * 
 * Ingin tambah fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6288279268363
 * 
 */
 
import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
  let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let who = m.sender
const time = moment.tz('Asia/Jakarta').format('HH')
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let name = await conn.getName(m.sender)
  let runnya = `┏━━━ꕥ〔 Tools 〕ꕥ━⬣
┃✾ .asupan
┃✾ .emojimix <1>|<2>
┃✾ .morse <encode|decode>
┃✾ .teruskan <teks>
┃✾ .gimage <query> 🅛
┃✾ .image <query> 🅛
┃✾ .hadis
┃✾ .randem <efek>
┃✾ .randem2 <efek>
┃✾ .nulis2 <teks>
┃✾ .repeat <teks> 🅛
┃✾ .jooxs
┃✾ .jooxp
┃✾ .ping
┃✾ .speed
┃✾ .smeme <teks atas>|<teks bawah> 🅛
┃✾ .akungratis 🅛
┃✾ .freeaccount 🅛
┃✾ .base64
┃✾ .calc <expression>
┃✾ .wait (caption|reply image)
┃✾ .cekapikey
┃✾ .del
┃✾ .delete
┃✾ .enc32  🅟
┃✾ .dec32  🅟
┃✾ .enc64  🅟
┃✾ .dec64  🅟
┃✾ .getcaption
┃✾ .getexif
┃✾ .getprofile [@users] 🅛
┃✾ .halah <teks>
┃✾ .hilih <teks>
┃✾ .huluh <teks>
┃✾ .heleh <teks>
┃✾ .holoh <teks>
┃✾ .igstalk
┃✾ .inspect <chat.whatsapp.com>
┃✾ .jadwaltv
┃✾ .mention <teks>
┃✾ .micro <lang> <teks> 🅛
┃✾ .modapk
┃✾ .npmsearch
┃✾ .pesankosong 🅛
┃✾ .qr <teks>
┃✾ .qrcode <teks>
┃✾ .react <emoji>
┃✾ .readmore <teks>|<teks>
┃✾ .spoiler <teks>|<teks>
┃✾ .readviewonce
┃✾ .resize <width> <height> (reply|caption)
┃✾ .spamwa <number>|<mesage>|<no of messages>  🅟
┃✾ .style <text>
┃✾ .toaksara <teks>
┃✾ .upload (reply media)
┃✾ .tourl (reply media)
┃✾ .translate
┃✾ .weather
┃✾ .zodiac 2002 02 25
┗━━━━━━━━━ꕥ`
  let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
 await conn.sendButton(m.chat, `${wish()} ${name}`,runnya + '\n\n' + wm + '\n\n' + botdate, thumb, [['JANGAN SPAM KAK','.owner']], m, {
  'document':{'url':'https://youtu.be/dTNrtQagzmc'},
'mimetype':global.dpdf,
'fileName':'「 ᴹᴿ᭄ PutraModz ×፝֟͜× 」',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'previewType':'pdf',
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://youtu.be/dTNrtQagzmc',
                        mediaType: 2,
                        description: `⚘ ᴄʀᴇᴀᴛᴇ ᴹᴿ᭄ PutraModz ×፝֟͜×`,
                        title: `💌 My Ultah: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `⚘ by ᴹᴿ᭄ PutraModz ×፝֟͜×`,          previewType: 0,
                        thumbnail: await (await fetch(thumb)).buffer(),
                        mediaUrl: 'https://youtu.be/dTNrtQagzmc'
                        
                      }}
})
 let vn = `./mp3/Play-Date-Melanie-Martinez-Cover-by-#U90a2#U51ef#U60a6XKY.opus`
  conn.sendFile(m.chat, vn, 'Fangz.Ganz', null, m, true, {
type: 'audioMessage',
ptt: true })
}


handler.help = ['tools']
handler.command = /^(tools)$/i

handler.limit = false
handler.register = true
handler.exp = 3

export default handler

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Selamat Malam🌃')
  }
  if (time >= 4) {
    wishloc = ('Selamat Pagi🌄')
  }
  if (time >= 12) {
    wishloc = ('Selamat Siang☀️')
  }
  if (time >= 16) {
    wishloc = ('️ Selamat Malam🌇')
  }
  if (time >= 23) {
    wishloc = ('Selamat Malam🌙')
  }
  return wishloc
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
