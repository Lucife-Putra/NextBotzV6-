import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/cogan?apikey=64333e1c050ced435defe154'
	conn.sendButton(m.chat, '*–––| Sukses |–––*', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(cogan)$/i
handler.tags = ['random']
handler.help = ['cogan']
handler.premium = false
handler.limit = true

export default handler