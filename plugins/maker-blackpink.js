import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.lolhuman.xyz/api/textprome/blackpink?apikey=64333e1c050ced435defe154&text=${response[0]}&apikey=Xynoz`
  conn.sendFile(m.chat, res, 'zyko-md.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['blackpinkk'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(bl|blackpinkk)$/i
handler.limit = true

export default handler