import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButtonDoc(m.chat, '𝐍𝐒𝐅𝐖 𝐆𝐀 𝐀𝐊𝐓𝐈𝐅!!', botdate, '𝐄𝐍𝐀𝐁𝐋𝐄', '.on nsfw', m, adReply)

    let anu = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/foot?apikey=apirey`)

   let fimgb = Buffer.from(await anu.arrayBuffer())

    conn.sendButton(m.chat, 'Result Random Foot', botdate, fimgb, [['NEXT', '.foot']], m, adReply)
}
handler.help = ['wallgames']
handler.tags = ['nsfw']
handler.command = /^(foot)$/i
handler.limit = true
handler.premium = true


export default handler