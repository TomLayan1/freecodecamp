import React, { Component } from 'react';
import logo from './logo.svg'

function Header() {
  return (
    <header className="header">
      <div className="logo-bx">
        <img className="logo" src={logo} alt="React logo"/>
        <h2 className="logo-name">ReactFacts</h2>
      </div>
      <p className="project-number">React Project 1</p>
    </header>
  )
};

function Body() {
  return (
    <div className="main-content">
      <h1>Fun facts about React</h1>
      <ul>
        <li className="fact-list"><span className="list-style">.</span>Was first released in 2013</li>
        <li className="fact-list"><span className="list-style">.</span>Was originally creared by Jordan Walke</li>
        <li className="fact-list"><span className="list-style">.</span>Has well over 100K starts on Github</li>
        <li className="fact-list"><span className="list-style">.</span>Is maintained by Facebook</li>
        <li className="fact-list"><span className="list-style">.</span>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
};

function Footer() {
  return (
    <footer>
      <p className="all-right">2024 Tomisin. All right reserved</p>
    </footer>
  )
};

class Page extends Component {
  render() { 
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}
 
export default Page;