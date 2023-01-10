import axios from 'axios'
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
	axios.get(`https://api.lolhuman.xyz/api/cerpen?apikey=64333e1c050ced435defe154`).then ((res) => {
	 	let hasil = `*Tittle :${res.data.result.title}*
*Creator*: ${res.data.result.creator}
*Cerpen*: ${res.data.result.cerpen}

    conn.reply(m.chat, hasil, m)`
	})
}
handler.help = ['cerpen']
handler.tags = ['fun']
handler.command = /^(cerpen)$/i

handler.fail = null
handler.exp = 0
handler.limit = true

export default handler
