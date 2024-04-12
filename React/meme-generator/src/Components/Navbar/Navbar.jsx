import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-bx'>
        <img src={logo} alt='logo' className='logo'/>
        <h3>Meme Generator</h3>
      </div>
    </div>
  )
}

export default Navbar;