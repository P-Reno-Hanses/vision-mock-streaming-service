import React from 'react'
import "./Header.css"
import HomeIcon from '@mui/icons-material/Home';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';import ChairIcon from '@mui/icons-material/Chair';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className='header'>
     <div className="header__icons">
      
      <Link to="/">
      <div className="header__icon header__icon--active">
      <ChairIcon/>
      <p>Home</p>
      </div>
      </Link>
      <div className="header__icon">
      <WhatshotIcon/>
      <p>Trending</p>
      </div>

      <div className="header__icon">
      <SearchIcon/>
      <p>Search</p>
      </div>

      
      <div className="header__icon">
      <VideoLibraryIcon/>
      <p>Collections</p>
      </div>


      <div className="header__icon">
      <PersonIcon/>
      <p>Account</p>

      </div>
     <img className='logo__header' src={require('./assets/Vision.png')} />

     </div>


    </div>
  )
}

export default Header