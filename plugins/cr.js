import fetch from 'node-fetch'
import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss') 
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let pp = hwaifu.getRandom()
    let name = await conn.getName(who)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    let pepe = await conn.resize(pp, 150, 150)
    
    let totalf = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
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
     
  let cap = `${htki} 𝐌𝐄𝐍𝐔 𝐈𝐍𝐅𝐎 ${htka}
  
➥ *𝐈𝐍𝐅𝐎 USER*
  ◉ 𝐍𝐚𝗺𝐚 : ${name}
  ◉ 𝐒𝐭𝐚𝐭𝐮𝐬 : ${who.premiumTime > 0 ? 'Premium' : 'Free'}
  ◉ L𝐢𝗺𝐢𝐭 : ${limit}
  ◉ S𝐚𝐥𝐝𝗼 : R𝐩 ${money}
  ◉ 𝐄𝐱𝐩 : ${exp}
  ◉ 𝐑𝗼𝐥𝐞 : ${role}
  ◉ 𝐀𝐠𝐞 : ${age}

➥ *𝐈𝐍𝐅𝐎 𝐁𝐎𝐓*
  ◉ R𝐮𝐧𝐧𝐢𝐧𝐠 O𝐧 : P𝐚𝐧𝐞𝐥
  ◉ M𝗼𝐝𝐞 : Public
  ◉ 𝐓𝐢𝗺𝐞 : ${time} ﹙ɢᴍᴛ +5:30﹚
  ◉ 𝐃𝐚𝐭𝐞 : ${date}
  ◉ 𝐓𝗼𝐭𝐚𝐥 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 : ${totalf.length}
  ◉ 𝐔𝐬𝐞𝐫 𝐁𝐚𝐧𝐧𝐞𝐝 : ${users.length}

${global.cmenua}
/*
await conn.send2ButtonDoc(m.chat, cap, botdate, '𝐋𝐢𝐬𝐭𝐌𝐞𝐧𝐮', '.listmenu', '𝐃𝐚𝐬𝐛𝗼𝐚𝐫𝐝', '.db', fpayment, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© 𝐒𝐤𝐲𝐁𝗼𝐭',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© 𝐒𝐤𝐲𝐁𝗼𝐭',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: wame,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: wame,
    title: bottime  
				}
			}
})
*/
await conn.sendButton(m.chat, cap, botdate, Buffer.alloc(0), [['TES', 'TES'], ['TES', 'TES']], m, { mimetype: "text/rtf", fileName: "Met Pagi", pageCount: 90000, fileLength: 90000, seconds: 90000, jpegThumbnail: pepe, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sgc,
    mediaType: 2,
    description: "WATERMAR", 
    title: "JUDUL",
    body: "BODY",
    thumbnail: pepe,
    sourceUrl: sgc
     }}
  })
/*await conn.send2ButtonVid(m.chat, pp, cap, botdate, '𝐋𝐢𝐬𝐭𝐌𝐞𝐧𝐮', '.listmenu', '𝐃𝐚𝐬𝐛𝗼𝐚𝐫𝐝', '.db', m, adReply)*/
}

handler.command = /^(menu2)$/i

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }