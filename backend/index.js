import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { getLatest } from './functions.js'

// Configuring .env file
dotenv.config();
let data
// Connecting to db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("CONNECTED TO MONGODB\n")
})
.catch((err) => console.log(err))


const app = express()

app.get('/', (req, res) => {
  res.send(data)
})

app.get('/prime', (req, res) => {
  res.send('Hello prime!')
})

app.get('/netflix', (req, res) => {
  res.send('Hello netflix!')
})

app.listen(3000 || process.env.PORT, async () => {
  console.log(`Example app listening at http://localhost:3000`)
  data = await getLatest();    
  console.log(data)
})