import xa from 'xfarr-api'

let handler = async (m, { conn, usedPrefix, command, args }) => {

   if (!args[0]) throw `Imput Url TikTok`
   let res = await xa.downloader.tiktok(args[0])
  await conn.sendFile(m.chat, res.media[0].url, '', res.title, m)
}
handler.command = ['ttx']

export default handler