import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-main'>
      <div className='field-btn-bx'>
        <div className='field-bx'>
          <div className='input-bx'>
            <p className='field-name'>Top text</p>
            <input type='text' placeholder='Shut up' className='input-field' />
          </div>
          <div className='input-bx'>
            <p className='field-name'>Bottom text</p>
            <input type='text' placeholder='And take my money' className='input-field' />
          </div>
        </div>
        <button>Get a new meme image</button>
      </div>
      <div className='img-bx'>
        <h2></h2>
        <img src={require('../../Assets/meme-image.png')} />
        <h2></h2>
      </div>
    </div>
  )
}

export default Hero