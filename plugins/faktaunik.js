import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
 
    let anu = await fetch('https://betabotz-api.herokuapp.com/api/random/faktaunik?apikey=BetaBotz')
   let anu2 = await anu.json()
   let { result } = anu2
   let cap = `*[ Fakta Unik ]*
➥ ${result}`
conn.sendButton(m.chat, cap, wm, [['⇄ Next ⇄', `${usedPrefix + command}`, m)
}
handler.command = /^(faktaunik)$/i

export default handler