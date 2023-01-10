import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/chitoge?apikey=ApiRevita'
	conn.sendButton(m.chat, 'Waifu nya om (≧ω≦)', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(chitoge)$/i
handler.tags = ['anime']
handler.help = ['chitoge']
handler.premium = false
handler.limit = true

export default handler