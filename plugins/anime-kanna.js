let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/kanna?apikey=ed78c137a46873c5b8e5fe3b', '', '', m)
}
handler.help = ['kanna']
handler.tags = ['anime']
handler.command = /^(kanna)$/i

export default handler 