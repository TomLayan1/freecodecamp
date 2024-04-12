import React from 'react';
import logo from './images/airbnb-logo.png';

const Header = () => {
  return (
    <div className='header'>
      <img className="logo" src={logo} alt="Airbnb logo"/>
    </div>
  )
}

export default Header;