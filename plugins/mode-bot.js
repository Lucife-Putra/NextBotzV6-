import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
  const ultah = new Date('Februari 02 2023 00:0:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `_🎐Pilih Mode bot nya kak..._\n_Off atau On di group_\n`,wm + '\n\n' + botdate, thumbdoc, [['🧿ON','.boton'],['🎀OFF','botoff']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `AMELIA PUTRI SEPTIANY`,          previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/4149491a34cdd06cd6dd7.jpg`)).buffer(),
                        sourceUrl: 'https://youtu.be/dTNrtQagzmc'
                      }}
})
}


handler.help = ['botmode']
handler.tags = ['group']
handler.command = /^(botmode)$/i

handler.admin = true
handler.group = true

export default handler
