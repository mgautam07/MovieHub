import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
// import { file } from 'googleapis/build/src/apis/file'

// Configuring .env file
dotenv.config();

// Connecting to db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("CONNECTED TO MONGODB\n")
  app.listen(3000 || process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:3000`)
  })
})
.catch((err) => console.log(err))

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/prime', (req, res) => {
  res.send('Hello prime!')
})

app.get('/netflix', (req, res) => {
  res.send('Hello netflix!')
})

app.listen(3000 || process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:3000`)
})