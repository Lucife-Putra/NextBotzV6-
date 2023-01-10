import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import moment from 'moment-timezone'
import { sticker } from '../lib/sticker.js'
import fs from "fs"

let handler = async (m, { conn, args, usedPrefix, command }) => {

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
    let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
let caption = `*• SEWA BOT & UP TO PREMIUM •*
        
❏ *LIST SEWA BOT*
• Hemat = _5k/grup (1 minggu)_
• Normal = _15k/grup (1 bulan)_
• Standar = _45k/grup (3 bulan)_
• Pro = _65k/grup (5 bulan)_                                           
• Permanen = _80k_

• Free/Gratis = Gunakan join limit (1 Hari)

❏ *PERPANJANG MASA AKTIF BOT*
• Level Hemat = 5k
• Level Normal = 7k
• Level Standar = 20k
• Level Pro = 35k



❏ *UPGRADE PREMIUM*
• 5k  (1 Day)
• 15k (1 Minggu)
• 25k (1 Month)
• 45k (3 Month)
• 65k (5 Month)
• 75k (8 Tahun)


❏ *PERPANJANG MASA AKTIF PREMIUM*
5k = 5k
15k = 7k
25k = 10k
45k = 15k
65k = 25k
75k = 40k



❏ *FITUR PREMIUM*
• Unlimited Limit
• Unlock Fitur 18+
• Ban, suspand User
• Mendapatkan code Hadiah Exp, money
Create (Rpg)
• Cheat Money, exp, limit,
• +5 Join Limit ticket
`
await conn.sendButton(m.chat, bottime, caption, pp, [
                ['OWNER', `${usedPrefix}levelup`],
                ['BUY JOIN LIMIT', `${usedPrefix}buy`]
            ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: bottime,
    body: botdate,
    thumbnail: await(await fetch(thumbbc)).buffer(),
    sourceUrl: swo
     }}
  })
}

handler.help = ['sewabot', 'sewa']
handler.tags = ['info']

handler.command = /^sewabot|sewa$/i

export default handler

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})})