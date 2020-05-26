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
          <Link to ='/booknow'><button className='button'>Schedule</button></Link>
          <Link to ='/contactus'><button className='button'>Contact Us</button></Link>
          <Link to ='/gallery'><button className='button'>Gallery</button></Link>
          <Link to ='/services'><button className='button'>Services</button></Link>
      </div>
    );
}

