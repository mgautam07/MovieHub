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
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={linkk}/>
            <h1>{props.movie.original_title}</h1>
            <h4>{props.movie.release_date}</h4>
            <span className="minutes">{props.movie.vote_average}</span>
            <p className="type">Action, Crime, Fantasy</p>
          </div>
          <div className="movie_desc">
            <p className="text">
            {props.movie.overview}
            </p>
          </div>
          {/* <div className="movie_social">
            <ul>
            <li><i className="material-icons">share</i></li>
            <li><i className="material-icons"></i></li>
            <li><i className="material-icons">chat_bubble</i></li>
          </ul>
        </div> */}
      </div>
      <div className="blur_back" style={{ 
      backgroundImage: `url(${linkk})`
    }}></div>
    </div>
  )
}

export default card;