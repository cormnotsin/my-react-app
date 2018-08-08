import React, { Component } from 'react';
import '../style/App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import BookNow from './BookNow.js';
import ContactUs from './ContactUs.js';
import About from './About.js';
import {
  BrowserRouter,
  Route,
  Link,
}from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className='App-background'>
          <Nav /> 
          <hr/>
          <Route exact path='/' component={Home}/>
          <Route path='/booknow' component={BookNow}/>
          <Route path='/contactus' component={ContactUs}/>
          <Route path='/about' component={About}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
