let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *REQUEST* ${htka}


        Klik link di bawah ini
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Link', url: 'wa.me/6282214729677'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['request']
handler.tags = ['info']
handler.command = /^request$/i

export default handler
