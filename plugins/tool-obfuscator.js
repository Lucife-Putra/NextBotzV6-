import xa from 'xfarr-api'

let handler = async (m, { conn, text }) => {
   if (!text) throw `Masukan text`
   let res = await xa.tools.obfuscatorjs(text)
   conn.reply(m.chat, res.result, m)
}
handler.command = ['obf']

export default handler