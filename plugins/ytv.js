let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    if (!(args[0].includes('http://') || args[0].includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return m.reply(`Invalid Youtuber URL.`)
 //   if (!args[0]) throw `*• Example:* ${usedPrefix + command} https://youtu.be/xxxx`
    m.reply(wait)
const data = await axios.get(`${neNdikz}api/youtube?url=${args}&type=video&quality=720p&apikey=${neoapi}`)
        if (data.data.status == 403) return m.reply(data.data.message)
        let mp4 = data.data.data.url
        let cap = `${htki}  *PLAY YTDL* ${htka}
  
▢ *☃️Titel* : ${data.data.data.filename}
▢ *☃️ Ext* : mp4
▢ *☃️ Channel* : -
▢ *☃️ fileQuality* : ${data.data.data.quality}

KETIK .ytmp3 JIKA INGIN MENDOWNLOAD AUDIO
${dmenuf}
`
        conn.sendFile(m.chat, mp4, 'yt.mp4', `${cap}`, m)
            }
//conn.sendFile(m.chat, hasil, '', wm, m)
handler.help = ["mp3", "a"].map(v => "yt" + v + ` *[url YouTube]*`)
handler.tags = ["downloader"]
handler.command = /^y((outube|tb)audio|(outube|tb?)mp3|utubaudio|taudio|ta)$/i
module.exports = handler