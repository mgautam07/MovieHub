import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Card from './cards/Card'

function Upcoming() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const req = axios.get('/upcoming').then(result => { console.log(result.data.results);
      setMovie(result.data.results);
      return result.data.results; })
    // console.log(req.data);
  }, []);

  return( <>
    <section>
      <div className='cards'>
      {movie.map((move, index) => (
      <Card movie={move} index={index}/>
      ))}

      </div>
    </section>  
    </>
  )
}

export default Upcoming;
// https://youtu.be/mrHNSanmqQ4?t=4720