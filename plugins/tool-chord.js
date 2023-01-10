import { chord } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'chord hanya rindu', m)
 try {
    let res = await chord(text)
    let hasil = `*• Chord Lagu :* ${text} 
 
° Title : ${res.title}
• Artis : ${res.artist}

*${res.chord}*

• Url : ${res.url}
• Artis Url : ${res.artistUrl}`
conn.reply(m.chat, hasil, m)
    } catch (e) {
    m.reply('Chord tidak di temukan')
    throw e 
    }
}
handler.help = ['chord <judul lagu>']
handler.tags = ['tools']
handler.command = /^(chord)$/i
handler.limit = true

export default handler