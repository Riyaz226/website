import React from 'react';
import ReactDOM from 'react-dom';
import First1 from './container1/first1';
import Second1 from './container2/second1';
import Third1 from './container3/third1';
import Four1 from './container4/four1';
import Five1 from './container5/five1';
import Six1 from './container6/six1';
import './index.css';
import App from './App';


ReactDOM.render(
  <>
    <First1/>
    <Second1/>
    <Third1/>
    <Four1/>
    <Five1/>
    <Six1/>
    <App />
  </>,
  document.getElementById('root')
);

