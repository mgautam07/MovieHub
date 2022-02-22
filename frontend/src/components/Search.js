import {React, useEffect, useState} from 'react'
import './search.css'
import {useLocation} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from './cards/Card'
import axios from 'axios'

function Search() {

    const location = useLocation()
    const [movie, setMovie] = useState()

    useEffect(() => {
        // console.log(location.state.id)
        // console.log(location.state.type)
        // if (location.state.type === 'movie') {
            if (location.state.id){
            axios.get(`/search/tv/${location.state.id}`).then(result => {
                setMovie(result.data)
                // console.log(result.data)
                if (result.data.status_code === 34){
                axios.get(`/search/movie/${location.state.id}`).then(result => {
                    setMovie(result.data)
                    // console.log(result.data)
            })}
            })}
        // } else {
            
        // }
        
    }, [])

  return (
      // <Container>
      // <div>Search{location.state.id}</div>
    <Box sx={{ margin: 4 }}>
        <Grid container spacing={2}>
            <Grid item xs={10} s={9} md={9} lg={9}>
                <TextField fullWidth id="outlined-basic" placeholder="Seacrh" variant="outlined" margin="normal"/>
                {movie ? <Card movie={movie}/> : <></>}
            </Grid>
            <Grid item lg={3}>
                bot
            </Grid>
        </Grid>
    </Box>
  )
}

export default Search

{/* <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton> */}