import './App.css';
// import http from "./http-common";
import Home from './components/Home/Home.js'
import Footer from './components/Footer.js';
import NavBar from './components/Navbar.js';
import MovieRecommender from './components/MovieRecommender';
import Upcoming from './components/Upcoming.js';
import Signin from './components/Signin.js';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* <Route exact path='/latest' element={<Navigate replace to='/latest/netflix' />} /> */}
        <Route exact path='/about' element={<Home />} />
        <Route exact path='/upcoming' element={<Upcoming />} />
        <Route exact path='/MovieRecommender' element={<MovieRecommender />} />
        <Route exact path='/signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>
    {/* <Footer/> */}
    </>
  );
}

export default App;
