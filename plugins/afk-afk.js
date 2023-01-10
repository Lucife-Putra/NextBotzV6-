let handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    conn.sendHydrated(m.chat,
`*––––––––【 AFK 】––––––––*`,
`   • ᴀᴡᴀʏ ғʀᴏᴍ ᴋᴇʏʙᴏᴀʀᴅ sᴛᴀʀᴛᴇᴅ •

${conn.getName(m.sender)} is now AFK

ʀᴇᴀsᴏɴ: ${text ? '' + text : 'undefined'}`, null, null, null, null, null, [
[`ʏɢ ᴀꜰᴋ ᴅɪ ʙᴜʟʟʏ`, `Ok`]
], m)
}
handler.help = ['afk [reason]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler