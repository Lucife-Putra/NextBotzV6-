import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw `Masukan Query\n*Example:* ${usedPrefix + command} miku`
  let res = await fetch(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${global.lolkey}&query=${text}`)
  let res2 = await res.json()
  let name = await conn.getName(m.sender)
  let array = []
  for (let i of res2.result) {
      array.push({
      title: i.title_english,
      rowld: `.nhentai ${i.id}`,
      description: `ID : ${i.id} || Native : ${i.title_native} || Page : ${i.page}`
      })
  	}
  const sections = [
      {
        title: `━ ━ ━ ━ 『 Nhentai Search 』 ━ ━ ━ ━`,
        rows: array
      }
    ]
    const listMessage = {
      text: `*${htki} Nhentai Search ${htka}*\n\n𝐑𝐞𝐪𝐮𝐞𝐬𝐭 𝐁𝐲 : ${name}\n𝐑𝐞𝐬𝐮𝐥𝐭 𝐅𝐫𝗼𝗺 : ${text}`,
      footer: global.author,
      buttonText: `List Search 🎫`,
      sections
    }
    await conn.sendMessage(m.chat, listMessage, { quoted : fakes })
}
handler.help = ['nhentaisearch']
handler.tags = ['nsfw']
handler.command = /^nhentais(earch)$/i

handler.limit = true 

export default handler