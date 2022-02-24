import  { React, useContext } from 'react';
import {Link, NavLink} from 'react-router-dom';
import './nav.css';
import { LoginContext } from '../contexts/LoginContexts';

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

  const {username, setUsername} = useContext(LoginContext)
  const handleLogout = () =>{
    setUsername((""))
  }

  return (

    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar variant="dense">
    //       {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
    //         <MenuIcon />
    //       </IconButton> */}
    //       <Button variant="text" 
    //       color="error"
    //       >Trending</Button>         
    //       <Button variant="outlined">Latest</Button>         
    //       <Button variant="outlined">Company</Button>         
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <div className='navbar'>
      <div className="logo">
        <Link to="/" className="logo-img">
          <span className="material-icons">
            live_tv
            </span>Movie Hub
        </Link>
      </div>
      {/* <Link to="/" className="movie-hub"></Link> */}
      <ul className="nav-links">
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" className="hamburger">&#9776;</label>
      <div className='menu'>
        <li>
          <NavLink className="nav-link" to="/">Latest</NavLink>
        </li>
        <li>
          <Link className="nav-link" to="/upcoming">Upcoming</Link>
        </li>
        <li>
          <Link className="nav-link" to="/MovieRecommender">Movie Recommender</Link>
        </li>
        {username ?
        <>
          <li className=" left">
            <Link className="nav-link" to="/MovieRecommender">{username}</Link>
          </li>
          <li className=" left">
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
        :
        <>
          <li>
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li>
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
        </>}
      </div>
      </ul>
    </div>
  );
}
