
import React, { useState, useEffect } from 'react'
import "./Home.css"
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom"



function Home({ selectedOption }) {

  
  return (
    <div className='home'>
      <div className="home__container">
      <div className="home__header">
        <img className='header__logo' src="http://localhost:3000/static/media/Vision.25ed811888a3714b0bd2.png" alt="" />
      <h1 className='header'>Welcome to Vision</h1>
      <h2 className='sub__header'>We have been Expecting you</h2>
      
      {/* <div className="search__input">
      <input className='search__field' type="text" placeholder='Search...' />
      </div> */}
      <Link to="/movies">
      <button className='button'>Browse All</button>
      </Link>

      </div>
      <div className="header movieSlider__header">
        <h1>What's trending?</h1>

      </div>
        
      </div>
      
    </div>
  )
  
}


export default Home

