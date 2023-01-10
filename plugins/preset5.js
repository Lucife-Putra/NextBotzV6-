import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 5 」*
https://alight.link/ytCdDYPnweEhLdJq8
`.trim()
  m.reply(caption)
}
handler.help = ['Preset AM']
handler.tags = ['tools']
handler.command = /^(p5)$/i
handler.limit = true

export default handler
