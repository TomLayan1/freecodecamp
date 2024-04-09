import React, { Component } from 'react';

class Hero extends Component {
  state = {  } 
  render() { 
    return (
      <div className='food'>
        <div className='hero-info-container'>
          <div className='content-container'>
            <p>Always</p>
            <h1>Served</h1>
            <h1>Delicious</h1>
            <div className='btn-container'>
              <button className='btn'>Delivery</button>
              <button className='btn'>Take-out</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Hero;