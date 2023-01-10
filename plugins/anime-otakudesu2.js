import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Example : ${command} black rover`
m.reply(`Tunggu Ya Kakak, ${wm}..~_~ Carikan`)
let res = await fetch(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=SadTeams&query=${text}`)
let res2 = await res.json()
let ini_txt = `Hasil Pencarian Dari ${text}\n`
for (let get_result of res2.result) {
ini_txt += `Title : ${get_result.title}
Japanese : ${get_result.japanese}
Judul : ${get_result.judul}
Type : ${get_result.type}
Episode : ${get_result.episodes}
Aired : ${get_result.aired}
Producers : ${get_result.producers}
Genre : ${get_result.genres}
Duration : ${get_result.duration}
Studios : ${get_result.status}
Rating : ${get_result.rating}
Credit : ${get_result.credit}`
}
m.reply(ini_txt)
}
handler.command = ['otakdesu']

export default handler