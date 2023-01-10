import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let kabul = fs.readFileSync('./mp4/India3.mp4') 
conn.sendFile(m.chat, kabul, 'Nih lofistatus India', botdate, m, true)
}

handler.help = ['lofistatus4'] 
 handler.tags = ['vidiorandom'] 
 handler.command = /^(lofistatus4)$/i 

export default handler