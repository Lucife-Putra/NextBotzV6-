import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
    let id = m.chat
    if (id in conn.tebakkabupaten) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebakkabupaten[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
  Kabupaten apakah ini?
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hkab untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakkabupaten[id] = [
        await conn.sendButton(m.chat, caption, author, json.url, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkabupaten[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.title}*`, author, null, [
                ['tebakkabupaten', '/tebakkabupaten']
            ], conn.tebakkabupaten[id][0])
            delete conn.tebakkabupaten[id]
        }, timeout)
    ]
}
handler.help = ['tebakkabupaten']
handler.tags = ['game']
handler.command = /^tebakkabupaten/i

export default handler

const buttons = [
    ['Hint', '/hkab'],
    ['Nyerah', 'menyerah']
]