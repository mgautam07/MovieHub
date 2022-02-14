import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid , Box} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import dayjs from 'dayjs'

function CardType2(props) {
  const linkk = "https://image.tmdb.org/t/p/w500/" + props.movie.backdrop_path;
  let date = dayjs(props.movie.release_date || props.movie.first_air_date).format('DD MMM YYYY')
  return(
    <>
    {/* {console.log(props.movie)} */}
      <Card sx={{ width: 340, m: 1, height: 305, boxShadow: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={linkk}
          alt="thumbnail"
          sx={{ height: 200 }}
        />
        <CardContent>
        <Box component="div" sx={{ textOverflow: 'ellipsis', fontSize: 20, mb : 1.3 }}>
            {/* <Typography gutterBottom variant="h5" sx={{ textOverflow: 'ellipsis' }}> */}
            {props.movie.original_title || props.movie.original_name}
          </Box>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
          <Grid container columnSpacing={1} direction='row' alignItems='center'>
            <Grid item>
            {props.movie.vote_average}
            </Grid>
            <Grid item>
             <StarIcon color='warning'/>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  )
}

export default CardType2;
