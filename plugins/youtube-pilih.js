let handler = async (m, { conn, command, args, usedPrefix }) => {
    if (!args[0]) return m.reply('Humm.. Urlnya Mana?')
    let cap = `Hai @${m.sender.split(`@`)[0]}
Silakan Pilih Di Bawah !`
    conn.sendButton(m.chat, cap, author, [
    ['> Vidio <', usedPrefix + 'ytv ' + args[0]],
    ['> Audio <', usedPrefix + 'yta ' + args[0]]
    ], m, { mentions: await conn.parseMention(cap) } )
}
handler.command = /^(ytplay)$/i
handler.help = ['ytplay']
handler.tags = ['downloader']

export default handler