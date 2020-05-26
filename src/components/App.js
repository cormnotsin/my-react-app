import React, { Component } from 'react';
import '../style/App.css';
import Nav from './Nav';
import Home from './Home';
import BookNow from './BookNow';
import ContactUs from './ContactUs';
import About from './About';
import PhotoGallery from './PhotoGallery';
import Services from './Services';
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
              <Route path='/gallery' component={PhotoGallery}/>
              <Route path='/services' component={Services}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
