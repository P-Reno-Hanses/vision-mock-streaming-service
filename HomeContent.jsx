import React, { useState, useEffect } from 'react'
import "./HomeContent.css"
import { Link } from "react-router-dom"
import VideoCard from './VideoCard'
import axios from './axios'
import requests from './requests'
import FlipMove from "react-flip-move"

function HomeContent() {
  return (
    <div className="homeContent">
        <div className="homeContent__container">
            <div className="trendingMovie__container">
            <div className="trendingMovie">
                <img src="https://i.gyazo.com/3cba63284ae05c4352c634e08da8edc8.png" alt="" />
              <h2 className="movie__title">Wednesday</h2>
            </div>
            </div>
            <div className="trendingMovie__container">
            <div className="trendingMovie">
                <img src="https://i.gyazo.com/211550fef41dd1a7524dba46b531165d.jpg" alt="" />
              <h2 className="movie__title">Avatar: The Way of Water</h2>
            </div>
            </div>
            <div className="trendingMovie__container">
            <div className="trendingMovie">
                <img src="https://i.gyazo.com/fd3ebb4330e178d11dc591ca8c95effb.png" alt="" />
              <h2 className="movie__title">Black Adam</h2>
            </div>
            </div>
        </div>
            <div className="homeContent__end">
                <h2 className="header">Looking for something else?</h2>
                <h3 className="sub__header">Vision has over 10,000+ movies to choose from!</h3>
                <Link to="/movies">
                <button className="button">Browse All</button>
                </Link>
            </div>
    </div>
  )
}

export default HomeContent