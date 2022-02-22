import './App.css';
// import http from "./http-common";
import { useState } from 'react';
import Home from './components/Home/Home.js'
import Footer from './components/Footer.js';
import NavBar from './components/Navbar.js';
import MovieRecommender from './components/MovieRecommender';
import Upcoming from './components/Upcoming.js';
import Login from './components/Login.js';
import { LoginContext } from './contexts/LoginContexts';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './components/Signup';
import Search from './components/Search';
// import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

function App() {

  const [username, setUsername] = useState();

  return (
    <LoginContext.Provider value={{ username, setUsername }}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* <Route exact path='/latest' element={<Navigate replace to='/latest/netflix' />} /> */}
          <Route exact path='/about' element={<Home />} />
          <Route exact path='/upcoming' element={<Upcoming />} />
          <Route exact path='/MovieRecommender' element={<MovieRecommender />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    {/* <Footer/> */}
    </LoginContext.Provider>
  );
}

export default App;
