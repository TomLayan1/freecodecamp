import React from 'react'
import './Header.css'
import logo from '../../logo.svg'

const Header = (props) => {
  const switchStyle = {
    backgroundColor: props.setMode? 'black' : 'white'
  }
  const btnStyle = {
    margin: props.setMode? '0 0 0 2px' : '0 0 0 13px'
  }
  const headerStyle = {
    backgroundColor: props.setMode ? 'white' : 'black',
    transition: '1s'
  }

  return (
    <header className="header" style={headerStyle}>
      <div className="logo-bx">
        <img className="logo" src={logo} alt="React logo"/>
        <h2 className="logo-name">ReactFacts</h2>
      </div>
      <div className='name-mode-bx'>
        <div className='theme-bx' style={switchStyle} onClick={props.onClick}>
          <div className='theme-btn' style={btnStyle}></div>
        </div>
        <p className="project-number">React Project 1</p>
      </div>
    </header>
  )
}

export default Header