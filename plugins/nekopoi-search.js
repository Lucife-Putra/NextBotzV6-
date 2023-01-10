import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { conn, text }) => {
   if (!text) throw `Masukan query...`
   let res = await nekopoisearch(text)
   let cap = `Hasil Dari ${text}\n\n`
   for (let arf of res.reault) {
   cap += `Title: ${arf.title}
Thumbnail: ${arf.thumb}
Info: ${arf.info}
Url: ${arf.url}`

cap += '\n' + '••••••••••••••••••••••••' + '\n'
   }
m.reply(cap)
}
handler.command = ['nekopoi']

export default handler

function nekopoisearch(query) {
    return new Promise((resolve, reject) => {
    axios.get(`https://nekopoi.care/search/${query}`)
        .then(({
           data
        }) => {
            const $ = cheerio.load(data)
            const result = [];
            $('#content > div.postsbody > div.result > ul > li').each(function(a, b) {
            result = {
            status: 200,
            author: '@lui',            
            title: $(b).find('> div > h2 > a').text(),
            thumb: $(b).find('> div > div.limitnjg > img').attr('src'),
            info: $(b).find('> div > div.desc').text(),
            url: $(b).find('> div > h2 > a').attr('href')
            }
            hasil.push(result)
            })
            resolve(hasil)
         })
         .catch(reject)
       })
}