import React, { Component } from 'react';
import itemImg from '../images/swimmer-image.png';
import star from '../images/pink-star.png';


function CreateCard() {
  return (
    <section className='card-section'>
      <div className='card-bx-main'>
        <div className='img-bx'>
          <img className='item-img' src={itemImg}/>
          <p className='sold-out'>SOLD OUT</p>
        </div>
        <div className='others-bx'>
          <div className='star-bx'>
            <img className='star' src={star}/>
            <p className='rate-country'>5.0 <span className='location'>(6).USA</span></p>
          </div>
          <p className='item-name'>Life lessons with Katie Zaferes</p>
          <p className='price'><span className='price-start'>From $136</span> / person</p>
        </div>
      </div>
    </section>
  );
}

class Card extends Component {
  state = {  } 
  render() { 
    return (
      < CreateCard />
    );
  }
}
 
export default Card;