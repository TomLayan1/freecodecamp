import React, { Component } from 'react';
import photo from './photo.jpg';

function Image() {
  return (
    <div>
      <img src={photo} alt=""/>
    </div>
  )
};

function NameAndButton() {
  return (
    <div>
      <h2 className="name">Laura Smith</h2>
      <p className="Job">Frontend Developer</p>
      <div className="btn-bx">
        <button>Email</button>
        <button>LinkedIn</button>
      </div>
    </div>
  )
};

function Body() {
  return (
    <div className="body-bx">
      <h2 className="title"></h2>
      <h2 className="title"></h2>
    </div>
  )
};


class Page extends Component {
  state = {  } 
  render() { 
    return (
      <div className="card-bx-general">
        <Image />
        <NameAndButton />
      </div>
    );
  }
}
 
export default Page;