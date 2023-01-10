let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
let rol = `${htki} ROLE ${htka}

Your Role : ${user.role}

List Role = 

Bronze V
Bronze IV
Bronze III
Bronze II
Bronze I
Elite V
Elite IV
Elite III
Elite II
Elite I
Master V
Master IV
Master III
Master II
Master I
Grand Master V
Grand Master IV
Grand Master III
Grand Master II
Grand Master I
Epic V
Epic IV
Epic III
Epic II
Epic I
Legend V
Legend IV
Legend III
Legend II
Legend I
Mythic V
Mythic IV
Mythic III
Mythic II
Mythic I
Mythic Glory
EMERALD V
EMERALD IV
EMERALD III
EMERALD II
EMERALD I
THE EMERALD`
conn.reply(m.chat, rol, )
}
handler.command = ['role']

export default handler