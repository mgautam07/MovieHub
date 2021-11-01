import { google } from 'googleapis'

const service = google.youtube({
    version: 'v3',
    auth: process.env.API_KEY
  })
  
async function main()
{
const res = await service.playlistItems.list({
    "part": "snippet",
    "maxResults": 10,
    "playlistId": process.env.NETFLIX
}, (err, res)=>{

    const data = res.data.items
    const regex = / Official Trailer \|/ 
    // const regexAbout = /About|ABOUT/ 

    const regexAbout = /About|ABOUT|SUBSCRIBE/ 


    const regexDate = /[A N M J F S O D][a-z]*[\-/ \.]\d+|\d+[st nd rd th]{2} [A N M J F S O D]{1}[a-z]*/

    data.forEach(el => {
    el = el.snippet
    if (el.title.search(regex) != -1) {
        let title = el.title.split(regex)
        
        // const desc = el.description.split("About Prime Video")
        
        let len = title[0].length
        title[0] = title[0].substr(0, len - 2)
        console.log("Title - " + title[0])

        const desc = el.description.split(regexAbout)
        if (el.title.search("https") != -1) {
        desc = desc.split("https")
        }
        console.log("Description - " + desc[0])

        const date = desc[0].match(regexDate)
        if (date) {
        console.log("\nDate - " + date)
        }

        console.log("Thumbnail - " + el.thumbnails.medium.url)
        console.log("\n\n")
    }
    });
})
}


app.listen(3000 || process.env.PORT, () => {
console.log(`Example app listening at http://localhost:3000`)
main()
})