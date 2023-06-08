import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { Recoms } from './recoms.js'
import { Users } from './users.js'
import fetch from 'node-fetch'
import bcrypt from 'bcryptjs'
import cors from 'cors'
import { getLatest, getPrime, getNetflixOriginalsTV, getNowPlaying, getTrending, getUpcoming} from './functions.js'

// Configuring .env file
dotenv.config();
let trending
let nowPlaying
let upcoming
let netflixTV
let prime

mongoose.set('strictQuery', true);
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
app.use(cors());
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

app.get('/search/movie/:id', async (req, res) => {
  const movie = await (await fetch('https://api.themoviedb.org/3/movie/' +req.params.id+ '?api_key=' + process.env.MDB_API + '&language=en-US')).json()
  res.send(movie);
})

app.get('/search/tv/:id', async (req, res) => {
  const show = await (await fetch('https://api.themoviedb.org/3/tv/' +req.params.id+ '?api_key=' + process.env.MDB_API + '&language=en-US')).json()
  res.send(show);
})

app.get('/homesearch/:query', async(req, res) => {
  let movies = await fetch('https://api.themoviedb.org/3/search/movie?api_key=' + process.env.MDB_API + '&language=en-US&query='+ req.params.query +'&page=1&include_adult=true').then(m1 => {return m1.json()})
  let shows = await fetch('https://api.themoviedb.org/3/search/tv?api_key=' + process.env.MDB_API + '&language=en-US&query='+ req.params.query +'&page=1&include_adult=true').then(m1 => {return m1.json()})
  res.send({movies, shows})
})

app.post('/favorites/show', async(req, res) => {
  let movies = []
  for (let i = 0; i < req.body.favorites.length; i++) {
    let movie = await fetch('https://api.themoviedb.org/3/movie/' + req.body.favorites[i] + '?api_key=' + process.env.MDB_API + '&language=en-US').then(m1 => {return m1.json()})
    movies.push(movie)
  }
  res.send(movies)
})

app.post('/favorites/update', async(req, res) => {{
  Users.updateOne({username: req.body.username}, {$set: {favorites: req.body.favorites}}, function(err, res) {
    if (err) throw err
    console.log("1 document updated")
  })
  res.status(200)
  res.send()
}})

app.post('/register', async (req, res) =>{
  const user1 = await Users.findOne({
    username: req.body.username,
  })
  if (user1)
  {
    res.json({ found: true })
    res.send()
  }
  else{
    try {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          console.error(err)
          return
        }
        const user = new Users({
          username: req.body.username,
          email: req.body.email,
          password: hash
        })
        user.save()
        res.json({ username: req.body.username, found: false})
        res.status(201).send()
      })
    }
    catch {
      res.send(false)
    }
  }
})

app.post('/login', async (req, res) => {
  const user = await Users.findOne({
    username: req.body.username
  })
  if (user)
  {
    if (await bcrypt.compare( req.body.password, user.password)){
      res.json({exists: true, login: true, favorites: user.favorites})
    }
    else
      res.json({exists: true, login: false})    
  }
  else
    res.json({ exists: false, login: false})
  
  res.send()
})

app.post('/MovieRecommender', async (req, res) => {
  const recom1 = fetch('https://api.themoviedb.org/3/search/movie?api_key=' + process.env.MDB_API + '&language=en-US&query='+ req.body.movie1 +'&page=1&include_adult=true').then(m1 => {return m1.json()})
    const recom2 = fetch('https://api.themoviedb.org/3/search/movie?api_key=' + process.env.MDB_API + '&language=en-US&query='+ req.body.movie2 +'&page=1&include_adult=true').then(m1 => {return m1.json()})
    const recom3 = fetch('https://api.themoviedb.org/3/search/movie?api_key=' + process.env.MDB_API + '&language=en-US&query='+ req.body.movie3 +'&page=1&include_adult=true').then(m1 => {return m1.json()})
    const recom4 = fetch('https://api.themoviedb.org/3/search/movie?api_key=' + process.env.MDB_API + '&language=en-US&query='+ req.body.movie4 +'&page=1&include_adult=true').then(m1 => {return m1.json()})
    const recom5 = fetch('https://api.themoviedb.org/3/search/movie?api_key=' + process.env.MDB_API + '&language=en-US&query='+ req.body.movie5+'&page=1&include_adult=true').then(m1 => {return m1.json()})
    Promise.all([recom1, recom2, recom3, recom4, recom5])
    .then(files =>{
      let recom1res = fetch('https://api.themoviedb.org/3/movie/' + files[0].results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1').then(m1 => {return m1.json()}).catch(err => {console.log(err)});
      let recom2res = fetch('https://api.themoviedb.org/3/movie/' + files[1].results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1').then(m1 => {return m1.json()}).catch(err => {console.log(err)});
      let recom3res = fetch('https://api.themoviedb.org/3/movie/' + files[2].results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1').then(m1 => {return m1.json()}).catch(err => {console.log(err)});
      let recom4res = fetch('https://api.themoviedb.org/3/movie/' + files[3].results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1').then(m1 => {return m1.json()}).catch(err => {console.log(err)});
      let recom5res = fetch('https://api.themoviedb.org/3/movie/' + files[4].results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1').then(m1 => {return m1.json()}).catch(err => {console.log(err)});

      Promise.all([recom1res, recom2res, recom3res, recom4res, recom5res])
      .then((data) => {
            res.send(data);
      })
      .catch(err => {console.log(err)}); 
})})

app.listen(process.env.PORT || 3001, async () => {
  console.log(`App listening at http://localhost:3000`)
  trending = await getTrending();
  nowPlaying = await getNowPlaying();
  upcoming = await getUpcoming();
  prime = await getPrime()
  netflixTV = await getNetflixOriginalsTV();
})