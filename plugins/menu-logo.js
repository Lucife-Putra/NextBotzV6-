/*
 * Jangan Di Hapus!!
 * 
 * Creator @KingOfBear
 *
 * Youtubeku: https://youtu.be/pwLZpdfO8AU
 * 
 * Ingin tambah fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6288279268363
 * 
 */
 
import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
  let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let who = m.sender
const time = moment.tz('Asia/Jakarta').format('HH')
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let name = await conn.getName(m.sender)
  let runnya = `┏━━━ꕥ〔 Logo 〕ꕥ━⬣
┃✾ .agedetect (caption|reply media)
┃✾ .blackpinkk <text> 🅛
┃✾ .bonk 🅛
┃✾ .carbon 🅛
┃✾ .donaldtrumptweet <text> 🅛 🅟
┃✾ .graffiti-text5 <teks>
┃✾ .green-brush <teks>
┃✾ .green-fireworks <teks>
┃✾ .greenskin-snake <teks>
┃✾ .greeting-cards <teks>
┃✾ .greetingcard-birthday <teks>
┃✾ .greetingcard-birthday2 <teks>
┃✾ .halloween-fire <teks>
┃✾ .halloween-frankenstain <teks>
┃✾ .halloween-text <teks>
┃✾ .halloween-text2 <teks>
┃✾ .halloween-videocard <teks>
┃✾ .hand-love <teks>
┃✾ .hand-love2 <teks>
┃✾ .handwritten-foggyglass <teks>
┃✾ .happynewyear-firework <teks>
┃✾ .heart-cup <teks>
┃✾ .heart-flashlight <teks>
┃✾ .heart-wings <teks>
┃✾ .holographic-effect <teks>
┃✾ .horror-gift <teks>
┃✾ .icecream-chocolate <teks>
┃✾ .jean-text-effect <teks>
┃✾ .jewel-effect <teks>
┃✾ .joker <teks>
┃✾ .kahlii-arena-of-valor <teks>
┃✾ .kaisa-league-of-legends <teks>
┃✾ .leaves-text <teks>
┃✾ .lend-effect <teks>
┃✾ .light-effect <teks>
┃✾ .light-neonsign <teks>
┃✾ .lightfuturistic-technology <teks>
┃✾ .lightning-pubg-video <teks>
┃✾ .lol-fiora <teks>
┃✾ .lol-master-yi <teks>
┃✾ .lol-notice <teks>
┃✾ .lol-zed <teks>
┃✾ .luxury-gold <teks>
┃✾ .magic-effect <teks>
┃✾ .matrix <teks>
┃✾ .metal-darkgold <teks>
┃✾ .metal-eagle <teks>
┃✾ .metal-effect <teks>
┃✾ .metal-headshot <teks>
┃✾ .metal-lion <teks>
┃✾ .metal-logo <teks>
┃✾ .metal-star <teks>
┃✾ .metal-text <teks>
┃✾ .metallic-text <teks>
┃✾ .mganga-league-of-kings <teks>
┃✾ .minimal-logomaker <teks>
┃✾ .mobile-legends <teks>
┃✾ .modern-gold3 <teks>
┃✾ .modern-gold4 <teks>
┃✾ .modern-gold5 <teks>
┃✾ .modern-goldgreen <teks>
┃✾ .modern-goldpurple <teks>
┃✾ .modern-goldred <teks>
┃✾ .modern-goldred2 <teks>
┃✾ .modern-goldsliver <teks>
┃✾ .my-love <teks>
┃✾ .name-football <teks>
┃✾ .neon-brightblue <teks>
┃✾ .neon-devilwing <teks>
┃✾ .neon-satin <teks>
┃✾ .neon-valentine <teks>
┃✾ .neonlight-galaxy <teks>
┃✾ .newyear-greeting <teks>
┃✾ .newyear-greeting2 <teks>
┃✾ .newyear-greeting3 <teks>
┃✾ .ninja-mascot <teks>
┃✾ .orangeskin-snake <teks>
┃✾ .paper-cutou <teks>
┃✾ .paperclip-quote <teks>
┃✾ .papercut-effect <teks>
┃✾ .personalized-christmas <teks>
┃✾ .personalized-queen <teks>
┃✾ .pikachu <teks>
┃✾ .project-yasuo <teks>
┃✾ .pubg-birthdaycake <teks>
┃✾ .pubg-maker <teks>
┃✾ .pubg-maker2 <teks>
┃✾ .pubg-maker3 <teks>
┃✾ .pubg-maker4 <teks>
┃✾ .purple-effect <teks>
┃✾ .rainbow-glow <teks>
┃✾ .realistic-cloud <teks>
┃✾ .realistic-embroidery <teks>
┃✾ .redhot-metal <teks>
┃✾ .redhot-metal2 <teks>
┃✾ .resht-league-of-kings <teks>
┃✾ .road-paint <teks>
┃✾ .romantic-valentine <teks>
┃✾ .rooster <teks>
┃✾ .round-thunder <teks>
┃✾ .sandsummer-beach	 <teks>
┃✾ .sandsummer-beach2 <teks>
┃✾ .signature <teks>
┃✾ .skull-videomaker <teks>
┃✾ .snake-text <teks>
┃✾ .snow-text <teks>
┃✾ .stars-night <teks>
┃✾ .status-life <teks>
┃✾ .status-life2 <teks>
┃✾ .status-life3 <teks>
┃✾ .status-love <teks>
┃✾ .status-love2 <teks>
┃✾ .status-mood <teks>
┃✾ .status-mood2 <teks>
┃✾ .status-mood3 <teks>
┃✾ .status-mood4 <teks>
┃✾ .storm-trooper <teks>
┃✾ .summerysand <teks>
┃✾ .sunflower-birthdaycake <teks>
┃✾ .sunlight-shadow <teks>
┃✾ .tattoo-body <teks>
┃✾ .tattoo-body2 <teks>
┃✾ .tattoo-girl <teks>
┃✾ .tattoo-hand2 <teks>
┃✾ .text-christmas <teks>
┃✾ .text-effectcolor <teks>
┃✾ .text-leaves <teks>
┃✾ .text-party <teks>
┃✾ .text-rain <teks>
┃✾ .text-wall <teks>
┃✾ .tiger <teks>
┃✾ .traveling-bear <teks>
┃✾ .typography-leaves <teks>
┃✾ .typography-leavesautumn <teks>
┃✾ .typography-maker <teks>
┃✾ .typography-maker2 <teks>
┃✾ .typography-maker3 <teks>
┃✾ .underwater-text <teks>
┃✾ .valentine-day <teks>
┃✾ .video-greeting-cards <teks>
┃✾ .violet-league-of-kings <teks>
┃✾ .wallpaper-moblie <teks>
┃✾ .water-3d <teks>
┃✾ .water-effect <teks>
┃✾ .water-effect2 <teks>
┃✾ .watercolor-effect <teks>
┃✾ .wedding-silver <teks>
┃✾ .wet-glass <teks>
┃✾ .wings-effect <teks>
┃✾ .women-day <teks>
┃✾ .yasuo <teks>
┃✾ .yellowskin-snake <teks>
┃✾ .yena-arena-of-valor <teks>
┃✾ .1917 <teks>
┃✾ .3d-crack-text-effect-online <teks>
┃✾ .3d-underwater <teks>
┃✾ .3d-wood <teks>
┃✾ .3damerican-flag <teks>
┃✾ .3dglue-realistic <teks>
┃✾ .3dgradient <teks>
┃✾ .3dgradient2 <teks>
┃✾ .3dmetal-effect <teks>
┃✾ .3dmetal-text- <teks>
┃✾ .3dmulticolor-papercut <teks>
┃✾ .3dpig-gif <teks>
┃✾ .3druby-stone <teks>
┃✾ .3dsand-engraved <teks>
┃✾ .3dshiny-metallic <teks>
┃✾ .3dsparkle-christmas <teks>
┃✾ .3dsub-zombie <teks>
┃✾ .3dtext-effect <teks>
┃✾ .3dtext-effect2 <teks>
┃✾ .3dtext-effect3 <teks>
┃✾ .3dtext-pig <teks>
┃✾ .3dvalentine-cards <teks>
┃✾ .3dxmas-cards <teks>
┃✾ .3dxmas-cards2 <teks>
┃✾ .83day-card <teks>
┃✾ .83day-card2 <teks>
┃✾ .83day-card3 <teks>
┃✾ .83day-card4 <teks>
┃✾ .advanced-glow <teks>
┃✾ .ahri-league-of-legends <teks>
┃✾ .alice-league-of-kings <teks>
┃✾ .amily-arena-of-valor <teks>
┃✾ .angels-wings <teks>
┃✾ .anonymous-neon <teks>
┃✾ .art-shader <teks>
┃✾ .zzenka-league-of-kings <teks>
┃✾ .balloon-noel <teks>
┃✾ .bats-halloween <teks>
┃✾ .bear2 <teks>
┃✾ .bee <teks>
┃✾ .birthday-cake <teks>
┃✾ .birthday-cake10 <teks>
┃✾ .birthday-cake2 <teks>
┃✾ .birthday-cake3 <teks>
┃✾ .birthday-cake4 <teks>
┃✾ .birthday-cake5 <teks>
┃✾ .birthday-cake6 <teks>
┃✾ .birthday-cake7 <teks>
┃✾ .birthday-cake8 <teks>
┃✾ .birthday-cake9 <teks>
┃✾ .birthday-cards <teks>
┃✾ .birthdayfoil-balloon <teks>
┃✾ .blackpink <teks>
┃✾ .blackskin-snake <teks>
┃✾ .blood-frosted <teks>
┃✾ .blood-steel <teks>
┃✾ .blood-text <teks>
┃✾ .blood-text2 <teks>
┃✾ .blood-wall <teks>
┃✾ .blue-effect <teks>
┃✾ .blue-neon <teks>
┃✾ .bokeh-text <teks>
┃✾ .boom-comic <teks>
┃✾ .broken-glass <teks>
┃✾ .bulb-effect <teks>
┃✾ .cake-text <teks>
┃✾ .cake-text2 <teks>
┃✾ .cake-text3 <teks>
┃✾ .candy-text <teks>
┃✾ .card-christmas <teks>
┃✾ .card-christmas2 <teks>
┃✾ .cartoon-graffiti <teks>
┃✾ .christmas-snow <teks>
┃✾ .christmas-tree <teks>
┃✾ .christmasball-ornaments <teks>
┃✾ .circle-mascot-team <teks>
┃✾ .cloth-effect <teks>
┃✾ .cloud-sky <teks>
┃✾ .clouds-sky <teks>
┃✾ .color-fireworks <teks>
┃✾ .colorful-angelwing <teks>
┃✾ .cool-metal <teks>
┃✾ .cute-girl-gamer <teks>
┃✾ .cute-typography <teks>
┃✾ .dance-effect <teks>
┃✾ .dancing-santaclaus <teks>
┃✾ .darkgreen-typography <teks>
┃✾ .darth-vader <teks>
┃✾ .decorated-cookie <teks>
┃✾ .decorated-cookie <teks>
┃✾ .deluxe-silver <teks>
┃✾ .dinamo-effect <teks>
┃✾ .double-exposure <teks>
┃✾ .dragon-fire <teks>
┃✾ .equalizer-effect <teks>
┃✾ .equalizer-blue <teks>
┃✾ .eraser-effect <teks>
┃✾ .evelynn-league-of-legends <teks>
┃✾ .fabric-effect <teks>
┃✾ .fabric-effect2 <teks>
┃✾ .facebook-gold-play-button <teks>
┃✾ .facebook-silver-play-button <teks>
┃✾ .firework-effect <teks>
┃✾ .firework-effect2 <teks>
┃✾ .flower-card <teks>
┃✾ .flower-effect <teks>
┃✾ .football-club2 <teks>
┃✾ .fps-game <teks>
┃✾ .fun-certify <teks>
┃✾ .fun-certify2 <teks>
┃✾ .galaxy-angel <teks>
┃✾ .galaxy-angelwings <teks>
┃✾ .galaxy-effect <teks>
┃✾ .galaxy-effect2 <teks>
┃✾ .galaxy-text <teks>
┃✾ .galaxy-text2 <teks>
┃✾ .galaxy-text3 <teks>
┃✾ .galaxy-text4 <teks>
┃✾ .galaxy-text5 <teks>
┃✾ .galaxyangel-wings <teks>
┃✾ .gankk-league-of-kings <teks>
┃✾ .gemstone-effect <teks>
┃✾ .glitter-gold <teks>
┃✾ .glossy-carbon <teks>
┃✾ .glowing-effect <teks>
┃✾ .gold-effect <teks>
┃✾ .gold-effect2 <teks>
┃✾ .gold-effect3 <teks>
┃✾ .gold-text <teks>
┃✾ .gold-text2 <teks>
┃✾ .golden-text <teks>
┃✾ .graffiti-text <teks>
┃✾ .graffiti-text2 <teks>
┃✾ .graffiti-text3 <teks>
┃✾ .graffiti-text4 <teks>
┃✾ .gta <text> 🅛 🅟
┃✾ .itssostupid 🅛
┃✾ .iss 🅛
┃✾ .stupid 🅛
┃✾ .logokaneki <text> 🅛
┃✾ .fflogo <text|text>
┃✾ .logololi <text> 🅛
┃✾ .logoneko <text|text> 🅛
┃✾ .logorem <text|text> 🅛
┃✾ .sadboylogo <text|text> 🅛
┃✾ .hartatahtacustom <text> 🅛
┃✾ .htc <text> 🅛
┃✾ .underwater <text>
┃✾ .wolflogo <text|text>
┃✾ .logoglass <text>
┗━━━━━━━━━ꕥ
  let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
 await conn.sendButton(m.chat, `${wish()} ${name}`,runnya + '\n\n' + wm + '\n\n' + botdate, thumb, [['JANGAN SPAM KAK','.owner']], m, {
  'document':{'url':'https://youtu.be/dTNrtQagzmc'},
'mimetype':global.dpdf,
'fileName':'「 ᴹᴿ᭄ PutraModz ×፝֟͜× 」',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'previewType':'pdf',
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://youtu.be/dTNrtQagzmc',
                        mediaType: 2,
                        description: `⚘ ᴄʀᴇᴀᴛᴇ ᴹᴿ᭄ PutraModz ×፝֟͜×`,
                        title: `💌 My Ultah: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `⚘ by ᴹᴿ᭄ PutraModz ×፝֟͜×`,          previewType: 0,
                        thumbnail: await (await fetch(thumb)).buffer(),
                        mediaUrl: 'https://youtu.be/dTNrtQagzmc'
                        
                      }}
})
 let vn = `https://github.com/saipulanuar/Api-Github/raw/main/audio/script.mp3`
  conn.sendFile(m.chat, vn, 'Fangz.Ganz', null, m, true, {
type: 'audioMessage',
ptt: true })
}


handler.help = ['logolist <teks>', 'logo <teks>']
handler.tags = ['premium', 'logo']
handler.command = /^(logolist|logo|listlogo|buatlogo)$/i
handler.premium = true

export default handler

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Selamat Malam🌃')
  }
  if (time >= 4) {
    wishloc = ('Selamat Pagi🌄')
  }
  if (time >= 12) {
    wishloc = ('Selamat Siang☀️')
  }
  if (time >= 16) {
    wishloc = ('️ Selamat Malam🌇')
  }
  if (time >= 23) {
    wishloc = ('Selamat Malam🌙')
  }
  return wishloc
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
