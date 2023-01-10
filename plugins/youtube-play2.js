import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[❗INFO❗] Masukan Nama Lagu Yang Ingin Di Cari\n\n*—◉ Contoh:\n#play.1 Good Feeling - Flo Rida*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `*_⏳Wait,Audio Sedang Di Proses..._⏳*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'AUDIO',
body: 'Enjoy',         
previewType: 0, thumbnail: await (await fetch(`https://telegra.ph/file/6cbd342ec11f22fb85c0b.jpg`)).buffer(),
sourceUrl: `https://youtu.be/pwLZpdfO8AU`}}})
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_⏳ Wait,Video Sedang Di Proses...⏳_*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'VIDEO',
body: 'ᴹᴿ᭄ PutraModz ×፝֟͜×',         
previewType: 0, thumbnail: await (await fetch('https://telegra.ph/file/6cbd342ec11f22fb85c0b.jpg')).buffer(),
sourceUrl: `https://youtu.be/-7oTVcYR680`}}})
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp4?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `_ᴹᴿ᭄ PutraModz ×፝֟͜×_`, m)}
}catch(e){
m.reply('*[❗INFO❗] ERROR,TIDAK DAPAT MENCARI LAGU TERSEBUT*')
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
