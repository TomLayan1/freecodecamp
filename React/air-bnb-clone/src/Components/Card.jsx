import React from 'react';
import star from './images/pink-star.png';


const Card = (props) => {
  // Destructure the props
  // const { img, openSpot, rating,reviewCount,country, title, price, location } = props;
  
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.item.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
      <div className='card-bx-main'>
        <div className='img-bx'>
          <img src={props.item.coverImg} alt='Item' className='item-img'/>
          {badgeText && <p className='sold-out'>{ badgeText }</p>}
        </div>
        <div className='others-bx'>
          <div className='star-bx'>
            <img className='star' src={star} alt='star'/>
            <p className='rate-country'>{props.item.stats.rating} <span className='location'>({props.item.stats.reviewCount}).{props.item.country}</span></p>
          </div>
          <p className='item-name'>{props.item.title}</p>
          <p className='price'><span className='price-start'>From ${props.item.price}</span> / person</p>
        </div>
      </div>
  );
}

export default Card;