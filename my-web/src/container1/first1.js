import React, { Component } from 'react';
import img1 from '../images/busyhubs.png';
import img2 from '../images/phone.png';
import './first2.css';

export default class First1 extends Component {
render() {
    return (
      <div class="first">
        <div class="side-bar">
          <div class="container">
              <div class="left-col">
                <img className="one" src={img1} alt="busy"/>
                <p className="hub">busyhubs</p>
                <ul className="links">
                 <li>How it works</li>
                 <li> About us</li>
                 <li> Blog</li>
                 <li> Sucess Stories</li>
                 <li></li>
                </ul>
              </div>

             <div className="right-col">
               <img className="two" src={img2} alt="phone"/>
               <ul>
               <li className="no">+91 9789781211</li>
               <li className="tu"><div>Tutor Register</div></li>
               <li className="lo"><div>Login</div></li>
               </ul>
             </div> 
          </div> 
        </div>
      </div>         
           )
        }
}



