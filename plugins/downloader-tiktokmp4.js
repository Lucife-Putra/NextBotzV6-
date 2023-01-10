import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let res = (await axios.get(API('males', '/tiktok', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    
    let result = `
${res.title}\n\n${res.author}\n\nCara simpan digalery:\n1. Download dulu videonya\n2. Buka terus klik titik 3 pojok kanan atas\n3. lalu klik simpan!\n\nLink Esceh:https://youtube.com/channel/UC_kZ0QiOmykIPGMbfTcErJw\n`
    conn.sendButtonVid(m.chat, res.video, result, `${botdate}`, `Thanks Cuy🗿`, `.thanks`, m)
}
handler.help = ['tiktok2', 'tt2']
handler.tags = ['downloader']
handler.command = /^(tiktok2)$/i

handler.premium = true 
handler.limit = true 

export default handler