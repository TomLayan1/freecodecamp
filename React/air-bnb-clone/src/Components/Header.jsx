import React, { Component } from 'react';
import logo from '../images/airbnb-logo.png'

class Navbar extends Component {
  state = {  } 
  render() { 
    return (
      <div className='header'>
        <img className="logo" src={logo} alt="Airbnb logo"/>
      </div>
    );
  }
}
 
export default Navbar;