import React from 'react';
//import './Nav.css';
import {
    Link,
  }from 'react-router-dom';

export default function Nav()  {
    return (
      <div>
          <button><Link to ='/'>Home</Link></button>
          <button><Link to ='/about'>About</Link></button>
          <button><Link to ='/booknow'>Book Now!</Link></button>
          <button><Link to ='/contactus'>Contact Us</Link></button>
      </div>
    );
}

