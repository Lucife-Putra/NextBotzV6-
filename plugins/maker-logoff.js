/*let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*Proses...*')
  let res = `https://api.zeks.xyz/api/epep?text=${response}&apikey=apivinz`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['fflogo'].map(v => v + ' <teks>')
handler.tags = ['sticker', 'internet', 'maker']
handler.command = /^(fflogo)$/i
handler.limit = true
handler.register = true

module.exports = handler*/
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Proses...')
  let res = `https://api.zeks.xyz/api/epep?text=${response[0]}&apikey=${response[1]}apivinz`
  conn.sendFile(m.chat, res, 'fflogo.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['fflogo'].map(v => v + ' <text|text>')
handler.tags = ['logo', 'kabul']
handler.command = /^(fflogo)$/i
handler.limit = false

export default handler

