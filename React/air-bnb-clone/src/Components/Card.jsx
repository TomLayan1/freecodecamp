import React, { Component } from 'react';
import star from '../images/pink-star.png';
import itemImg from '../images/swimmerImage.png';

function CreateCard(props) {
  console.log(props)
  let itemImage = '../images/swimmerImage.png'

  return (
    // <section className='card-section'>
      <div className='card-bx-main'>
        <div className='img-bx'>
          <img className='item-img' src={itemImg} alt='Item image'/>
          <p className='sold-out'>{props.soldOut}</p>
        </div>
        <div className='others-bx'>
          <div className='star-bx'>
            <img className='star' src={star}/>
            <p className='rate-country'>{props.rating} <span className='location'>{props.reviewCount}.{props.country}</span></p>
          </div>
          <p className='item-name'>{props.title}</p>
          <p className='price'><span className='price-start'>From ${props.price}</span> / person</p>
        </div>
      </div>
    // </section>
  );
}

class Card extends Component {
  state = {  } 
  render() { 
    return (
      <section className='card-section'>
        < CreateCard
          img='../images/swimmer-image.png'
          soldOut = 'SOLD OUT'
          rating= "5.0"
          reviewCount = {6}
          country = 'USA'
          title = 'Life lessons with Katie Zaferes'
          price = {136}
        />

        < CreateCard
          img='../images/swimmer-image.png'
          soldOut = 'SOLD OUT'
          rating= "5.0"
          reviewCount = {6}
          country = 'USA'
          title = 'Life lessons with Katie Zaferes'
          price = {136}
        />
        < CreateCard
          img='../images/swimmer-image.png'
          soldOut = 'SOLD OUT'
          rating= "5.0"
          reviewCount = {6}
          country = 'USA'
          title = 'Life lessons with Katie Zaferes'
          price = {136}
        />
      </section>
    );
  }
}
 
export default Card;