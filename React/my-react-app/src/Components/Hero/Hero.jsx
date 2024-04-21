import React from 'react'
import './Hero.css'

const Hero = (props) => {
  const heroStyle = {
    backgroundColor: props.setMode ? 'white' : 'rgb(54, 51, 51)',
    color: props.setMode ? 'black' : 'white',
    transition: '1s'
  }
  const titleStyle = {
    color: 'rgb(0, 204, 255)'
  }
  return (
    <div className="main-content" style={heroStyle}>
      <h1 style={titleStyle}>Fun facts about React</h1>
      <ul>
        <li className="fact-list">Was first released in 2013</li>
        <li className="fact-list">Was originally creared by Jordan Walke</li>
        <li className="fact-list">Has well over 100K starts on Github</li>
        <li className="fact-list">Is maintained by Facebook</li>
        <li className="fact-list">Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

export default Hero