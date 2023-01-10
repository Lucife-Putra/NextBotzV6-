import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.xteam.xyz/randomimage/jahy?APIKEY=YOURAPIKEY'
	conn.sendButton(m.chat, 'Wangy wangy (≧ω≦)', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(jahy)$/i
handler.tags = ['anime', 'premium', 'nsfw']
handler.help = ['jahy']
handler.premium = true

export default handler
