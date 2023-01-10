import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args }) => {
   if (!args[0]) throw `Masukan query\nContoh : ${usedPrefix + command} Mobile Legends`
   try {
     let res = await fetch(`https://betabotz-api.herokuapp.com/api/search/apk?query=${args[0]}&apikey=BetaBotz`)
     let rest = await res.json()
     let cap = `Berikut Hasil Percarian Dari ${args[0]}\n\n`
   for (let p of rest.result) {
     cap += `◈▻ *Name : ${p.name}
◈▻ *Url :* ${p.url}
◈▻ *Dl Url :* ${p.dl_url}
◈▻ *Description :* ${p.desc}
`
cap += '\n' + '––––––––––––––––––––––––' + '\n'
    }
  m.reply(cap)
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = ["apk"].map(v => v + ' <query>')
handler.tags = ["tools"]
handler.command = /^apk(s?earch)?$/i

handler.register = true

export default handler