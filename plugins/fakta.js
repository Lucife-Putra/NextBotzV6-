import fs from 'fs'

let handler = async (m, { conn, usedPrefix, command }) => {
   let anu = fs.readFileSync('./json/fakta.json')
   let res = anu[Math.floor(Math.random() * anu.length)]
   let cap = `*[ Fakta Unik ]*
➥ ${res}`
conn.sendButtonDoc(m.chat, cap, wm, '⇄ Next ⇄', `${usedPrefix + command}`, m)
}
handler.command = /^(fakta)$/i

export default handler