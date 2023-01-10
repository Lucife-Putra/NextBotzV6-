import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let anu = await fetch('https://api.akuari.my.id/randomimage/ppcouple')
let url = await anu.json()
let { hasil } = url 
let weem = 'PutraModz'
m.reply(wait)
await conn.sendButton(m.chat, 'Lanang', weem, hasil.cowok, [['⇄ Next ⇄', `${usedPrefix + command}`]], m)
await conn.sendButton(m.chat, 'Woman', weem, hasil.cewek, [['⇄ Next ⇄', `${usedPrefix + command}`]], m)
}
handler.help = ['ppcp2']
handler.tags = ['internet']
handler.command = /^(ppcp2)$/i

export default handler