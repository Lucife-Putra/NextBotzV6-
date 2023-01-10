import { toAudio } from '../lib/converter'

let handler = async (m, { conn, usedPrefix, command, args }) => {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let audio = await toAudio(media, 'mp4')
conn.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted : m })
}
handler.help = ['jadibug']
handler.tags = ['bugmenu']
handler.command = /^(jadibug)$/i

handler.premium = true 

export default handler