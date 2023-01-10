import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let res = await fetch('https://candaan-api-h590oa540-ardhptr21.vercel.app/api/image/random')
let json = await res.json()
let url = json.data
let weem = `Source : ${url.source}`
m.reply(wait)
await conn.sendButton(m.chat, '*➩ Random Meme Indo*', weem, url.url, [['⇄ Next ⇄', `${usedPrefix + command}`]], m)
}
handler.command = /^(meme2)$/i
handler.tags = ['internet']
handler.help = ['meme', 'random']
handler.limit = true
export default handler