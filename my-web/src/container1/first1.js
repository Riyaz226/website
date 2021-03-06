import React, { Component } from 'react';
import img1 from '../images/busyhubs.png';
import img2 from '../images/phone.png';
import img3 from '../images/call.png';
import img4 from '../images/glass.png';
import img5 from '../images/women.png';
import img6 from '../images/company.png';
import './first2.css';

export default class First1 extends Component {
render() {
    return (
      <div class="first-container">
        <section class="side-bar">
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
      </section>

      <section className="story">
         <p class="smart">Smartest way to <span>learn</span> or<br/><span>skill up</span> a course</p>
        <p class="find">Find thousands of tutors with hundreds of courses were<br/> you can skill up and achieve your long time dream</p>
         <div className="box1">
           <img class="four"src={img4} alt="glass"/> 
          <p className="se">Search Courses</p> 
          <p className="lastc">Find a course</p>  
        </div>
         <p className="see">See courses below<span>&#8595;</span></p>    
        
         <div className="boxes">
         <div>
              <img class="five" src={img5} alt="women"/>
            <span>
            <p>200+ Verified Tutors </p>
            <p class="ou">Our Tutors are verified and qualified </p>
          </span>      
        </div>
        <div class="box2">
           <img class="five" src={img5} alt="women"/>
        <span>
            <p>1000+ Learning students </p>
            <p class="ou">Our Tutors are verified and qualified </p>
        </span>
        </div> 
          <div class="box3">
        <img class="five" src={img5} alt="women"/>
        <span>
            <p>Certified & Authorised </p>
            <p class="ou">Our Tutors are verified and qualified </p>
        </span>
        </div>  
    </div>  
    </section>   
        <img class="six" src={img6} alt="company"/>    
    </div>
      )
        }
}



