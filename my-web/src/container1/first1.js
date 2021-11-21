import React, { Component } from 'react';
import img1 from '../images/busyhubs.png';
import img2 from '../images/phone.png';
import img3 from '../images/call.png';
import img4 from '../images/glass.png';
import './first2.css';

export default class First1 extends Component {
render() {
    return (
      <div class="first">
        <div class="side-bar">
               <div class="left-col">
                <img className="one" src={img1} alt="busy"/>
                <p className="hub">busyhubs</p>
                <ul className="links">
                 <li>How it works</li>
                 <li> About us</li>
                 <li> Blog</li>
                 <li> Sucess Stories</li>
                 <li>&#8286;</li>
                </ul>
              </div>

             <div className="right-col">
                <div><img className="two" src={img2} alt="phone"/></div> 
                <div className="no">+91 9789781211</div>
                <div className="tu"><div>Tutor Register</div></div> 
                <div className="lo"><div>Login</div></div> 
             </div> 

             <div className="right-col2">
             <p><img class="three" src={img3} alt="call"/></p>
             <p class="ko">&#8801;</p>
            </div>   
      </div>

      <div className="story">
        <p class="smart">Smartest way to <span>learn</span> or<br/><span>skill up a course</span></p>
        <p class="find">Find thousands of tutors with hundreds of courses were<br/> you can skill up and achieve your long time dream</p>
        <div className="box1">
          <img class="four"src={img4} alt="glass"/> 
          <span>Search Courses</span> 
          <p className="lastc">Find a course</p>
        </div>
      </div> 
        </div>
           
           )
        }
}



