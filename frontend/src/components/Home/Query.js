import {React, useState} from 'react'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardType2 from '../cards/CardType2'

import axios from 'axios'

function Query() {

  const [movies, setMovies] = useState([])
  const [shows, setShows] = useState([])
  
  const [search, setSearch] = useState('')
  const handleSearch = () => {
    axios.get(`https://moviehub-b6ca.onrender.com/homesearch/${search}`, { params: { query: search } })
    .then((result) => {
        setMovies(result.data.movies.results)
        setShows(result.data.shows.results)
        localStorage.setItem("searchResults", JSON.stringify(result))
    })
  }


  return (
    <>
        <Typography sx={{mt: 3, ml: 4}} gutterBottom variant="h4" color="secondary"> Search for a movie/show here</Typography>
        <Grid container spacing={2} sx={{mb:4}}>
            <Grid item xs={10} s={9} md={9} lg={9} sx={{ml: 4}}>
            <TextField fullWidth id="outlined-basic" placeholder="Seacrh" variant="outlined" margin="normal" onChange={(event) => {setSearch(event.target.value)}}/>
            </Grid>
            <Grid item>
            <Button variant="outlined" color="secondary" sx={{mt: 3}} onClick={handleSearch}>Seacrh</Button>
            </Grid>
        </Grid>

        <Typography sx={{ml : 4}} variant='h3' color="secondary"> Search result movies</Typography>
        <Grid container sx={{justifyContent: 'center', mb:7, mt : 3}} >
            {movies.map((now, index) => (
            <div key={'20'+index}>
                <CardType2 xs={10} md={4} lg={2} movie={now} index={index}/>
            </div>
            ))}
        </Grid>
        
        <Typography sx={{ml : 4}} variant='h3' color="secondary"> Search result shows</Typography>
        <Grid container sx={{justifyContent: 'center', mb:7, mt : 3}} >
            {shows.map((now, index) => (
            <div key={'20'+index}>
                <CardType2 xs={10} md={4} lg={2} movie={now} index={index}/>
            </div>
            ))}
        </Grid>
    </>
    
  )
}

export default Query