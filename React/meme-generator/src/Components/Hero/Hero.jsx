import React, {useState, useEffect} from 'react'
import './Hero.css'
import holder from '../../Assets/meme-image.png'
// import memeData from '../../MemeData'


const Hero = () => {

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: ''
  })

  const [allMemeData, setAllMemeData] = useState({});

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => setAllMemeData(data))
  }, []);
  // There's nothing changing in state that require making another API request
  // So, the dependancy array above will be an empty array

  const getMeme = () => {
    const memeArray = allMemeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    setMeme(prevMeme => ({ ...prevMeme, randomImage: url }));
  }

  const handleChange = (event) => {

    // destructure structure the field attributes and set them = event.target
    const {name, value} = event.target;

    // pass a parameter to refers to the previous value of the state object
    // so you can get access to the current or previous value of the object
    setMeme(prevMemeData => {
      // return an object that returns the previous value of the state object and the changes made to specific properties
      // use the ternary operator to choose if the field will use a checked or value to get the changes made
      return {...prevMemeData, [name]: value}
    })
  }

  const handleSubmit = (event) => {
    // to prevent the page from reloading or refreshing:
    event.preventDefault();
  }

  return (
    <div className='hero-main'>
      <form className='field-btn-bx' onSubmit={handleSubmit}>
        <div className='field-bx'>
          <div className='input-bx'>
            <label className='field-name'>Top text</label>
            <input type='text' name='topText' placeholder='Shut up' className='input-field' value={meme.topText} onChange={handleChange}/>
          </div>
          <div className='input-bx'>
            <label className='field-name'>Bottom text</label>
            <input type='text' name='bottomText' placeholder='And take my money' className='input-field' onChange={handleChange}/>
          </div>
        </div>
        <button onClick={getMeme}>Get a new meme image</button>
      </form>
      <div className='img-bx'>
        <h2 className='top-text'>{meme.topText}</h2>
        <img src={meme.randomImage || holder} alt='meme'/>
        <h2 className='bottom-text'>{meme.bottomText}</h2>
      </div>
    </div>
  )
}

export default Hero;