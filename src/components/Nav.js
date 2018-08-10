import React from 'react';
import '../style/Nav.css';
import '../style/App.css';
import {
    Link,
  }from 'react-router-dom';

export default function Nav()  {
    return (
      <div className='stitched'>
          <p>Olivia Grace Photography</p>
          <Link to ='/'><button className='button'>Home</button></Link>
          <Link to ='/about'><button className='button'>About</button></Link>
          <Link to ='/booknow'><button className='button'>Book Now!</button></Link>
          <Link to ='/contactus'><button className='button'>Contact Us</button></Link>
      </div>
    );
}

