import fetch from 'node-fetch'
let handler = async (m, { args }) => {
  let res = await fetch(global.API('zekais', '/spamcall', {no: args[0]}, 'APIKEY'))
  let json = await res.json()
  if (json.result) m.reply(` ${json.result}`)
    else throw `Error!\n\n${json}`
}
handler.help = ['call'].map(v => v + ' <nomer>')
handler.tags = ['fun']
handler.command = /^(call|spamcall)$/i

handler.limit = 5

export default handler
