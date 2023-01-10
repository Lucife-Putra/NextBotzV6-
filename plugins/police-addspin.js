let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan jumlah Spin yang akan diberi'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya angka'
    let poin = parseInt(txt)
    let spin = poin
    if (spin < 1) throw 'Minimal 1'
    let users = global.db.data.users
    users[who].spin += poin

    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu mendapatkan +${poin} spin!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) 
}

handler.help = ['addspin @user <amount>']
handler.tags = ['xp']
handler.command = /^addspin$/
handler.rowner = false
handler.police = true

module.exports = handler

