import { iGstalk } from '../lib/stalkig.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args || !args[0]) throw `Gunakan format ${usedPrefix}${command} [username]\nContoh: ${usedPrefix}${command} jokowi`
  let res = await iGstalk(args[0])
  let arf = res
  let iggs = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM STALK*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴

𝐔𝐬𝐞𝐫 𝐍𝐚𝗺𝐞: ${arf.username}
𝐍𝐢𝐜𝐤 𝐍𝐚𝗺𝐞: ${arf.fullName}
𝐅𝗼𝐥𝐥𝗼𝐰𝐞𝐫: ${arf.followers}
𝐅𝗼𝐥𝐥𝗼𝐰𝐢𝐧𝐠: ${arf.following}
𝐏𝗼𝐬𝐭𝐢𝐧𝐠: ${arf.postsCount}
𝐁𝐢𝗼: ${arf.bio}
𝐋𝐢𝐧𝐤 𝐔𝐬𝐞𝐫: https://instagram.com/${arf.username}`.trim()
  conn.sendFile(m.chat, arf.profilePicHD, 'error.jpg', iggs, m)
}
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = /^(igstalk)$/i
handler.limit = true

export default handler