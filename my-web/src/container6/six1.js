import React, { Component } from 'react';
import img43 from '../images/sub1.png';
import img44 from '../images/sub3.png';
import img45 from '../images/sub2.png';
import img46 from '../images/sub4.png';
import img47 from '../images/sub5.png';
import img48 from '../images/sub7.png';
import img49 from '../images/sub6.png';
import img50 from '../images/sub8.png';
import img51 from '../images/busyhubs.png';
import img52 from '../images/all web 2.png';
import img53 from '../images/we.png';
import img54 from '../images/whatsapp.png';
import img55 from '../images/wpp2.png';
import './six2.css';

export default class six1 extends Component {
render() {
    return (
    <div class="six-container">
        <section className="images3">
         <img className="thirtyfour" src={img43} alt="sub1"/><br/>
        <img className="thirtyfive" src={img44} alt="sub3"/>
        <img className="thirtyeight" src={img47} alt="sub5"/><br/>
        <img className="thirtynine" src={img48} alt="sub7"/>
      </section>  
          <section className="rei">
        <p className="reg">Register as a tutor</p>
        <p className="jo">Join Our Fastest Growing Tutor Community</p>
        <p className="th">Thousands of tutors enrolled with us to teach and link with thousands of students and the community is growing larger and stronger every day. Be a part of it now! </p> 
        <p className="box10"><p>Register Now</p></p>  
     </section>     
       <section className="images4">
        <img className="thirtysix" src={img45} alt="sub1"/><br/>
        <img className="thirtyseven" src={img46} alt="sub3"/>
        <img className="fourty" src={img49} alt="sub1"/><br/>
        <img className="fourtyone" src={img50} alt="sub3"/>
      </section>        

       <section className="box10-contact">
         <div className="box10-cont">
             <div>
            <p className="cu"> Customer Support</p>
           <p className="or"> Our customer care agents are always round the corner to pick up your issues and attend to them immediately.</p>  
           <p className="box11"><p>Support </p></p>  
          </div>    
        </div>  
           <div className="box10-cont">
          <div>
           <p className="cu1"> How it works</p>
           <p className="or"> Our networks works in a new way connecting learners with the best tutors around and also providing the best batch classes.</p>  
           <p className="box11"><p>See how </p></p> 
          </div> 
        </div>   
      </section>

      <section className="last">
      <div>
        <img className="fourtytwo" src={img51} alt="busy"/> 
         <p className="po">busyhubs</p>
         <p className="nv">Never stop learning, we believe everyone deserves quality learning experience. BusyHubs provide you an integrated learning solution to connect the enthusiastic learner with the industry specialists across horizons</p>
      </div>     

         <div className="li">
       <ul className="ts">
        <p>Categories</p>
        <li>IT Courses</li>
        <li>Music</li>
        <li>Yoga</li>
        <li>Language</li>
        <li>Exam Preparation</li>
        <li>Tuition</li>
      </ul>
      
      <ul className="ts">
        <p>Company</p>
        <li>How it Works</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
      </ul>
     </div>   

       <div className="li2">
      <ul className="ts">
        <p>Support</p>
        <li>Help Center</li>
        <li>FAQ’s</li>
        <li>Site Map</li>
        <li>Privacy Policy</li>
        <li>Terms of Services</li>
      </ul>   

        <ul className="ts">
      <p>Social Media</p>
      <img className="fourtythree" src={img52} alt="all web2"/>  
       <li class="nm2">Talk to us</li> 
     <img className="fourtyfour" src={img53} alt="we"/>  
    </ul> 
    </div>
        
    <img className="fourtyfive" src={img54} alt="watessapp"/>  
    <img className="fourtysix" src={img55} alt="watessapp2"/>  
    </section>   
</div>       
    )
        }
}