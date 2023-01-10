
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!text) return m.reply(`Balas gambar dengan perintah
    ${usedPrefix + command} effect 20
*List effect:*
pixelate
posterize
rotate`)
    
    let img = await q.download?.()
    let url = await uploadImage(img)
  
  let thm = args[0]
  let text1 = args.slice(1).join(' ')
  
    let images = `https://violetics.pw/api/jimp/${thm}?apikey=beta&img=${url}&level=${text1}`
    let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
            }
//lo mau apa??
handler.help = ['jimp2'].map(v => v + ' <efe> <level>')
handler.tags = ['maker']
handler.command = /^(jimp2)$/i

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}