import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let anu = await fetch('https://api.akuari.my.id/randomimage/darkmeme17')
let url = await anu.json()
let weem = 'Next ? Click Di Bawah !'
m.reply(wait)
await conn.sendButton(m.chat, '*➩ Random Darkmeme17*', weem, url.hasil, [['⇄ Next ⇄', `${usedPrefix + command}`]], m)
}
handler.help = ['darkmeme']
handler.tags = ['internet', 'random']
handler.command = /^(darkmeme)$/i

export default handler