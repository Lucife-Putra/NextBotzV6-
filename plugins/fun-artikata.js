import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
    if (!text) throw `Uhm.. Teksnya mana?`
    
let res = await fetch(`https://leyscoders-api.herokuapp.com/api/arti-kata?q=${text}&apikey=MIMINGANZ`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*Artikata: ${text}*
  ${x.result}`, wm, null, [
                ['Next', `${usedPrefix + command}`],
                ['Translate', `${usedPrefix}tr id ${x.result}`]
            ], m)

}
handler.help = ['artikata'].map(v => v + ' <text>')
handler.tags = ['internet']
handler.command = /^artikata$/i
export default handler
