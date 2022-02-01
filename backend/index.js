import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
// import cors from 'cors'
import { getLatest, getNetflixOriginalsMovies, getNetflixOriginalsTV, getTrending, getUpcoming } from './functions.js'

// Configuring .env file
dotenv.config();
let trending
let latest
let upcoming
let netflixMovies
let netflixTV

// Connecting to db

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log("CONNECTED TO MONGODB\n")
// })
// .catch((err) => console.log(err))


const app = express();

app.use(express.json());
// app.use(cors);

app.get('/', (req, res) => {
  res.send({latest, trending})
})

app.get('/upcoming', (req,res) => {
  res.send(upcoming);
})

app.get('/prime', (req, res) => {
  res.send('Hello prime!')
})

app.get('/netflix', (req, res) => {
  res.send({ netflixMovies, netflixTV})
})

app.listen(3000 || process.env.PORT, async () => {
  console.log(`Example app listening at http://localhost:3000`)
  trending = await getTrending();
  latest = await getLatest()
  upcoming = await getUpcoming()
  netflixMovies = await getNetflixOriginalsMovies()
  netflixTV = await getNetflixOriginalsTV()
  // console.log(data)
})