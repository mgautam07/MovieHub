import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import CardType2 from './CardType2';
import axios from 'axios'

function CardController() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
      axios.get('/trending').then(result => { console.log(result.data.trending.results);
        setMovie(result.data.trending.results);
        return; })
    // console.log(req.data);
    }, []);
  return (
    <Grid container sx={{ml : 3, justifyContent: 'center', mb:7, mt : 7}} >
      {movie.map((move, index) => (
        <div key={index}>
          <CardType2 xs={10} md={4} lg={3}movie={move} index={index}/>
        </div>
      ))}
    </Grid>  
  )
}

export default CardController;
