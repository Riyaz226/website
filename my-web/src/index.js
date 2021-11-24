import React from 'react';
import ReactDOM from 'react-dom';
import First1 from './container1/first1';
import Second1 from './container2/second1';
import './index.css';
import App from './App';


ReactDOM.render(
  <>
    <First1/>
    <Second1/>
    <App />
  </>,
  document.getElementById('root')
);

