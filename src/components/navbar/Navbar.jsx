import React from 'react';
import "./navbar.scss";
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

   

const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
        <div className="left">
            <Link to='/' style={{textDecoration: 'none'}}>
                <span>GetSocial</span>
            </Link>
            <HomeOutlinedIcon />
            {darkMode ? (<WbSunnyOutlinedIcon onClick={toggle}/>) : (<DarkModeOutlinedIcon onClick={toggle}/>)}

            <GridViewOutlinedIcon /> 
            <div className="search">
                <SearchOutlinedIcon />
                <input type="text" placeholder='Search...' />
            </div>
        </div>
        <div className="right">
            <PersonOutlineOutlinedIcon />
            <EmailOutlinedIcon />
            <NotificationsOutlinedIcon />
            <div className="user">
                <img src={currentUser.profilePic} alt="profile picture" />
                <span>{currentUser.name}</span>
            </div>

        </div>
    </div>
  )
}

export default Navbar