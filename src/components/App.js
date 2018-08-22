import React, { Component } from 'react';
import '../style/App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import BookNow from './BookNow.js';
import ContactUs from './ContactUs.js';
import About from './About.js';
import Gallery from './Gallery.js';
import {
  BrowserRouter,
  Route,
  Link,
}from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div id='page-wrap'>
          <Nav /> 
          <Route exact path='/' component={Home}/>
          <Route path='/booknow' component={BookNow}/>
          <Route path='/contactus' component={ContactUs}/>
          <Route path='/about' component={About}/>
          <Route path='/gallery' component={Gallery}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
