import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 10 」*
https://alight.link/UNgUAHjxoZdxnGT8A
`.trim()
  m.reply(caption)
}
handler.help = ['Preset AM']
handler.tags = ['tools']
handler.command = /^(p0)$/i
handler.limit = true

export default handler
