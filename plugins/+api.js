/*
# elaina - UserBot
# Credit Sc Ori By ZeeoneOfc
# Subscribe Yt RflBotz Ofc
# This file is a part of < https://github.com/zeeoneofc/elaina/ >
*/ 

// WhatsApp api
require('../settings/config.js')
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
	
//module exports
const axios = require("axios")
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")  
const crypto = require('crypto')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg') 
const figlet = require('figlet')
const fs = require('fs')
const gis = require('g-i-s')
const hx = require('hxz-api')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const request = require('request')
const speed = require('performance-now')
const util = require('util')
const yts = require( 'yt-search')
const ytdl = require("ytdl-core")
const zee = require('api-alphabot')

//library
const { simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../lib/functions')
const { fetchJson, kyun, fetchText } = require('../lib/fetcher')
const { color, bgcolor } = require('../lib/color')
const { yta, ytv} = require('../lib/y2mate')
const simple = require('../lib/simple')
const { uploadImages } = require('../lib/uploadimage')

//json
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('../database/user/register.js')
const tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))
const siapakahaku = JSON.parse(fs.readFileSync('./src/siapakahaku.json'))
/*
# language
# available now [ind]
*/
const  { ind } = require(`./help`)
lang = ind 

//times
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')


module.exports = elaina = async (elaina, mek) => {
	try {
		if (!mek.hasNewMessage) return
		mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
		const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
		const type = Object.keys(mek.message)[0]        
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		const prefix = /^[ø=|~!#$%^&.?/\\^z+*@,;]/.test(cmd) ? cmd.match(/^[ø=|~!#$%^&.?/\\^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == "buttonsResponseMessage") && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const manti = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = elaina.user.jid
		const botNumberss = elaina.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? elaina.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const ownerNumber = [`${ownernumber}@s.whatsapp.net`] 
		const isOwner = mek.key.fromMe ? elaina.user.jid : ownerNumber.includes(sender)
		const totalchat = await elaina.chats.all()
		const groupMetadata = isGroup ? await elaina.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? elaina.user.jid : elaina.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? elaina.user.name : conts.notify || conts.vname || conts.name || '-'
        
        //apaya
		const isAntiLink = isGroup ? antilink.includes(from) : false
						
        
        //fake reply
			let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `${botname} \nBy ${ownername}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}},sendEphemeral: true}
      	  let fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: ` ${ownername}`,jpegThumbnail: thumbnail}}}
   	     let fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
	        let fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":` ${ownername}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${botname} \nBy ${ownername}`, 'jpegThumbnail': thumbnail}}}
			let fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": ` ${botname}`, 'jpegThumbnail': thumbnail}}}
			let fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": ` ${botname}`, 'jpegThumbnail': thumbnail}}}
			let fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":` ${ownername}`, "h": `Hmm`,'seconds': '99999', 'caption': ` ${ownername}`, 'jpegThumbnail': thumbnail}}}
			let floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': 'B826873620DD5947E683E3ABE663F263', 'participant':`0@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": botname , 'jpegThumbnail':thumbnail}}}}
			let fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': ` ${ownername}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumbnail, thumbnail: thumbnail,sendEphemeral: true}}}
		

		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            elaina.sendMessage(from, teks, text, {quoted:mek})
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? elaina.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : elaina.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sleep = async (ms) => {
				return new Promise(resolve => setTimeout(resolve, ms));
			}
			
        function bytesToSize(bytes) {
				return new Promise((resolve, reject) => {
					const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
					if (bytes === 0) return 'n/a';
					const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
					if (i === 0) resolve(`${bytes} ${sizes[i]}`);
					resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
					});
				};
			
			const checkLimit = (sender) => {
				let found = false
				for (let lmt of _limit) {
					if (lmt.id === sender) {
						let limitCounts = limitawal - lmt.limit
						if (limitCounts <= 0) return elaina.sendMessage(from,`Limit kamu sudah habis`, text,{ quoted: mek})
						elaina.sendMessage(from, lang.limitcount(isPremium, limitCounts), text, { quoted : mek})
						found = true
					}
				}
					if (found === false) {
						let obj = { id: sender, limit: 1 }
						_limit.push(obj)
						fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
						elaina.sendMessage(from, lang.limitcount(isPremium, limitCounts), text, { quoted : mek})
						}
					}
			const isLimit = (sender) =>{ 
				let position = false
				for (let i of _limit) {
					if (i.id === sender) {
						let limits = i.limit
						if (limits >= limitawal ) {
							position = true
							elaina.sendMessage(from, lang.limitend(pushname), text, {quoted: mek})
							return true
						} else {
							_limit
							position = true
						return false
						}
					}
				}
				if (position === false) {
					const obj = { id: sender, limit: 0 }
					_limit.push(obj)
					fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
					return false
					}
				}
				
				const limitAdd = (sender) => {
					if (isOwner && isPremium) {return false;}
					let position = false
					Object.keys(_limit).forEach((i) => {
						if (_limit[i].id == sender) {
							position = i
							}
						})
				if (position !== false) {
					_limit[position].limit += 1
					fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
					}
				}
				

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        elaina.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            
			const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
					}
				const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    elaina.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            const sendFileFromUrl = async (from, url, caption, mek, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return elaina.sendMessage(from, await getBuffer(url), video ,{caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4' ,quoted: mek})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return elaina.sendMessage(from, await getBuffer(url), document, {mimetype: 'application/pdf', caption: caption, mentions: men ? men : [], quoted: mek })
            }
            if(mime.split("/")[0] === "image"){
                return elaina.sendMessage(from, await getBuffer(url), image ,{ caption: caption, mentions: men ? men : [], quoted: mek})
            }
            if(mime.split("/")[0] === "video"){
                return elaina.sendMessage(from, await getBuffer(url), video, {caption: caption, mentions: men ? men : [], mimetype: 'video/mp4', quoted: mek})
            }
            if(mime.split("/")[0] === "audio"){
                return elaina.sendMessage(from, await getBuffer(url), audio, {caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg', quoted: mek })
            }
        }
				
				// send message button
				const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
					const buttonMessage = {
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 1,
						};
						elaina.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
					};
				const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
					them = gam1
					mediaxxaa = await elaina.prepareMessage(id, them, MessageType.location, {thumbnail: them})
					locmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						locationMessage: locmhan.message.locationMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 6
						}
						elaina.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
					them = vid1
					mediaxxaa = await elaina.prepareMessage(id, them, MessageType.video)
					vimhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						videoMessage: vimhan.message.videoMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 5
						}
						elaina.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const sendButImage = async(id, text1, desc1, vid1, but = [], options = {}) => {
					them = vid1
					mediaxxaa = await elaina.prepareMessage(id, them, MessageType.image, {thumbnail: Buffer.alloc(0)})
					imgmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						imageMessage: imgmhan.message.imageMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 4
						}
					elaina.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
				}
				
				// antilink
                if (manti.includes("://chat.whatsapp.com/")){
		        if (!(isGroup || isAntiLink || isGroupAdmins)) return
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        await elaina.sendMessage(from, `Hmm maap nih gua kick, dilarang share link di group ini`, text , {quoted: mek})
		        elaina.groupRemove(from, [kic]).catch((e)=>{reply(`Bot Harus Jadi Admin`)})
		        }

              // SIAPA AKU

                if (siapakahaku.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {

                jawaban = siapakahaku[sender.split('@')[0]]

                if (budy.toLowerCase() == jawaban) {

                    delete siapakahaku[sender.split('@')[0]]

                    sendButMessage(from, "Selamat Jawaban kamu benar!\n\n + Exp 500\n + Balance $10", ` ${botname} | ${ownername}`, [{"buttonId": `siapakahaku`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})

                    addBalance(sender, 10, balance)

                    addLevelingXp(sender, 500)

                    fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))

                } else {

                    reply2("Jawaban Salah!")

                }

            }
			//game 
			if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    sendButMessage(from, "Selamat  Jawaban kamu benar!", ` ${ownername}`, [{"buttonId": `.tebakgambar`,"buttonText": {"displayText": "Tebak Gambar"},"type": "RESPONSE"}], {quoted : mek})
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Salah!")
                }
            }
            
			colors = ['red', 'pink', 'white', 'black', 'blue', 'yellow', 'green']
			const iselaina = checkRegisteredUser(sender)
			const isPremium = premium.includes(sender) || isOwner
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			
		//console termux
		if(!(isCmd)){
			console.log(('|\x1b[1;33m MSG \x1b[1;33m|'), time, chalk.yellow(budy), 'from', chalk.green(pushname), 'args :', chalk.green(args.length), 'in', chalk.green(groupName? groupName : 'Private chat'))
		}
		if(!(isCmd || mek.key.fromMe)){
			console.log(('|\x1b[1;32m CMD \x1b[1;37m|'), time, chalk.green(command), 'from', chalk.green(pushname), 'args :', chalk.green(args.length), 'in', chalk.green(groupName? groupName : 'Private chat'))
		}
		
		if (!mek.key.fromMe && global.self === true) return
//colong aja bang, ingat jgn asal colong ntr sc lu error
switch (command) {
case 'menu': case 'help': case 'elaina':
if (!iselaina) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				sendButLocation(from, lang.menu(prefix, salam, pushname), ' ' + ownername, thumbnail, [{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1},{buttonId: '.infobot', buttonText:{displayText: 'Infobot'}, type: 1}], {quoted: mek})
				break
case 'infobot':
if (!iselaina) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply('Update bot selanjutnya silahkan cek YouTube RflBotz ofc')
break
case 'owner':{
if (!iselaina) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
		const ownerContact = [ownernumber, "", "", "", "", "", "", "", "", "", "" , "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
		let ini_list = []
		for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
			const vname = elaina.contacts[i] != undefined ? elaina.contacts[i].vname || elaina.contacts[i].notify : undefined
			ini_list.push({
				"displayName": `${ownername}`,
				"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
				})
				}
				hehe = await elaina.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: mek })
					elaina.sendMessage(from, `Nih Kak Contact Owner Ku, Cuma Sv Nomor Cewe Ya `, text, {quoted: hehe})
				}
break
case 'quotesimage':
get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`,  {method: 'get'}) 
await elaina.sendMessage(from, get_result, image, { quoted: mek })
break
case 'sticker':case 'stiker':case 'stickergif':case 'stikergif':case 'sgif':case 's':
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			const media = await elaina.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.webp')
			await ffmpeg(`./${media}`)
			.input(media)
			.on('start', function (cmd) {
				console.log(`Started : ${cmd}`)
				})
				.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					reply('Eror')
					})
			.on('end', function () {
				console.log('Finish')
				elaina.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
				fs.unlinkSync(media)
				fs.unlinkSync(ran)
				})
				.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(ran)
				} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
				const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				const media = await elaina.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.webp')
				await ffmpeg(`./${media}`)
				.inputFormat(media.split('.')[1])
				.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
						console.log(`Error : ${err}`)
						fs.unlinkSync(media)
						tipe = media.endsWith('.mp4') ? 'video' : 'gif'
						reply(` Gagal, pada saat mengkonversi ${tipe} ke stiker`)
						})
						.on('end', function () {
							console.log('Finish')
							elaina.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
							fs.unlinkSync(media)
							fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else  {
								reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`)
							}
					
             break
					
// download fix by zeeone
case 'ig': case 'igdl': 
	if (!q) return reply('Linknya?')
	if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.errorLink)
	let urlnya = q
	zee.Igdl(urlnya)
	.then(async(result) => {
		for(let i of result.medias){
			if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                    elaina.sendMessage(from,link,video,{thumbnail: Buffer.alloc(0), quoted: mek,caption: `Instagram   ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    elaina.sendMessage(from,link,image,{thumbnail: Buffer.alloc(0), quoted: mek,caption: `Instagram  ${i.type}`})                  
                }
            }
            }).catch((err) => reply(` Server eror`))
            
             break
case 'tiktok':
sendButLocation(from, 'Silahkan pilih media yang ingin kamu download', ' ' + ownername, thumbnail, [{buttonId: `.tiktokwm ${q}`, buttonText: {displayText: 'WM'}, type: 1},{buttonId: `.tiktoknowm ${q}`, buttonText:{displayText: 'NOWM'}, type: 1},{buttonId: `.tiktokmusic ${q}`, buttonText:{displayText: 'AUDIO'}, type: 1}], {quoted: mek})					
             break
case 'randommeme':
get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${lolkey}`,  {method: 'get'}) 
await elaina.sendMessage(from, get_result, image, { quoted: mek })
break
case 'memeindo':
get_result = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`,  {method: 'get'}) 
await elaina.sendMessage(from, get_result, image, { quoted: mek })
break
case 'darkjoke':
get_result = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`,  {method: 'get'}) 
await elaina.sendMessage(from, get_result, image, {quoted: mek, caption: 'Random Meme, Jangan Baper!!'})
break
case 'siapakahaku': case 'siapaaku':{
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), ` ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);

					if (siapakahaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")

                    let anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lolkey}`)

                    let result = anu[Math.floor(Math.random() * anu.length)]

                    let jawaban = `${result.jawaban}`

                    siapakahaku[sender.split('@')[0]] = jawaban.toLowerCase()

                    fs.writeFileSync("./src/siapakahaku.json", JSON.stringify(siapakahaku))

                    console.log(jawaban)

                    let tebakya = result.soal

                    elaina.sendMessage(from, tebakya + '\n\n Timeout : 120.00 seconds\n + Exp 500\n + Balance $10' , text, {quoted: mek})

                    await sleep(120000)

                    if (siapakahaku.hasOwnProperty(sender.split('@')[0])) {

                                elaina.sendMessage(from, " Waktu permainan habis " + '\n\n' +"* Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods

								delete siapakahaku[sender.split('@')[0]]

                        fs.writeFileSync("./src/siapakahaku.json", JSON.stringify(siapakahaku))

                    }

                    await gameAdd(sender, glimit)}
                    break
case 'tiktoknowm':   
			if (!q) return reply('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(lang.wait())
			let nowem = q
			zee.Ttdownloader(nowem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					noweem = await getBuffer(nowm)
					elaina.sendMessage(from,noweem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})
					})
				}).catch((err) => reply(`teLink tidak valid`))
             break 
case 'quotesanime':
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
quotes = quotes.result
quote = quotes.quote
char = quotes.character
anime = quotes.anime
episode = quotes.episode
reply(`_${quote}_\n\n*char: ${char}*\n*anime: ${anime} ${episode}*`)
break
case 'wallpaperanime':            
             buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/wallpaper?apikey=${lolkey}`)
             elaina.sendMessage(from, buffer, image, { quoted: mek })   
break
case 'tiktokwm':
			if (!q) return reply('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(lang.wait())
			let wem = args.join(' ')
			zee.Ttdownloader(wem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					weem = await getBuffer(wm)
					elaina.sendMessage(from,weem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})
					})
				}).catch((err) => reply(`Link tidak valid`))
             break 
case 'quotesislami':
anu = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${lolkey}`, {method: 'get'}) 
reply(`*Random Quotes Islami*\n${anu.result}`) 
break
case 'tiktokmusic': case 'tiktokaudio':  
			if (!q) return reply('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid Link')
			reply(lang.wait())
			let audi = q
			zee.Ttdownloader(audi)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
				.then(async (a) => {
					audnha = await getBuffer(audio)
					elaina.sendMessage(from,audnha , MessageType.document, {mimetype: 'audio/mp4',filename: `Tiktok Music.mp3`,quoted: mek})
					})
				}).catch((err) => reply(`Link tidak valid`))
			
             break
case 'jadwaltv':
if (args.length == 0) return reply(`Nama Channel Nya Mana Tod\nContoh: ${prefix + command} SCTV`)
channel = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
for (var x in get_result) {
ini_txt += `${x} - ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'quotesdilan':
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
reply(quotedilan.result)
break
case 'faktaunik':
faktaunik = await fetchJson(`https://api.lolhuman.xyz/api/random/faktaunik?apikey=${lolkey}`)
reply(`*Taukah kamu ternyata*\n${faktaunik.result}`) 
break
case 'wikipedia':

if (args.length == 0) return reply(`Nama Yg Mau Di Cari Mana Kak\nContoh: ${prefix + command} Tahu`)

query = args.join(" ")

get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${lolkey}`)

get_result = get_result.result

reply(get_result)

break
case 'translate':

if (args.length == 0) return reply(`Teks Yg Mau Di Translate Mana Kak\nContoh: ${prefix + command} en Good Morning`)

kode_negara = args[0]

args.shift()

ini_txt = args.join(" ")

get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/id?apikey=${lolkey}`)
get_result = get_result.result

init_txt = `From : ${get_result.from}\n`

init_txt += `To : ${get_result.to}\n`

init_txt += `Original : ${get_result.original}\n`

init_txt += `Translated : ${get_result.translated}\n`

init_txt += `Pronunciation : ${get_result.pronunciation}\n`

reply(init_txt)

break
case 'katabijak':
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${lolkey}`)
reply(anu.result)
break
case 'pinterest': 
			if(!q) return reply('Masukkan query')
            async function pinterestSearch(query) {
                    return new Promise((resolve, reject) => {
                        fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                            "headers": {
                                "accept": "application/json, text/javascript, */*, q=0.01",
                                "accept-language": "en-US,en;q=0.9",
                                "cache-control": "no-cache",
                                "pragma": "no-cache",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin",
                                "sec-gpc": "1",
                                "x-app-version": "9a236a4",
                                "x-pinterest-appstate": "active",
                                "x-requested-with": "XMLHttpRequest"
                            },
                            "referrer": "https://www.pinterest.com/",
                            "referrerPolicy": "origin",
                            "body": null,
                            "method": "GET",
                            "mode": "cors"
                        }).then((res) => res.json())
                            .then((json) => {
                                const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                                var result = [];
                                result.push({
                                    link: generatepin.images.orig.url
                                })
                                resolve(result)
                            }).catch(reject)
                    })
                }

                const pinterest = (query) => new Promise((resolve, reject) => {
                    pinterestSearch(query).then((data) => {
                        resolve({
                            status: 200,
                            image: data[0].link
                        })
                    }).catch(reject)
                })

                pinterest(q).then(async(res) => {
                	let we = await getBuffer(res.image)
              	  sendButImage(from,  lang.ok() , ` ${ownername}`,we, [{"buttonId": `.pinterest ${q}`,"buttonText": {"displayText": "Next"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
                   }).catch(async(err) => {
                    reply('Terjadi kesalahan')
                })
                
             break
case 'alquranaudio':
if (args.length == 0) return reply(`Nomor Surah Yg Mau Dicari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10`)
reply('Sabar Sedang Proses...')
surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
await elaina.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
break
case 'kisahnabi':
if (args.length == 0) return reply(`Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/muhammad?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat':
if (args.length == 0) return reply(`Nama Kotanya Mana\nContoh : ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/yogyakarta?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.imsak}\n`
ini_txt += `Isya : ${get_result.isya}`
reply(ini_txt)
break
case 'asmaulhusna':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
reply(ini_txt)
break
case 'listsurah':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'play': case 'song':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu_`)
			var srch = args.join(' ')
			aramas = await yts(srch);
			aramat = aramas.all 
			var mulaikah = aramat[0].url
			try {
				zee.Youtube(mulaikah).then(async (data) => {
					if (Number(data.medias[7].formattedSize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*----  PLAY MUSIC ----*
						
 Title : ${aramas.videos[0].title}
 ID : ${aramas.videos[0].videoId}
 Upload : ${aramas.videos[0].ago}
 Size : ${data.medias[7].formattedSize}
 Views: ${aramas.videos[0].views} 
 Duration : ${aramas.videos[0].timestamp}
 Url : ${aramas.videos[0].url}`
var thumbyt = await getBuffer(aramas.videos[0].thumbnail)
sendButLocation(from, captions, ' ' + ownername, thumbyt, [{buttonId: `.ytmp4 ${mulaikah}`, buttonText: {displayText: 'Video'}, type: 1},{buttonId: `.ytmp3 ${mulaikah}`, buttonText:{displayText: 'Audio'}, type: 1}], {quoted: mek})
						})
				} catch (err) {
					reply('Terjadi kesalahan')
					}
			
             break
//group
case 'daftar': case 'verify': case 'verif':
			if (iselaina) return  reply(lang.regis())
			try {
					ppregis = await elaina.getProfilePicture(sender)
				} catch {
					ppregis = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			const serialUser = createSerial(20)
			await addRegisteredUser(sender.split('@')[0] + '@s.whatsapp.net', pushname, time, serialUser)
			await sendButImage(from, lang.daftar(sender, pushname, time, serialUser, _registered), ` ${botname}`,await getBuffer(ppregis), [{buttonId: '.menu',buttonText: {displayText: `MENU`,},type: 1,}], {thumbnail: Buffer.alloc(0), quoted : mek})
break
case 'antilink':
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Telah di aktifkan sebelumnya')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply(` Berhasil mengaktifkan ${command}`)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Udh mati')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply(` Berhasil mematikan ${command}`)
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break		
case 'memegenerator': case 'memegen':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
									   var mediiia = await elaina.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediiia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										elaina.sendMessage(from, resu, image, {caption:'.stikerin bang', thumbnail: Buffer.alloc(0), quoted: mek})
										fs.unlinkSync(mediiia)
										} catch (e) {
											reply(lang.err())
											console.log(e)
										}
										}
									break
					 	case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':{
						if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* Alphabot`)
									if (q.includes('|')) return reply(`Kirim perintah *${prefix + command}* Alphabot`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks2 = args.join(' ')
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
										var mediia = await elaina.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediia)
										var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
										sendStickerFromUrl(from,`${resu}`)	
										} catch (e) {
											reply(lang.err())
											console.log(e)
										}
										}
									break	
case 'leave':
			if (!isGroup) return reply(lang.group())
			if (!isOwner) return reply(lang.owner(botname))
			setTimeout( () => {
			elaina.groupLeave(from) 
			}, 2000)
			setTimeout( () => {
			elaina.sendMessage(from, 'Sayonara', text)
			}, 0)
	 				break
case 'bot':
if (!iselaina) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sound = fs.readFileSync('Sound/bott.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
sound = fs.readFileSync('Sound/soundultah.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound1':
sound = fs.readFileSync('Sound/sound1.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound2':
sound = fs.readFileSync('Sound/sound2.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound3':
sound = fs.readFileSync('Sound/sound3.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound4':
sound = fs.readFileSync('Sound/sound4.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound5':
sound = fs.readFileSync('Sound/sound5.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound6':
sound = fs.readFileSync('Sound/sound6.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound7(':
sound = fs.readFileSync('Sound/sound7.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound8':
sound = fs.readFileSync('Sound/sound8.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound9':
sound = fs.readFileSync('Sound/sound9.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound10':
sound = fs.readFileSync('Sound/sound10.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound11':
sound = fs.readFileSync('Sound/sound11.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound12':
sound = fs.readFileSync('Sound/sound12.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound13':
sound = fs.readFileSync('Sound/sound13.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound14':
sound = fs.readFileSync('Sound/sound14.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound15':
sound = fs.readFileSync('Sound/sound15.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound16':
sound = fs.readFileSync('Sound/sound16.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound17':
sound = fs.readFileSync('Sound/sound17.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound18':
sound = fs.readFileSync('Sound/sound18.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound19':
sound = fs.readFileSync('Sound/sound19.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound20':
sound = fs.readFileSync('Sound/sound20.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound21':
sound = fs.readFileSync('Sound/sound21.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound22':
sound = fs.readFileSync('Sound/sound22.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound23':
sound = fs.readFileSync('Sound/sound23.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound24':
sound = fs.readFileSync('Sound/sound24.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound25':
sound = fs.readFileSync('Sound/sound25.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound26':
sound = fs.readFileSync('Sound/sound26.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound27':
sound = fs.readFileSync('Sound/sound27.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound28':
sound = fs.readFileSync('Sound/sound28.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound29':
sound = fs.readFileSync('Sound/sound29.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound30':
sound = fs.readFileSync('Sound/sound30.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound31':
sound = fs.readFileSync('Sound/sound31.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound32':
sound = fs.readFileSync('Sound/sound32.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound33':
sound = fs.readFileSync('Sound/sound33.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound34':
sound = fs.readFileSync('Sound/sound34.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound35':
sound = fs.readFileSync('Sound/sound35.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound36':
sound = fs.readFileSync('Sound/sound36.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound37':
sound = fs.readFileSync('Sound/sound37.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound38':
sound = fs.readFileSync('Sound/sound38.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound39':
sound = fs.readFileSync('Sound/sound39.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound40':
sound = fs.readFileSync('Sound/sound40.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound41':
sound = fs.readFileSync('Sound/sound41.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound42':
sound = fs.readFileSync('Sound/sound42.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound43':
sound = fs.readFileSync('Sound/sound43.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound44':
sound = fs.readFileSync('Sound/sound44.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound45':
sound = fs.readFileSync('Sound/sound45.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound46':
sound = fs.readFileSync('Sound/sound46.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound47':
sound = fs.readFileSync('Sound/sound47.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound48':
sound = fs.readFileSync('Sound/sound48.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound49':
sound = fs.readFileSync('Sound/sound49.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound50':
sound = fs.readFileSync('Sound/sound50.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound51':
sound = fs.readFileSync('Sound/sound51.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound52':
sound = fs.readFileSync('Sound/sound52.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound53':
sound = fs.readFileSync('Sound/sound3/53.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound54':
sound = fs.readFileSync('Sound/sound54.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound55':
sound = fs.readFileSync('Sound/sound55.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound56':
sound = fs.readFileSync('Sound/sound56.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound57':
sound = fs.readFileSync('Sound/sound57.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound58':
sound = fs.readFileSync('Sound/sound58.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound59':
sound = fs.readFileSync('Sound/sound59.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound60':
sound = fs.readFileSync('Sound/sound60.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound61':
sound = fs.readFileSync('Sound/sound61.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound62':
sound = fs.readFileSync('Sound/sound62.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound63':
sound = fs.readFileSync('Sound/sound63.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound64':
sound = fs.readFileSync('Sound/sound64.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound65':
sound = fs.readFileSync('Sound/sound65.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound66':
sound = fs.readFileSync('Sound/sound66.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound67':
sound = fs.readFileSync('Sound/sound67.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound68':
sound = fs.readFileSync('Sound/sound68.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound69':
sound = fs.readFileSync('Sound/sound69.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound70':
sound = fs.readFileSync('Sound/sound70.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound71':
sound = fs.readFileSync('Sound/sound71.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound72':
sound = fs.readFileSync('Sound/sound72.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound73':
sound = fs.readFileSync('Sound/sound73.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound74':
sound = fs.readFileSync('Sound/sound74.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound75':
sound = fs.readFileSync('Sound/sound75.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound76':
sound = fs.readFileSync('Sound/sound76.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound77':
sound = fs.readFileSync('Sound/sound77.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound78':
sound = fs.readFileSync('Sound/sound78.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound79':
sound = fs.readFileSync('Sound/sound79.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound80':
sound = fs.readFileSync('Sound/sound80.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound81':
sound = fs.readFileSync('Sound/sound81.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound82':
sound = fs.readFileSync('Sound/sound82.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound83':
sound = fs.readFileSync('Sound/sound83.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound84':
sound = fs.readFileSync('Sound/sound84.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound85':
sound = fs.readFileSync('Sound/sound85.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound86':
sound = fs.readFileSync('Sound/sound86.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound87':
sound = fs.readFileSync('Sound/sound87.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound88':
sound = fs.readFileSync('Sound/sound88.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound89':
sound = fs.readFileSync('Sound/sound89.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound90':
sound = fs.readFileSync('Sound/sound90.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound91':
sound = fs.readFileSync('Sound/sound91.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound92':
sound = fs.readFileSync('Sound/sound92.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound93':
sound = fs.readFileSync('Sound/sound93.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound94':
sound = fs.readFileSync('Sound/sound94.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound95':
sound = fs.readFileSync('Sound/sound95.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound96':
sound = fs.readFileSync('Sound/sound96.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound97':
sound = fs.readFileSync('Sound/sound97.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound98':
sound = fs.readFileSync('Sound/sound98.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound99':
sound = fs.readFileSync('Sound/sound99.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound100':
sound = fs.readFileSync('Sound/sound100.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound101':
sound = fs.readFileSync('Sound/sound101.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound102':
sound = fs.readFileSync('Sound/sound102.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound103':
sound = fs.readFileSync('Sound/sound103.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound104':
sound = fs.readFileSync('Sound/sound104.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound105':
sound = fs.readFileSync('Sound/sound105.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound106':
sound = fs.readFileSync('Sound/sound106.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound107':
sound = fs.readFileSync('Sound/sound107.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound108':
sound = fs.readFileSync('Sound/sound108.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound109':
sound = fs.readFileSync('Sound/sound109.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound110':
sound = fs.readFileSync('Sound/sound110.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound111':
sound = fs.readFileSync('Sound/sound111.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound112':
sound = fs.readFileSync('Sound/sound112.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound113':
sound = fs.readFileSync('Sound/sound113.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound114':
sound = fs.readFileSync('Sound/sound114.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound115':
sound = fs.readFileSync('Sound/sound115.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound116':
sound = fs.readFileSync('Sound/sound116.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound117':
sound = fs.readFileSync('Sound/sound117.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound118':
sound = fs.readFileSync('Sound/sound118.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'sound119':
sound = fs.readFileSync('Sound/sound119.mp3')
elaina.sendMessage(from, sound, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: false})
break
case 'hidetag':
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			var value = q
			var group = await elaina.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map( async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var options = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			elaina.sendMessage(from, options, text)
			break
case 'linkgrup':case 'linkgroup': case 'linkgc':
			if (!isGroup) return reply(lang.group())
			linkgc = await elaina.groupInviteCode(from)
			yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
			elaina.sendMessage(from, yeh, text, { quoted: mek })
			break  
case 'covidglobal':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break
case 'covidindo':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break
case 'infogempa':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Lokasi : ${get_result.lokasi}\n`
ini_txt += `Waktu : ${get_result.waktu}\n`
ini_txt += `Potensi : ${get_result.potensi}\n`
ini_txt += `Magnitude : ${get_result.magnitude}\n`
ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
ini_txt += `Koordinat : ${get_result.koordinat}`
get_buffer = await getBuffer(get_result.map)
await elaina.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_txt })
break
case 'cuaca':
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} Temanggung`)
daerah = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Tempat : ${get_result.tempat}\n`
ini_txt += `Cuaca : ${get_result.cuaca}\n`
ini_txt += `Angin : ${get_result.angin}\n`
ini_txt += `Description : ${get_result.description}\n`
ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
ini_txt += `Suhu : ${get_result.suhu}\n`
ini_txt += `Udara : ${get_result.udara}\n`
ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
await elaina.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
reply(ini_txt)
break
case 'tagall':
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			members_id = []
			taga = (args.length > 1) ? body.slice(8).trim() : ''
			taga += '\n\n'
			for (let mem of groupMembers) {
				taga += ` @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
			}
			mentions(taga, members_id, true)
			break 
case 'setname':
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					await elaina.groupUpdateSubject(from, `${q}`)
					elaina.sendMessage(from, `Sukses Mengubah Nama Grup Menjadi ${q}`, text, { quoted: mek })
			break          
case 'setdesc': case 'setdesk':
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					await elaina.groupUpdateDescription(from, `${q}`)
					elaina.sendMessage(from, `Sukses Mengubah Desk Grup Menjadi ${q}`, text, { quoted: mek })
			break   
case 'mangasearch':
if (args.length == 0) return reply(`Nama Anime Nya Mana Kak\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Chapters : ${get_result.chapters}\n`
ini_txt += `Volume : ${get_result.volumes}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await elaina.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
break
case 'joingrup':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            hen = args[0]
		            if (!q) return reply('Masukan link group')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return reply ('pastikan link sudah benar!')
		            var response = await elaina.acceptInvite(codeInvite)
		            reply('```SUKSES JOIN GRUP```')
		            } catch {
		            reply('```LINK ERROR!```')
		            }
		            break
case 'animesearch':
if (args.length == 0) return reply(`Nama Anime Nya Mana Kak\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Episodes : ${get_result.episodes}\n`
ini_txt += `Duration : ${get_result.duration} mins.\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Season : ${get_result.season}\n`
ini_txt += `Season Year : ${get_result.seasonYear}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await elaina.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
break
case 'charactersearch':
if (args.length == 0) return reply(`Nama Anime Nya Mana Kak\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Name : ${get_result.name.full}\n`
ini_txt += `Native : ${get_result.name.native}\n`
ini_txt += `Favorites : ${get_result.favourites}\n`
ini_txt += `Media : \n`
ini_media = get_result.media.nodes
for (var x of ini_media) {
ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
}
ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
thumbnail = await getBuffer(get_result.image.large)
await elaina.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
break
case 'sewabot':
if (!iselaina) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply('http://wa.me/62895410068780?text=Sewa+Bot') 		
break
case 'kick':
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
			if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
			var kickya = q.split('@')[1] + '@s.whatsapp.net'
			await elaina.groupRemove(from, [kickya])
			reply(`Succses kick target!`)
break
case 'bc': case 'broadcast':
			if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
			if (args.length === 0) return reply(`Kirim perintah *${prefix + command}* text`)
			var bcnya = await elaina.chats.all()
			if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			var  bcnya2 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			var bcnya3 = await elaina.downloadMediaMessage(bcnya2)
					for (let _ of bcnya) {
						elaina.sendMessage(_.jid, bcnya3, image, { caption: `*----  BROADCAST ----*\n\n${q}` })
						}
						reply('Sukses broadcast')
					} else {
						for (let _ of bcnya) {
							sendButLocation(_.jid, ' PESAN SIARAN \n\n' + q, ' ' + ownername, thumbnail, [{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1},{buttonId: '.infobot', buttonText:{displayText: 'Infobot'}, type: 1}], {quoted: mek})
							}
						reply('Sukses broadcast')
					}
					break      
case 'art':
case 'bts':
case 'exo':
case 'elf':
case 'loli':
case 'waifu':
case 'elaina':
case 'shota':
case 'husbu':
case 'kanna':
case 'sagiri':
case 'shinobu':
case 'megumin':
getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`).then((gambar) => {
elaina.sendMessage(from, gambar, image, { quoted: mek })
})
break
case 'nightcore':{
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await elaina.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						elaina.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })}
				  break      
case 'quotes':
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
quotes = quotes.result
author = quotes.by
quotes = quotes.quote
reply(`_${quotes}_\n\n* ${author}*`)
break
case 'ppcouple':
case 'ppcp': 
						anu = await fetchJson(`https://ziyy.herokuapp.com/api/ppcouple?apikey=xZiyy`) 
			cowo = await getBuffer(anu.result.cowo_image)
			elaina.sendMessage(from, cowo, image, {caption: 'Ini Untuk   *'})
       cewe = await getBuffer(anu.result.cewe_image)
		    pll = `Ini Untuk  **`
   sendButImage(from, pll, `RflBotz Ofc  2022`, cewe, [                      
          {
            buttonId: `${prefix}ppcouple`,
            buttonText: {
              displayText: `Next`,
            },
            type: 1,
          },
        ]);                 
                    break
case 'bass': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await elaina.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										elaina.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break    
case 'slowmo': case 'slow':{
								try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await elaina.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											uhh = fs.readFileSync(ran)
											elaina.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply('Error!')
												}  
											}
												
									break
case 'apakah':
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
elaina.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
break
case 'cekganteng':
ganteng = body.slice(1)
const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
const teng = gan[Math.floor(Math.random() * gan.length)]
elaina.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
break
case 'cekcantik':
cantik = body.slice(1)
const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
const tik = can[Math.floor(Math.random() * can.length)]
elaina.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
break
case 'hobby':
const kan =['Coli','baca buku','Tadi','ngeliat org mandi','Nonton bokep','sepedaan','Baca wattpad','belajar','Main discord','menabung']
const hooo = kan[Math.floor(Math.random() * kan.length)]
elaina.sendMessage(from, 'Pertanyaan : *hoby*\n\nJawaban : '+ hooo, text, { quoted: mek })
break
case 'bisakah':
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
elaina.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
break
case 'kapankah':
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
elaina.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
break
case 'robot':{
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await elaina.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										elaina.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
										}
									break
case 'vibra': case 'vibrato':{
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await elaina.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										elaina.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
										}
									break
case 'tupai':{
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await elaina.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											elaina.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration: 999099})
											fs.unlinkSync(ran)
											})
											 } catch (e) {	
												reply(mess.error)
												}  	
												}
												break
case 'fast':{
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await elaina.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											elaina.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply('Error!')
												}  
										}
									break
									case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
case 'tebaklirik':
anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${lolkey}`, {method: 'get'})
get = `*${anu.result.question}*`
setTimeout( () => {
elaina.sendMessage(from, 'Jawaban: '
+anu.result.answer, text, {quoted: mek}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
elaina.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
elaina.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
elaina.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
elaina.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
elaina.sendMessage(from, get, text, {quoted: mek})
}, 0) // 1000 = 1s,
break
case 'suit':
if (!q) return reply(`Kirim perintah ${prefix}suit [pilihan]\nContoh: ${prefix}suit gunting`)
if (!q.match(/batu|gunting|kertas/)) return reply(`Format salah!`)
if (q.match(/batu|gunting|kertas/)) {
await sleep(2000)
var computer = Math.random();
if (computer < 0.34) {
computer = 'batu';
} else if (computer >= 0.34 && computer < 0.67) {
computer = 'gunting';
} else {
computer = 'kertas';
}
if (q == computer) {
reply(`*Subscribe Yt RflBotz Ofc*\n\nPertandingan Seri!`)
} else if (q == 'batu') {
if (computer == 'gunting') {
reply(`*Subscribe Yt RflBotz Ofc*\n\n You: Batu\n Computer: Gunting\n\nCongrats You win!`)
} else {
reply(`*Subscribe Yt RflBotz Ofc*\n\n You: Batu\n Computer: Kertas\n\nYou lose:(`)
}
} else if (q == 'gunting') {
if (computer == 'batu') {
reply(`*Subscribe Yt RflBotz Ofc*\n\n You: Gunting\n Computer: Batu\n\nYou lose:(`)
} else {
reply(`*Subscribe Yt RflBotz Ofc*\n\n You: Gunting\n Computer: Kertas\n\nCongrats You win!`)
}
} else if (q == 'kertas') {
if (computer == 'batu') {
reply(`*Subscribe Yt RflBotz Ofc*\n\n You: Kertas\n Computer: Batu\n\nCongrats You win!`)
} else {
reply(`*Subscribe Yt RflBotz Ofc*\n\n You: Kertas\n Computer: Gunting\n\nYou lose:(`)
}
}
}
break
case 'tebakkalimat':
anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/kata?apikey=${lolkey}`, {method: 'get'})
get = `*${anu.result.pertanyaan}*`
setTimeout( () => {
elaina.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: mek})
}, 60000) // 1000 = 1s,
setTimeout( () => {
elaina.sendMessage(from, '_10 Detik lagi..._', text)
}, 50000) // 1000 = 1s,
setTimeout( () => {
elaina.sendMessage(from, '_20 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
elaina.sendMessage(from, '_30 Detik lagi..._', text)
}, 20000) // 1000 = 1s,
setTimeout( () => {
elaina.sendMessage(from, '_60 Detik lagi..._', text)
}, 2500) // 1000 = 1s,
setTimeout( () => {
elaina.sendMessage(from, get, text, {quoted: mek})
}, 0) // 1000 = 1s,
break
case 'toimg':{
		if (!isQuotedSticker) return reply('Reply stc nya!')
					reply(lang.wait())
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await elaina.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Eror')
					buffer = fs.readFileSync(ran)
					elaina.sendMessage(from, buffer, image, {quoted: mek, thumbnail:Buffer.alloc(0), caption: 'Done'})
					fs.unlinkSync(ran)
					})
					}
					break   
case 'nuliskiri':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./database/media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										elaina.sendMessage(from, fs.readFileSync('./database/media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'nuliskanan':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./database/media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										elaina.sendMessage(from, fs.readFileSync('./database/media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'foliokiri':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./database/media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										elaina.sendMessage(from, fs.readFileSync('./database/media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'foliokanan':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./database/media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										elaina.sendMessage(from, fs.readFileSync('./database/media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
									})
									}
									break
									case 'facebook': case 'fb': case 'fbdl': case 'facebookdl':{
	
                if(!q)return reply(`Example : ${prefix + command} link Facebook`)
                if (!q.includes('facebook.com') && !q.includes('fb.watch')) return reply('Itu bukan link Facebook')
                await reply(lang.wait())
try{
                zee.Facebook(`${q}`).then(async data => {
                    let txt = `*---- FACEBOOK DOWNLOADER ----*\n\n`
                    txt += `* Title :* ${data.title}\n`
                    txt += `* Type :* ${data.medias[0].extension}\n`
                    txt += `* Quality :* ${data.medias[0].quality}\n`
                    txt += `* Size HD:* ${data.medias[1].formattedSize}\n`
					txt += `* Url :* ${data.url}`
                    let ppfb = await getBuffer(data.medias[1].url)
                    elaina.sendMessage(from, ppfb, video, {mimetype:'video/mp4', quoted: mek, caption: txt})
             })} catch {
             	reply('Fitur sedang error')
} 
   }          
             break
   case 'soundcloud':	
                if(!q)return reply(`Example : ${prefix + command} link SoundCloud`)
                if (!q.includes('m.soundcloud.com')) return reply('Itu bukan link SoundCloud')
                await reply(lang.wait())
				zee.SoundCloud(`${q}`).then(async (data) => {
                    let txt = `*---- SOUNDCLOUD DOWNLOAD ----*\n\n`
                    txt += `* Title :* ${data.title}\n`
                    txt += `* Duration :* ${data.duration}\n`
					txt += `* Quality :* ${data.medias[1].quality}\n`
					txt += `* Ext :* ${data.medias[0].extension}\n`
                    txt += `* Size :* ${data.medias[0].formattedSize}\n`
                    txt += `* Url  :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar, sedang proses pengiriman...*`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    elaina.sendMessage(from , await getBuffer(data.medias[0].url), audio,{ quoted: mek, mimetype: 'audio/mp4' })
				})
			break
	case 'telesticker': case 'tstiker': {		
			if (!isGroup) return reply(lang.group())
			if (!q) return reply(`Contoh: ${prefix + command} *https://t.me/addstickers/geestickerpack*`)
			if (!q.includes('t.me')) return reply('Bukan link telegram stiker')
			var telestc = await zee.Telesticker(`${q}`)
			await reply(lang.wait())
			for (let i = 0; i < (telestc.length < 10 ? telestc.length : 10); i++) {
			elaina.sendMessage(from, await getBuffer(telestc[i].url), sticker, {mimetype:'image/webp',quoted: mek})
			}
		}
		break
case 'tebakgambar':
			if (!isGroup) return reply(lang.group())
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
hx.tebakgambar().then(async data =>{
	tebakya = await getBuffer(data[0].image)
jawaban = `${data[0].jawaban.replace('Jawaban ', '')}`
tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
console.log(jawaban)
elaina.sendMessage(from, tebakya, image, {quoted: mek, caption: "\n\nTimeout : 120.00 seconds" })
await sleep(120000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
elaina.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*Jawaban :*"  + '\n' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    })
					break   
case 'semoji': case'emoji':
			if (!isGroup) return reply(lang.group())
if (!q) return reply('emojinya?')
					qes = args.join(' ')
reply(lang.wait())
	emoji.get(`${qes}`).then(async emojii => {
					teks = `${emojii.images[4].url}`
					console.log(teks)
					//elaina.sendMessage(from, await getBuffer(teks), sticker, {mimetype:'image/webp',quoted: mek})
		  sendStickerFromUrl(from,`${teks}`)	
		
		})
		
		break
case 'ytmp3': {
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3* _Url YouTube_`)
			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link tidak valid!')
			var mulaikah = args.join(' ')
			await reply(lang.wait())
                zee.Youtube(mulaikah).then(async (data) => {
                    let txt = `*---- YOUTUBE AUDIO ----*\n\n`
                    txt += `* Quality :* ${data.medias[7].quality}\n`
                    txt += `* Type :* ${data.medias[7].extension}\n`
                    txt += `* Size :* ${data.medias[7].formattedSize}\n`
                    txt += `* Url Source :* ${data.url}\n\n`
                    txt += `_Mohon tunggu sebentar , uploading media..._`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[7].url, '', mek)
                })
                }
             break
case 'ytmp4': {
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3* _Url YouTube_`)
			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link tidak valid!')
			var mulaikah = args.join(' ')
			zee.Youtube(mulaikah).then(async (data) => {
                    let txt = `*---- YOUTUBE VIDEO ----*\n\n`
                    txt += `* Quality :* ${data.medias[1].quality}\n`
                    txt += `* Type :* ${data.medias[1].extension}\n`
                    txt += `* Size :* ${data.medias[1].formattedSize}\n`
                    txt += `* Url Source :* ${data.url}\n\n`
                    txt += `_Mohon tunggu sebentar , uploading media..._`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[1].url, '', mek)                    
                })
                }
             break                         
		default:
if (budy.startsWith('>')){
try {
	if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
return elaina.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`elainaBot :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;31m~\x1b[1;37m>', '[', '\x1b[1;32m EXC \x1b[1;37m', ']', time, chalk.green("=>"), 'from', chalk.green(pushname), 'args :', chalk.green(args.length))
} catch(e){
reply(String(e))
}
}                                               	
              }   
	
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', chalk.green(e))
        }
	}
}


	
    
