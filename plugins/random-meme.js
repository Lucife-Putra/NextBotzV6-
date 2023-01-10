import fs from 'fs'

let handler = async (m, { conn, usedPrefix, command }) => {
let meme = JSON.parse(fs.readFileSync('./json/meme.json'))
let res =  meme[Math.floor(Math.random() * meme.length)]
conn.sendButtonImg(m.chat, res, '❏  *M E M E*\n\nTch, Nih Random Meme Indo', author, 'Next', usedPrefix + 'meme', m)
}
handler.help = ['meme']
handler.tags = ['random', 'internet']
handler.command = ['meme']

export default handler