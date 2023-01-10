import fs from 'fs'

let handler  = async (m, { conn }) => {
let tag = fs.readFileSync('./sticker/tag.webp')
conn.sendFile(m.chat, tag, '', '', m)
}
handler.customPrefix = /^(@6282214729677)$/i
handler.command = new RegExp

export default handler