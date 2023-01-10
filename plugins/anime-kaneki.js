let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://web-production-7c28.up.railway.app/api/wallpaper/keneki?apikey=APIKEY', '', '', m)
}
handler.help = ['kaneki']
handler.tags = ['anime']
handler.command = /^(kaneki)$/i

export default handler 