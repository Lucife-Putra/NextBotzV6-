let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

  if (!args[0]) return m.reply(`Example : ${usedPrefix + command} choror|helo|banh
  *List Efek:*
 3dgalaxy-metal
3dgold
3drosegold
3dsilver
3dspace
3dstone
3dvintage
avengers
balloons-cards
balloons-love
classic8bit
cutegirl
floraltext
glitchtext
gradientlogo
horrortext
juventus
layeredtext
lion-mascot
marvel
metal-marvel
metal-molding
ninja-black&white
phtext
spider-man
thortext
tiktok
typography-greenleaf
wolf-black&white
wolf-galaxy`)
  
  let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let text2 = urut[2]
  
        let images = `https://violetics.pw/api/textpro/${thm}?apikey=beta&text=${text1}&text2=${text2}`
        let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
            }

handler.command = /^(textprox2|textpromex2)$/i

export default handler