import React, { Component } from 'react';
import logo from './logo.svg'

class Page extends Component {
  render() { 
    return (
      <div>
        <img src={logo} />
        <h1>Fun facts about React</h1>
        <div>
          <ul>
            <li>Was first released in 2013</li>
            <li>Was originally creared by Jordan Walke</li>
            <li>Has well over 100K starts on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default Page;