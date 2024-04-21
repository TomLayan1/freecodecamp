import React from 'react'
import './Footer.css'

const Footer = (props) => {
  const footerStyle = {
    backgroundColor: props.setMode ? 'white' : 'rgb(54, 51, 51)',
    transition: '1s'
  }
  const rightStyle = {
    color: props.setMode ? 'black' : 'white'
  }
  return (
    <footer style={footerStyle}>
      <p className="all-right" style={rightStyle}>2024 Tomisin. All right reserved</p>
    </footer>
  )
}

export default Footer