import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 7 」*
https://alight.link/5LW5C4jqAgT19P7k9
`.trim()
  m.reply(caption)
}
handler.help = ['Preset AM']
handler.tags = ['tools']
handler.command = /^(p7)$/i
handler.limit = true

export default handler
