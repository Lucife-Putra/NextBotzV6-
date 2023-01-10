import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 9 」*
https://alight.link/mLGSRgFjU7tgaZ9ZA
`.trim()
  m.reply(caption)
}
handler.help = ['Preset AM']
handler.tags = ['tools']
handler.command = /^(p9)$/i
handler.limit = true

export default handler
