import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { Recoms } from './recoms.js'
import fetch from 'node-fetch'
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
      // console.log(recom5);
      // console.log(files[0].results[0].id);
      // console.log(files[1].results[0].id);
      // console.log(files[2].results[0].id);
      // console.log(files[3].results[0].id);
      // console.log(files[4].results[0]);
      let recom1res = fetch('https://api.themoviedb.org/3/movie/' + files[0].results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1').then(m1 => {return m1.json()}).catch(err => {console.log(err)});
      let recom2res = fetch('https://api.themoviedb.org/3/movie/' + files[1].results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1').then(m1 => {return m1.json()}).catch(err => {console.log(err)});
      let recom3res = fetch('https://api.themoviedb.org/3/movie/' + files[2].results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1').then(m1 => {return m1.json()}).catch(err => {console.log(err)});
      let recom4res = fetch('https://api.themoviedb.org/3/movie/' + files[3].results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1').then(m1 => {return m1.json()}).catch(err => {console.log(err)});
      let recom5res = fetch('https://api.themoviedb.org/3/movie/' + files[4].results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1').then(m1 => {return m1.json()}).catch(err => {console.log(err)});

      Promise.all([recom1res, recom2res, recom3res, recom4res, recom5res])
      .then(
          (data) => {
            console.log(data[0].results);
            res.send(data[0].results, data[1].results, data[2].results, data[3].results, data[4].results);
          //     var x = data[0].results;
          // m.push(x.slice(0, 5));
          // x = data[1].results;
          // m.push(x.slice(0, 5));
          // x = data[2].results;
          // m.push(x.slice(0, 5));
          // x = data[3].results;
          // m.push(x.slice(0, 5));
          // x = data[4].results;
          // m.push(x.slice(0, 5));
      })
      // .then(() => {
      //   // console.log('m - ');
      //   })
      .catch(err => {console.log(err)}); 
})})


  // const dat = await recommendation(req.body);
  // console.log(dat);
  // res.send(dat);
  // recom.save()
  // .then((result) => {
  //   console.log(result)
  // })
// })

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