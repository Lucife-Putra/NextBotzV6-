const rewards = {
    exp: 50000,
    money: 49999,
    potion: 10,
    mythic: 3,
    legendary: 1
}

const cooldown = 2592000000
let handler = async (m, {usedPrefix}) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) return conn.sendButton(m.chat, 
'*–––––『 COOLDOWN 』–––––*',
`ʏᴏᴜ'ᴠᴇ ᴀʟʀᴇᴀᴅʏ ᴄʟᴀɪᴍᴇᴅ *ᴍᴏɴᴛʜʟʏ ʀᴇᴡᴀʀᴅs*, ᴩʟᴇᴀsᴇ ᴡᴀɪᴛ ᴛɪʟʟ ᴄᴏᴏʟᴅᴏᴡɴ ғɪɴɪsʜ.

⏱️ ${((user.lastmonthly + cooldown) - new Date()).toTimeString()}`.trim(), './media/cooldown.jpg', [[`ᴍᴇɴᴜ`, `${usedPrefix}valor`]], m, {asLocation: true})
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `⮕ ${rpg.emoticon(reward)} ${reward}: ${rewards[reward]}\n`
    }
    conn.sendButton(m.chat,
`*––––––『 MONTHLY 』––––––*`,
`🔖 ᴍᴏɴᴛʜʟʏ ʀᴇᴡᴀʀᴅ ʀᴇᴄᴇɪᴠᴇᴅ :
${text}`.trim(), './media/monthly.jpg', [
[`ɪɴᴠᴇɴᴛᴏʀʏ`, `${usedPrefix}inventory`],
[`ᴅᴀɪʟʏ`, `${usedPrefix}daily`]
], m, {asLocation: true})
    user.lastmonthly = new Date * 1
}
handler.help = ['monthly']
handler.tags = ['rpg']
handler.command = /^(monthly)$/i

handler.cooldown = cooldown

export default handler

