import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
  let cap = `
Silakan Aktifkan`
   if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButtonDoc(m.chat, '❗𝐍𝐒𝐅𝐖 𝐆𝐀 𝐀𝐊𝐓𝐈𝐅!!', cap, 'ᴇɴᴀʙʟᴇ', '.on nsfw', null, adReply)
    let anu = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/animefeets?apikey=${global.lolkey}`)

   let fimgb = Buffer.from(await anu.arrayBuffer())

    conn.sendButton(m.chat, 'Random Pict feets', botdate, fimgb, [['next', '.feets']], m)
}
handler.help = ['feets']
handler.tags = ['nsfw']
handler.command = /^(feets)$/i
handler.limit = true
handler.premium = true

export default handler