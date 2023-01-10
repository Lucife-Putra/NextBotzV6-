let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' *Sukses mematikan Bot 📴* ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
handler.help = ['NexBotz(on/off)']
handler.tags = ['owner']
handler.command = /^(botoff)$/i

handler.admin = true
handler.group = true

export default handler
