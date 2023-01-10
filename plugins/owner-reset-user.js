let handler = async (m, { conn, text }) => {
if (!text) throw `Tag salah satu yang mau di riset`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.reply(m.chat, `Sukses riset ` + text, m, { mentions: [who] })
global.db.data.users[who].money = 0
global.db.data.users[who].atm = 0
global.db.data.users[who].limit = 0
global.db.data.users[who].potion = 0
global.db.data.users[who].trash = 0
global.db.data.users[who].string = 0
global.db.data.users[who].emerald = 0
global.db.data.users[who].diamond = 0
global.db.data.users[who].iron = 0
}
handler.help = ['risetuser']
handler.tags = ['owner', 'rpg']
handler.command = /^riset|setall(user)$/i

handler.owner = true 

export default handler