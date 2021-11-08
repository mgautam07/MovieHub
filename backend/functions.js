import dotenv from 'dotenv'
import fetch from 'node-fetch'

// Configuring .env file
dotenv.config();

export async function getTrending() {
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + process.env.MDB_API + '&language=en-US');
    return response.json();
}

export async function getLatest() {
    let response = []
    for (let i = 0; i < 10; i++) {
       response.push(await fetch('https://api.themoviedb.org/3/movie/latest/day?api_key=' + process.env.MDB_API)) 
    }
    return response;
}

export async function getUpcoming() {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=' + process.env.MDB_API + '&language=en-US');
    return response.json();
}

export async function getNetflixOriginalsMovies() {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.MDB_API + '&with_networks=213');
    return response.json();
}

export async function getNetflixOriginalsTV() {
    const response = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=' + process.env.MDB_API + '&with_networks=213');
    return response.json();
}

// export async function getNetflixOriginalsMovies() {
//     const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.MDB_API + '&with_networks=213');
//     return response.json();
// }

// export async function getNetflixOriginalsTV() {
//     const response = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=' + process.env.MDB_API + '&with_networks=213');
//     return response.json();
// }

// https://api.themoviedb.org/3/discover/movie?api_key=b06455dbf04e1988b5d26bd89ee42e00&language=en-US&sort_by=primary_release_date.desc&page=1&with_companies=420|19551|38679|2301|13252