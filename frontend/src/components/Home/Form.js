import React from 'react';
import '../../components/all.css';

function Form() {
  return <>
  <section className="section-3">
    <form action="POST">
      <div className="form-heading">Fill the form</div>
      <div className="main-form">
        <div className="form-text">Enter a name of a movie</div>
        <input className="form-field" type="text" name="movie1" id="movie1" />
        <div className="form-text">Enter a name of a movie</div>
        <input className="form-field" type="text" name="movie2" id="movie2" />
        <div className="form-text">Enter a name of a movie</div>
        <input className="form-field" type="text" name="movie3" id="movie3" />
        <div className="form-text">Enter a name of a movie</div>
        <input className="form-field" type="text" name="movie4" id="movie4" />
        <div className="form-text">Enter a name of a movie</div>
        <input className="form-field" type="text" name="movie5" id="movie5" />
      </div>
      <input className="btn" type="submit" />
      <input className="btn" type="reset" />
    </form>
    </section>
  </>;
}

export default Form;
