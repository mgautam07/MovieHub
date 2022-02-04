import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function CardType2(props) {
  const linkk = "https://image.tmdb.org/t/p/w500/" + props.movie.backdrop_path;
  return(
    <>
      <Card sx={{ width: 340, m: 1, height: 300, boxShadow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={linkk}
          alt="thumbnail"
          sx={{ height: 200 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {props.movie.original_title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.movie.release_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.movie.vote_average}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  )
}

export default CardType2;
