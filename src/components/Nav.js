import React from 'react';
import '../style/Nav.css';
import {
    Link,
  }from 'react-router-dom';

export default function Nav()  {
    return (
      <div>
          <p>Olivia Grace Photography</p>
          <img src={'https://i.imgur.com/gDWQ416.jpg'} alt="sleepyboi" className="img-responsive"/>
          <button><Link to ='/'>Home</Link></button>
          <button><Link to ='/about'>About</Link></button>
          <button><Link to ='/booknow'>Book Now!</Link></button>
          <button><Link to ='/contactus'>Contact Us</Link></button>
      </div>
    );
}

