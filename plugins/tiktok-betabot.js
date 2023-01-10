/*
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let imgr = flaaa.getRandom()

if (!args[0]) throw 'Masukkan Link'
let f = await fetch(`https://betabotz-api.herokuapp.com/api/download/tiktok?url=${args[0]}&apikey=BetaBotz`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
`, wm, `${imgr + command}`, [
                ['Get Wm', `${usedPrefix}get ${x.result.watermark}`],
                ['Get NoWm', `${usedPrefix}get ${x.result.nowatermark}`],
                ['Get Audio', `${usedPrefix}get ${x.result.audio}`]
            ], m, { quoted: fakes })

if (!args[0]) throw 'Uhm...url nya mana?'
  let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
  conn.send2ButtonVid(m.chat, `https://betabotz-api.herokuapp.com/api/download/tiktok?url=${args[0]}&apikey=BetaBotz`, txt, wm, 'Sewa', '.sewa', `Audio`, `.tta ${args[0]}`, m)

if (command == 'ttkbetabotz') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSeJ7P56G`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/download/tiktok?url=${args[0]}&apikey=BetaBotz`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
`, wm, `${imgr + command}`, [
                ['Get Wm', `${usedPrefix}get ${x.result.watermark}`],
                ['Get NoWm', `${usedPrefix}get ${x.result.nowatermark}`],
                ['Get Audio', `${usedPrefix}get ${x.result.audio}`]
            ], m, { quoted: fakes })
}
}
handler.help = ['ttkbetabotz'].map(v => v + ' <url>')

handler.command = /^(ttkbetabotz)$/i

export default handler
*/