import xa from 'hxz-api'

let handler = async (m, { conn, usedPrefix, command, text }) => { 
   if (!text) throw `Masukan query`
   let res = await xa.chara(text)
   m.reply('Sedang mencari character...')
   await conn.sendButtonImg(m.chat, res.getRandom(), '❏ *C H A R A C H E R*\n\nTch, Nih Chara ' + text, 'Next ? Click Di Bawah !', 'Next', usedPrefix + 'chara ' + text, m)
}
handler.help = ['chara']
handler.tags = ['anime']
handler.command = /^chara(cter)?$/i

handler.limit = 2 

export default handler