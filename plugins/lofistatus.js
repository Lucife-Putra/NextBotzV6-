let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`*_${md} @${m.sender.split(`@`)[0]}..._*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  conn.sendButton(m.chat, `Nih *${name}* Vidio lofistatus India`, botdate, pickRandom(lofistatus), [['Next', `/lofistatus`]],m)
}
handler.help = ['lofistatus']
handler.tags = ['vidiorandom']
handler.command = /^(lofistatus)$/i

handler.premium = false
handler.limit = false

handler.fail = null
handler.register = false

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const lofistatus = [
"https://telegra.ph/file/fece45b9cf2d39ff6e69e.mp4",
"https://telegra.ph/file/3562eeb084f1b51f92df3.mp4",
"https://telegra.ph/file/f5fde448b65ce47507487.mp4",
"https://telegra.ph/file/2640d5a4093ab8782e811.mp4",
]
