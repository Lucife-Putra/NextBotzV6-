import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./mp4/India.mp4') 
conn.sendFile(m.chat, kabul, 'Nih lofistatus India', botdate, m, true)
}

handler.help = ['lofistatus1'] 
 handler.tags = ['vidiorandom'] 
 handler.command = /^(lofistatus1)$/i 

export default handler