const { proto } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, text, command, usedPrefix }) => {
	let M = proto.WebMessageInfo;
	if (!m.quoted) throw `balas pesan dengan perintah *${usedPrefix + command}*`;
	if (!text) throw `penggunaan: ${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} tes`;
	let msgs = db.data.msgs
	if (text in msgs) throw `'${text}' telah terdaftar di List store`
	msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
	m.reply(`berhasil menambahkan ${text} ke List Store.\n\nakses dengan mengetik namanya`.trim())
}
handler.help = ['list'].map(v => 'add' + v + ' <teks>')
handler.tags = ['store']
handler.command = /^addlist$/i

handler.group = true
handler.admin = true

export default handler