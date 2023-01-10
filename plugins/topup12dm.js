/**
 * Jangan Di Hapus!!
 * 
 * Buatan @KingOfBear
 *
 * Youtubeku: https://youtu.be/pwLZpdfO8AU
 * 
 * Ingin tambah fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6288279268363
 * 
 */

import fetch from 'node-fetch'
  import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command, text }) => {
  let owned = '6288279268363@s.whatsapp.net'
  if(!text) throw `*Cara penggunaan :*\n\n${usedPrefix + command} id|nomor\n\n*Note:*\n*Contoh:* ${usedPrefix + command} 239814337|088279268363`;
  let [id, num] = text.split('|');
  let res = await fetch(`https://saipulanuar.ga/api/topup/epep2?id=${id}&nomor=${num}&apikey=${bear}`)
  let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
  let babi2 = json.result.Qris
	let babi = await(await fetch(babi2)).buffer()
  if ((!id || !num)) throw `*Cara penggunaan :*\n\n${usedPrefix + command} id|nomor\n\n*Note:*\n*Contoh:* ${usedPrefix + command} 239814337|088279268363`;
  let kimakkk = `*Id:* ${json.result.Id}
*Jumlah:* ${json.result.Jumlah}
*Nomor:* ${num}
*Harga:* ${json.result.Harga}

_*Note:*_
_Silahkan Scan Barcode Di Atas, Batas Waktu 300 Detik Jika Lewat Atau Telat Di Anggap Hangus_`
conn.sendHydrated(m.chat, `*「 TOPUP OTOMATIS 」*\n\n${kimakkk}`, `Powered By @${owned.split("@")[0]}`, babi, `${babi2}`, '🌎 U R L', null, null, [[null,null],[null,null],[null,null]], m)
}
handler.help = ['topup12dm']
handler.tags = ['internet']
handler.command = /^(topup12dm)$/i
export default handler
