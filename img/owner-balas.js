/*
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, args, text }) => {
    conn.req = conn.req ? conn.req : {}
    if (!args || !text) return m.reply('Silahkan Masukan Teksnya')
    let lmfao = args[0]
    let bruh = (lmfao + '@s.whatsapp.net')
    let tex = args.slice(1).join(' ')
    let txt = conn.req[bruh].text || m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let _text = (txt)
    conn.reply(m.chat, 'Pesan Anda sudah terkirim', m)
    conn.sendMessage(bruh, _text, MessageType.text)
    delete conn.req[bruh]
    
}
handler.help = ['balas'].map(v => v + ' [nomor] [teks]')
handler.tags = ['owner']
handler.command = /^(balas|reply)/i

handler.owner = true

handler.fail = null

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
*/

import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix: _p }) => {
let [number, pesan, boddy] = text.split `|`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 SUKSES 」*\n\nDari : wa.me/${korban}\nPesan : ${pesan}\n\n${global.wm}`

    await conn.reply(korban + '@s.whatsapp.net', spam1, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    title: global.wm, 
    body: 'Hai,Ini Balasan Pesan Dari Owner',  
    sourceUrl: snh, 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })    

{

    let logs = `[!] Berhasil mengirim pesan wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}}
handler.help = ['balas'].map(v => v + ' [nomor] | [teks]')
handler.tags = ['owner']
handler.owner = true
handler.command = /^(pesan|balas|reply)$/i

export default handler
