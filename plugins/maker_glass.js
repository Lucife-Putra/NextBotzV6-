import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=64333e1c050ced435defe154&text=${response[0]}&apikey=Xynoz`
  conn.sendFile(m.chat, res, 'xynz.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['logoglass'].map(v => v + ' <text>')
handler.tags = ['logo']
handler.command = /^(logoglass)$/i
handler.limit = false

export default handler