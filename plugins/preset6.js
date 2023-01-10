import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 6 」*
https://alight.link/8pX8acWHaNzz9Wsj8
`.trim()
  m.reply(caption)
}
handler.help = ['Preset AM']
handler.tags = ['tools']
handler.command = /^(p6)$/i
handler.limit = true

export default handler
