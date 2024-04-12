import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App