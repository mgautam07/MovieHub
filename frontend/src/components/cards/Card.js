import React from 'react';
import './card.css'

function card(props) {
  const linkk = "https://image.tmdb.org/t/p/w500/" + props.movie.backdrop_path;
  var classes = ['movie_card'];
  if(props.index % 3 === 0)
    classes.push('bright');
  else if(props.index % 3 === 1)
    classes.push('tomb');
  else if(props.index % 3 === 2)
    classes.push('ave');
  classes = classes.join(' ');
  // console.log(classes)
  return(
    <div className={classes}>
        <div class="info_section">
          <div class="movie_header">
            <img class="locandina" src={linkk}/>
            <h1>{props.movie.original_title}</h1>
            <h4>{props.movie.release_date}</h4>
            <span class="minutes">{props.movie.vote_average}</span>
            <p class="type">Action, Crime, Fantasy</p>
          </div>
          <div class="movie_desc">
            <p class="text">
            {props.movie.overview}
            </p>
          </div>
          {/* <div class="movie_social">
            <ul>
            <li><i class="material-icons">share</i></li>
            <li><i class="material-icons"></i></li>
            <li><i class="material-icons">chat_bubble</i></li>
          </ul>
        </div> */}
      </div>
      <div class="blur_back" style={{ 
      backgroundImage: `url(${linkk})`
    }}></div>
    </div>
  )
}

export default card;