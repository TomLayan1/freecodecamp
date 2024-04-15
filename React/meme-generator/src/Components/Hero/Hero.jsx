import React from 'react'
import './Hero.css'
import holder from '../../Assets/meme-image.png'
import memeData from '../../MemeData'


const Hero = () => {

  const [imageUrl, setImageUrl] = React.useState('')

  const getMeme = () => {
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    console.log(randomNumber);

    setImageUrl(memeArray[randomNumber].url);
  }


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
        <button onClick={getMeme}>Get a new meme image</button>
      </div>
      <div className='img-bx'>
        <h2>{}</h2>
        <img src={imageUrl || holder} alt='meme'/>
        <h2>{}</h2>
      </div>
    </div>
  )
}

export default Hero;