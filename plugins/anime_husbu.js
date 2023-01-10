import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://kannxapi.herokuapp.com/api/randomimage/husbu'
	conn.sendButton(m.chat, 'Husbu Nya Kak (≧ω≦)', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(husbu)$/i
handler.tags = ['anime']
handler.help = ['husbu']
handler.premium = false
handler.limit = true

export default handler