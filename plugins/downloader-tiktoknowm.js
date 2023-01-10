import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args }) => {
   if (!args[0]) return m.reply(`Masukan Url TikTok !`)
   let rest = await fetch(`https://malesin.xyz/tiktok?url=${args[0]}`)
   let res = await rest.json()
   let { title, author, video, audio, videoWM } = res
   let kon = `${title}

Author : ${author}

Powered by © #${wm}`
m.reply(wait)
await conn.sendFile(m.chat, video, 'tt.mp4', kon, m)
}
handler.help = ['tiktoknowm', 'ttnowm']
handler.tags = ['downloader']
handler.command = /^(ttnowm|tiktoknowm)$/i

handler.premium = true 
handler.limit = true 

export default handler