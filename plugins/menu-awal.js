import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*ʙᴏᴛ* *ʙᴜɪʟᴅ-ᴏᴘᴇʀᴀᴛᴇ-ᴛʀᴀɴsғᴇʀ* _ᴀᴅᴀʟᴀʜ ᴘʀᴏɢʀᴀᴍ ᴋᴏᴍᴘᴜᴛᴇʀ ʏᴀɴɢ ᴅɪᴊᴀʟᴀɴᴋᴀɴ ᴅɪ ᴡʜᴀᴛsᴀᴘᴘ ʏᴀɴɢ ᴋʜᴜsᴜs ᴅɪʙᴜᴀᴛ ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴘᴇᴋᴇʀᴊᴀᴀɴ-ᴘᴇᴋᴇʀᴊᴀᴀɴ ᴏᴛᴏᴍᴀᴛɪs, ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ᴅɪʀᴀɴᴄᴀɴɢ sᴇᴅᴇᴍɪᴋɪᴀɴ ʀᴜᴘᴀ sᴇʜɪɴɢɢᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ɴʏᴀᴍᴀɴ, ᴅᴀɴ ᴋᴇᴍᴜɴɢᴋɪɴᴀɴ ᴍᴇᴍɪʟɪᴋɪ sᴇᴅɪᴋɪᴛ ʙᴜɢ, ᴀᴅᴀɴʏᴀ ғɪᴛᴜʀ ᴅᴀʀɪ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ɪɴɪ ᴛᴇɴᴛᴜ ᴀᴋᴀɴ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴜɴᴛᴜᴋ ʙᴇʀsᴇɴᴀɴɢ sᴇɴᴀɴɢ, ᴅʟʟ_\n`,wm + '\n\n' + botdate, giflogo, [['LIST MENU','.menu2'],['ALL MENU','.allmenu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'AMELIA PUTRI SEPTIANY',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(menu|help|co)$/i
export default handler