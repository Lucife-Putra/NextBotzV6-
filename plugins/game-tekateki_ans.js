const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tete/i.test(m.quoted.contentText)) return !0
  this.tekateki = this.tekateki ? this.tekateki : {}
  if (!(id in this.tekateki)) return this.sendButton(m.chat, 'Soal itu telah berakhir', wm, 'teka teki', '.tekateki', m)
  if (m.quoted.id == this.tekateki[id][0].id) { // undefined T_T
  let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
  if (['.tete', 'Bantuan', ''].includes(m.text)) return !0
  if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
    global.db.data.users[m.sender].exp += this.tekateki[id][2]
    this.sendButton(m.chat, benar + ` +${this.tekateki[id][2]} XP`, wm, 'Lagi?', '.tekateki', m)
    clearTimeout(this.tekateki[id][3])
    delete this.tekateki[id]
  } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) this.sendButton(m.chat, dikit, wm, 'Bantuan', '.tete', m)
  else this.sendButton(m.chat, salah, wm, 'Bantuan', '.tete', m)
  }
  return !0
}
handler.exp = 0

module.exports = handler
