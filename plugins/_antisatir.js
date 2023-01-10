const isSatir = /(([Kk]enao|[Bb]ims|[Aa]v)a|tumlul|Tumlul|[Gg]wejh|[Oo]kgey|[Ss]iava|[Kk]avan|tenan|[Aa](msu|f[ah])|[Mm]gak|lmao|[Pp]edo|([Bb]an|hoo)h|[Kk]nf|ancrit)/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    let imgr = flaaa.getRandom()
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiSatir = isSatir.exec(m.text)

    if (chat.antiSatir && isAntiSatir) {
        await conn.sendButton(m.chat, `*Kata Satir Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antisatir', '/disable antisatir'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].warn += 1
    
    await conn.sendButton(m.chat, bottime, `Kamu mendapatkan Warn 1
Karena menggunakan Kata yg berbau Satir
    
    Ketik *.my* untuk cek Warning mu`, `${imgr + 'Anti Satir'}`, [
        ['MY', `${usedPrefix}my`]
    ], m)
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    return !0
}