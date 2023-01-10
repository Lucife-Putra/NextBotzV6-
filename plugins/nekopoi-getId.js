import { getId } from 'nekopoi-scraper'

let handler = async (m, { conn, text }) => {
if (!text) throw `Masukan id...`
let res = await getId(text)
let cap = `Id : ${res.id}
Title : ${res.tile}
Stream : ${res.stream}
Download : ${JSON.stringify(res.download)}`
await conn.sendFile(m.chat, res.image, 'image.jpg', cap, m)
}
handler.command = ['nekogetid']

export default handler