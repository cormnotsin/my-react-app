import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div class='Navigation'>
          <button>Home</button>
          <button>About</button>
          <button>Book Now</button>
          <button>Contact Us</button>
      </div>
    );
  }
}

export default Nav;
