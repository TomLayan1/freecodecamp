import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'


const App = () => {
  const [mode, setMode] = useState(false)

  const handleClick = () => {
    setMode(prevMode => !prevMode)
    console.log(mode)
  }
  return (
    <>
      <Header setMode = {mode} darkmode={mode.isDarkMode} onClick={() => handleClick(mode.isDarkMode)} />
      <Hero  setMode = {mode} darkmode={mode.isDarkMode} />
      <Footer setMode = {mode} darkmode={mode.isDarkMode} />
    </>
  )
}

export default App