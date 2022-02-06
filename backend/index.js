import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { Recoms } from './recoms.js'
// import cors from 'cors'
import { getLatest, getPrime, getNetflixOriginalsTV, getNowPlaying, getTrending, getUpcoming, recommendation } from './functions.js'

// Configuring .env file
dotenv.config();
let trending
let nowPlaying
let upcoming
let netflixTV
let prime

// Connecting to db

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("CONNECTED TO MONGODB\n")
})
.catch((err) => console.log(err))


const app = express();

app.use(express.json());
// app.use(cors);
app.use(express.urlencoded({extended: true}));

app.get('/home', (req, res) => {
  res.send({nowPlaying, trending})
})

app.get('/trending', (req, res) => {
  res.send(trending);
})

app.get('/upcoming', (req,res) => {
  res.send(upcoming);
})

app.get('/prime', (req, res) => {
  res.send(prime)
})

app.get('/netflix', (req, res) => {
  res.send(netflixTV)
})

app.post('/recommendation', (req, res) => {
  // const recom = new Recoms(req.body);
  console.log(req.body);

  const dat = recommendation(req.body);
  // console.log(dat);
  // recom.save()
  // .then((result) => {
  //   console.log(result)
  // })
})

app.listen(3000 || process.env.PORT, async () => {
  console.log(`App listening at http://localhost:3000`)
  trending = await getTrending();
  nowPlaying = await getNowPlaying();
  upcoming = await getUpcoming();
  // netflixMovies = await getNetflixOriginalsMovies()
  prime = await getPrime()
  netflixTV = await getNetflixOriginalsTV();
  // console.log(data)
})