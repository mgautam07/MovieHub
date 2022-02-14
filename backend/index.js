import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { Recoms } from './recoms.js'
import { Users } from './users.js'
import fetch from 'node-fetch'
import bcrypt from 'bcryptjs'
// import cors from 'cors'
import { getLatest, getPrime, getNetflixOriginalsTV, getNowPlaying, getTrending, getUpcoming} from './functions.js'

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

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (!user.verifyPassword(password)) { return done(null, false); }
//       return done(null, user);
//     });
//   }
// ));

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

app.post('/register', async (req, res) =>{
  console.log(req.body.password);
  const user1 = await Users.findOne({
    username: req.body.username,
  })
  if (user1)
  {
    console.log('found', )
    res.json({ found: true })
    // res.json({ username: '', found: true })
    res.send()
  }
  else{
    try {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          console.error(err)
          return
        }
        console.log("user -> ", hash)
        const user = new Users({
          username: req.body.username,
          email: req.body.email,
          password: hash
        })
        console.log("user -> ", user)
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
  console.log(req.body.password, user.password)
  if (user)
  {
    console.log(await bcrypt.compare( req.body.password, user.password))
    if (await bcrypt.compare( req.body.password, user.password)){
      res.json({exists: true, login: true})
    }
    else
      res.json({exists: true, login: false})    
  }
  else
    res.json({ exists: false, login: false })
  
  res.send()
})

app.post('/MovieRecommender', async (req, res) => {
  // const recom = new Recoms(req.body);
  console.log(req.body);

  var m =[];
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
      .then(
          (data) => {
            res.send(data);
      })
      .catch(err => {console.log(err)}); 
})})

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