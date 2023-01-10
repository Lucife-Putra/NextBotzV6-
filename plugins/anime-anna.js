import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zeeoneofc.xyz/api/anime/anna?apikey=5Cd8U3tG'
	conn.sendButton(m.chat, 'Waifu nya om (≧ω≦)', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(anna)$/i
handler.tags = ['anime']
handler.help = ['anna']
handler.premium = false
handler.limit = true

export default handler