import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Teks Nya Banh?\nContoh :\!pornhub tes|tes'
  m.reply('Proses...')
  let res = `https://api.lolhuman.xyz/api/textprome2/pornhub?apikey=64333e1c050ced435defe154&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'pornhub.jpg', `*Done Banh*\n_©by ᴹᴿ᭄ King Of Bear ×፝֟͜×_`, m, false)
}
handler.help = ['pornhub'].map(v => v + ' <text1>|<teks2>')
handler.tags = ['maker']
handler.command = /^(pornhub)$/i
handler.register = true

handler.limit = true
handler.premium = true

export default handler
