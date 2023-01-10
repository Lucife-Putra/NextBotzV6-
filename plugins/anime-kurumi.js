import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/kurumi?apikey=ApiRevita'
	conn.sendButton(m.chat, 'Waifu nya om (≧ω≦)', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(kurumi)$/i
handler.tags = ['anime']
handler.help = ['kurumi']
handler.premium = false
handler.limit = true

export default handler