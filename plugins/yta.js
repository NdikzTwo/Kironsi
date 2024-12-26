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
let dat = await(await fetch(`${neNdikz}api/youtube?url=${args[0]}&type=audio&quality=128kbps&apikey=${neoapi}`)).json()
            let yt = dat.data
            let ytl = "https://youtube.com/watch?v="
            let dls = "Download audio succes ( V2 )"
            let ytthumb = await (await conn.getFile(yt.thumbnail)).data
            let doc = {
                audio: {
                    url: yt.url
                },
                mimetype: "audio/mp4",
                fileName: yt.filename,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        mediaType: 2,
                        mediaUrl: ytl + yt.id,
                        title: yt.title,
                        body: dls,
                        sourceUrl: ytl + yt.id,
                        thumbnail: ytthumb
                    }
                }
            }

            await conn.sendMessage(m.chat, doc, {
                quoted: m
            })

        }
//conn.sendFile(m.chat, hasil, '', wm, m)
handler.help = ["mp3", "a"].map(v => "yt" + v + ` *[url YouTube]*`)
handler.tags = ["downloader"]
handler.command = /^y((outube|tb)audio|(outube|tb?)mp3|utubaudio|taudio|ta)$/i
module.exports = handler