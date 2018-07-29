import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Nav from './components/Nav';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Nav />, document.getElementById('root'));


registerServiceWorker();
