import dotenv from 'dotenv'
import fetch from 'node-fetch'

// Configuring .env file
dotenv.config();

export async function getLatest() {
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + process.env.MDB_API + '&language=en-US');
    return response.json();
}