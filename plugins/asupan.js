/**
 * Jangan Di Hapus!!
 *
 * Script Bot By @SaipulAnuar (ᴹᴿ᭄ King Of Bear ×፝֟͜×)
 * Youtube: https://youtu.be/pwLZpdfO8AU
 * 
 * Ingin tambah fitur tapi tidak bisa coding?
 * Ingin perbaiki fitur error tapi tidak bisa coding?
 * hubungi: https://wa.me/6288279268363
 * 
 */

import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} gheayubi`
	let sayang = await fetch(`https://saipulanuar.ga/api/info/randomtt?user=${args[0]}&apikey=${bear}`)
  let json = await sayang.json()
    if (sayang.status !== 200) throw await sayang.text()
    if (!json.status) throw json
  let babi2 = json.result.video
	let babi = await(await fetch(babi2.url)).buffer()
  await conn.sendFile(m.chat, babi, 'asupan.mp4', `*Caption:* ${json.result.video.caption}
${json.result.video.plays} Ditonton
${json.result.video.likes} Like
${json.result.video.comments} Komentar
${json.result.video.share} Dishare
${json.result.video.ago}` , m)
}
handler.command = /^asupan2$/i

handler.premium = true
handler.fail = null
handler.register = true

export default handler