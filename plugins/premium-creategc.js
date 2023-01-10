//import { bold } from "chalk"
let handler = async (m, { conn, text, isOwner }) => {
   
   if (!text) return m.reply('_Masukkan Nama Grup!_')
   try{
    m.reply(wait)
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
 /// console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nViolet'))
    m.reply('_Berhasil Membuat Grup *' + text + '*_\n\n*Nama:* ' + text + '\n*ID:* ' + group.gid + '\n*Link:* ' + url)
       } catch (e) {
    let [namagc, partici] = text.split('|')
    if (!namagc) throw 'Format Salah!!!'
    if (!partici) throw 'Tag user sebagai member baru!'
    let mem = conn.parseMention(`@${parseInt(m.sender)} ${partici}`)
    let ha = await conn.groupCreate(namagc, mem).catch(console.error)
    console.log(JSON.stringify(ha));
    await m.reply(`*GROUP CREATE*

\`\`\`Group Telah Dibuat @${m.sender.replace(/@.+/, '')}\`\`\`


${JSON.stringify(ha.participants)}`)
     conn.groupMakeAdmin(ha.gid, [m.sender])
   if (!isOwner) {
      await conn.modifyChat(ha.gid, 'delete', {
            includeStarred: false
          }).catch(console.error)
         conn.groupLeave(ha.gid)
    }
  }
}
handler.help = ['creategroup']
handler.tags = ['premium']
handler.command = /^((create|buat)(gc|grup|group))$/
handler.owner = true
handler.group = true
handler.premium = false
export default handler
