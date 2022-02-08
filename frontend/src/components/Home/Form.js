import axios from 'axios';
import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/all.css';

function Form() {
  const navigate = useNavigate();
  const [movie1, setMovie1] = useState("");
  const [movie2, setMovie2] = useState("");
  const [movie3, setMovie3] = useState("");
  const [movie4, setMovie4] = useState("");
  const [movie5, setMovie5] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handled')
    let recommendations = axios.post('/MovieRecommender', {movie1: movie1, movie2: movie2, movie3: movie3, movie4: movie4, movie5: movie5,})
    .then((data) => {console.log(data);
    return data;})
    // navigate('/MovieRecommender');
  }

  return <>
  <section className="section-3">
    {/* <form action="/MovieRecommender" method="POST"> */}
    <form>
      <div className="form-heading">Fill the form</div>
      <div className="main-form">
        <div className="form-text">Enter a name of a movie</div>
        <input className="form-field" type="text" name="movie1" id="movie1" onChange={(event) => {setMovie1((event.target.value))}} required autoComplete='off'/>
        <div className="form-text">Enter a name of a movie</div>
        <input className="form-field" type="text" name="movie2" id="movie2" onChange={(event) => {setMovie2((event.target.value))}} required autoComplete='off'/>
        <div className="form-text">Enter a name of a movie</div>
        <input className="form-field" type="text" name="movie3" id="movie3" onChange={(event) => {setMovie3((event.target.value))}} required autoComplete='off'/>
        <div className="form-text">Enter a name of a movie</div>
        <input className="form-field" type="text" name="movie4" id="movie4" onChange={(event) => {setMovie4((event.target.value))}} required autoComplete='off'/>
        <div className="form-text">Enter a name of a movie</div>
        <input className="form-field" type="text" name="movie5" id="movie5" onChange={(event) => {setMovie5((event.target.value))}} required autoComplete='off'/>
      </div>
      <input className="btn" type="submit" onClick={handleSubmit}/>
      <input className="btn" type="reset" />
    </form>
    </section>
  </>;
}

export default Form;
