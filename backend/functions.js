import dotenv from 'dotenv'
import fetch from 'node-fetch'

// Configuring .env file
dotenv.config();

export async function getTrending() {
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=' + process.env.MDB_API + '&language=en-US');
    return response.json();
}

export async function getLatest() {
    let response = []
    for (let i = 0; i < 10; i++) {
       response.push(await fetch('https://api.themoviedb.org/3/movie/latest/week?api_key=' + process.env.MDB_API + '&language=en-US')) 
    //    console.log(await fetch('https://api.themoviedb.org/3/movie/latest/day?api_key=' + process.env.MDB_API));
    }
    return response;
}

export async function getUpcoming() {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=' + process.env.MDB_API + '&language=en-US');
    return response.json();
}

// export async function getNetflixOriginalsMovies() {
//     const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.MDB_API + '&with_networks=213');
//     return response.json();
// }

export async function getNetflixOriginalsTV() {
    const response = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=' + process.env.MDB_API + '&language=en-US&with_networks=213');
    return response.json();
}

export async function getNowPlaying(pageNo = 1){
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=' + process.env.MDB_API + '&page='+ pageNo +'&region=us');
    return response.json();
}

export async function getPrime() {
    const response = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=' + process.env.MDB_API + '&language=en-US&with_networks=1024');
// https://api.themoviedb.org/3/discover/tv?api_key= &language=en-US&with_networks=1024
    return response.json();
}


    // .then(objects => {
        // let recom1res = fetch('https://api.themoviedb.org/3/movie/' + objects[0].results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1').then(m1 => {return m1.json()})
        // let recom2res = fetch('https://api.themoviedb.org/3/movie/' + objects[1].results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1').then(m1 => {return m1.json()})
        // let recom3res = fetch('https://api.themoviedb.org/3/movie/' + objects[2].results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1').then(m1 => {return m1.json()})
        // let recom4res = fetch('https://api.themoviedb.org/3/movie/' + objects[3].results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1').then(m1 => {return m1.json()})
        // let recom5res = fetch('https://api.themoviedb.org/3/movie/' + objects[4].results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1').then(m1 => {return m1.json()})
    // })
    // let movie = fetch('https://api.themoviedb.org/3/search/movie?api_key=' + process.env.MDB_API + '&language=en-US&query=' +'VENOM%202'+ '&page=1&include_adult=true')
    // .then(respose => {
    // return respose.json();}).catch(err => {console.log(err)});
    // var m1 = movie.then(
        // movie1 = fetch('https://api.themoviedb.org/3/movie/' + movie + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1', {
        // const recom1a = await fetch('https://api.themoviedb.org/3/movie/' + recom1a.results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1')
        // const recom1 = await fetch('https://api.themoviedb.org/3/search/movie?api_key=' + process.env.MDB_API + '&language=en-US&query=' + movies.movie1 +'&page=1&include_adult=true')
        // .then(respose => { return respose.json()})
        // .then(data => fetch('https://api.themoviedb.org/3/movie/' + data.results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1'))
        // .then(m1 => m1.json())
        // .then(dat => { movie1 = dat;
        //     console.log('movie1 - ', movie1)})
        // .catch(err => {console.log(err)});    
    // )
    // .then(movie1 = await fetch('https://api.themoviedb.org/3/search/movie?api_key=' + process.env.MDB_API + '&language=en-US&query=' + movies.movie1.replace(/\s/g, '%20') + '&page=1&include_adult=true'))
    // console.log(movie);
    // let movie = await fetch('https://api.themoviedb.org/3/search/movie?api_key=' + process.env.MDB_API + '&language=en-US&query=' + movies.movie1.replace(/\s/g, '%20') + '&page=1&include_adult=true').then((results) => {
    // var movie1 = await fetch('https://api.themoviedb.org/3/movie/' + movie.json().results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1');

    // console.log('bot : ',movie.json())
    // return movie.json();
    // movie = await fetch('https://api.themoviedb.org/3/search/movie?api_key=' + process.env.MDB_API + '&language=en-US&query=' + movies.movie2 + '&page=1&include_adult=true');
    // var movie2 = await fetch('https://api.thmoviedb.org/3/movie/' + movie.json().results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1');
    // movie = await fetch('https://api.themoviedb.org/3/search/movie?api_key=' + process.env.MDB_API + '&language=en-US&query=' + movies.movie3 + '&page=1&include_adult=true');
    // var movie3 = await fetch('https://api.themoviedb.org/3/movie/' + movie.json().results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1');
    // movie = await fetch('https://api.themoviedb.org/3/search/movie?api_key=' + process.env.MDB_API + '&language=en-US&query=' + movies.movie4 + '&page=1&include_adult=true');
    // var movie4 = await fetch('https://api.themoviedb.org/3/movie/' + movie.json().results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1');
    // movie = await fetch('https://api.themoviedb.org/3/search/movie?api_key=' + process.env.MDB_API + '&language=en-US&query=' + movies.movie5 + '&page=1&include_adult=true');
    // var movie5 = await fetch('https://api.themoviedb.org/3/movie/' + movie.json().results[0].id + '/recommendations?api_key=' + process.env.MDB_API + '&language=en-US&page=1');
    // movie1 = movie1.json().results
    // movie2 = movie2.json().results
    // movie3 = movie3.json().results
    // movie4 = movie4.json().results
    // movie5 = movie5.json().results
    // return({movie1, movie2, movie3, movie4, movie5});


// export async function getNetflixOriginalsTV() {
//     const response = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=' + process.env.MDB_API + '&with_networks=213');
//     return response.json();
// }
// marvel
// https://api.themoviedb.org/3/discover/movie?api_key=b06455dbf04e1988b5d26bd89ee42e00&language=en-US&sort_by=primary_release_date.desc&page=1&with_companies=420|19551|38679|2301|13252