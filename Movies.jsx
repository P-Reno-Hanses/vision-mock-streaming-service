import React, { useState } from 'react'
import Header from './Header'
import Nav from './Nav'
import Results from './Results'
import requests from './requests'
import HomeFooter from './HomeFooter'

function Movies() {
    const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)
  return (
    <>
    <Header/>
    <Nav setSelectedOption={setSelectedOption}/>
    <Results selectedOption={selectedOption}/>
    <HomeFooter/>
    </>

  )
}

export default Movies