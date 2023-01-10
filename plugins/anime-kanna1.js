let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://web-production-7c28.up.railway.app/api/wallpaper/waifu?apikey=APIKEY', '', '', m)
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i

export default handler 