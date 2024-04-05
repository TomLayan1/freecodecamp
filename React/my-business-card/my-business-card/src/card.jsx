import React, { Component } from 'react';
import photo from './photo.jpg';
import 'boxicons/css/boxicons.min.css';

function Image() {
  return (
    <div className="img-bx">
      <img src={photo} alt="User photo"/>
    </div>
  )
};

function NameAndButton() {
  return (
    <div className="name-btn-bx">
      <h3 className="name">Laura Smith</h3>
      <p className="job">Frontend Developer</p>
      <div className="btn-bx">
        <button className="email">Email</button>
        <button className="linkedin">LinkedIn</button>
      </div>
    </div>
  )
};

function Body() {
  return (
    <div className="body-bx">
      <h3 className="title">About</h3>
      <p className="content">Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters.</p>
      <h3 className="title">Interest</h3>
      <p className="content">Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters.</p>
    </div>
  )
};

function Footer() {
  return (
    <div className="footer">
      <i className='bx bxl-twitter' ></i>
      <i className='bx bxl-facebook-square'></i>
      <i className='bx bxl-instagram-alt'></i>
      <i className='bx bxl-github'></i>
    </div>
  )
}

class Page extends Component {
  state = {  } 
  render() { 
    return (
      <div className="card-bx-general">
        <Image />
        <NameAndButton />
        <Body />
        <Footer />
      </div>
    );
  }
}
 
export default Page;