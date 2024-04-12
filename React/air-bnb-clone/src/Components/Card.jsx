import React from 'react';
import star from './images/pink-star.png';


const Card = (props) => {
  // Destructure the props
  const { img, soldOut, rating,reviewCount,country, title, price } = props
  return (
      <div className='card-bx-main'>
        <div className='img-bx'>
          <img src={img} alt='Item' className='item-img'/>
          <p className={soldOut? 'sold-out' : ''}>{soldOut}</p>
        </div>
        <div className='others-bx'>
          <div className='star-bx'>
            <img className='star' src={star} alt='star'/>
            <p className='rate-country'>{rating} <span className='location'>({reviewCount}).{country}</span></p>
          </div>
          <p className='item-name'>{title}</p>
          <p className='price'><span className='price-start'>From ${price}</span> / person</p>
        </div>
      </div>
  );
}

export default Card;