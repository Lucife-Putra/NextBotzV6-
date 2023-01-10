import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'url salah'
	m.reply(wait)
	await conn.sendFile(m.chat, text, 'xnxx.mp4', 'Awas dosa kakak ini banyakk ><', m)
}
handler.command = /^(xnxxvid(io)?)$/i

handler.limit = true

export default handler