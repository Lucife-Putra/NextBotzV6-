let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `kalo kamu nemu pesan eror, lapor pake perintah ini\n\ncontoh:\n${usedPrefix + command} selamat siang owner, sy menemukan eror seperti berikut <copy/tag pesan erornya>`
    if (text.length < 1 ) throw `Laporan terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
    let teks = `*${htki} ${command.toUpperCase()} ${htka}*\nNILAI : ${text}\n*- @${m.sender.split`@`[0]}*`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply('_📑 Terima kasih Telah memberi nilai ke BOT :)._')
}
handler.command = /^(nilainih)$/i
handler.limit = true
export default handler