import { facebook } from '../lib/scrape.js'

let handler = async (m, { conn, command, text }) => {

if (!text) throw `Masukan url Facebook`
let res = await facebook(text)
m.reply(res)
}
handler.command = ['fb3']

export default handler