const fs = require('fs')
const fetch = require('node-fetch')
const timeout = 120000
const poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', wm, 'Bantuan', usedPrefix + 'tete', conn.tekateki[id][0])
        throw false
    }
    let res = JSON.parse(fs.readFileSync('./api/tekateki.json'))
    let random = Math.floor(Math.random() * res.length)
    let json = res[random]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}tete* untuk bantuan
Poin: *${poin} XP*
    `.trim()
    conn.tekateki[id] = [
    await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'teka teki')).buffer(), caption, wm, 'Bantuan', usedPrefix + 'tete', m),
    json,
    poin,
    setTimeout(() => {
        if (conn.tekateki[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'teka teki', usedPrefix + 'tekateki', conn.tekateki[id][0])
            delete conn.tekateki[id]
    }, timeout)
    ]
}
handler.help = ['tekateki']
handler.tags = ['game']
handler.command = /^tekateki/i

module.exports = handler