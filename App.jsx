import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results'
import requests from './requests';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Movies from './Movies';
import Home from './Home';
import HomePage from './HomePage';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path='/movies' element={<Movies/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
