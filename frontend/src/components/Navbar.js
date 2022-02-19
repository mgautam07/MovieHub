import  { React, useContext } from 'react';
import {Link, NavLink} from 'react-router-dom';
import './all.css';
import { LoginContext } from '../contexts/LoginContexts';

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

  const {username} = useContext(LoginContext)


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
    <div className='navb'>
      <div className="logo">
        <Link to="/" className="logo-img">
          <span className="material-icons">
            live_tv
            </span>
        </Link>
      </div>
      <Link to="/" className="movie-hub">Movie Hub</Link>
      <ul className="">
        <li className="nav-list">
          <NavLink className="nav-link" to="/">Latest</NavLink>
        </li>
        <li className="nav-list">
          <Link className="nav-link" to="/upcoming">Upcoming</Link>
        </li>
        <li className="nav-list">
          <Link className="nav-link" to="/MovieRecommender">Movie Recommender</Link>
        </li>
        {username ? 
        <li className="nav-list left">
        <Link className="nav-link" to="/MovieRecommender">{username}</Link>
      </li>
        :<> <li className="nav-list">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-list">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li></>}
        
      </ul>
    </div>
  );
}
