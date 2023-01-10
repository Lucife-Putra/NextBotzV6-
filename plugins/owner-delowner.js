let handler = async (m, { conn, text }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `tag orangnya!`
    if (!global.owner.includes(who.split`@`[0])) throw 'dia bukan Owner !'
    let index = global.owner.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.owner.splice(index, 1)
    conn.reply(m.chat, `@${who.split('@')[0]} Sekarang bukan owner!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['delowner [@user]']
handler.tags = ['owner']
handler.command = /^(remove|hapus|-|del)owner$/i

handler.owner = true

export default handler 