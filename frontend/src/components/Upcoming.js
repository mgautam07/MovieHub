import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CardType2 from './cards/CardType2'
import Grid from '@mui/material/Grid'
import { Typography, Button, Container } from '@mui/material'
import { lightBlue } from '@mui/material/colors'

const lblue = lightBlue[600]


function Upcoming() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios.get('/upcoming').then(result => { 
      // console.log(result.data.results);
      setMovie(result.data.results);
      return result.data.results; })
    // console.log(req.data);
  }, []);

  return(
      // <div className='cards'>
      //   {movie.map((move, index) => (
      //     <div key={index}>
      //       <Card movie={move} index={index}/>
      //     </div>
      //   ))}
      // </div>

      <>
        <Typography sx={{ml : 4, mt: 6}} variant='h3' color={lblue}>Upcoming Movies</Typography>
        <Grid container sx={{ justifyContent: 'center', mb:7, mt : 3}} >
          {movie.map((move, index) => (
            <div key={'10'+index}>
              <CardType2 sx={{ boxShadow: 5}} xs={10} md={4} lg={3} movie={move} index={index}/>
            </div>
          ))}
        </Grid>
      </>
  )
}

export default Upcoming;
// https://youtu.be/mrHNSanmqQ4?t=4720