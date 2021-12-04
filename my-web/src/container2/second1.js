import React, { Component } from 'react';
import img5 from '../images/women.png';
import img7 from '../images/code.png';
import img8 from '../images/box.png';
import img9 from '../images/company2.png';
import img10 from '../images/box1.png';
import img11 from '../images/kodu.png';
import img12 from '../images/round.png';
import img13 from '../images/traning 1.png';
import img14 from '../images/traning 2.png';
import img15 from '../images/traning 3.png';
import img16 from '../images/traning 4.png';
import img17 from '../images/traning 5.png';
import img18 from '../images/traning 6.png';
import img19 from '../images/all web.png';
import img20 from '../images/post1.png';
import img21 from '../images/post2.png';
import img22 from '../images/post3.png';
import img23 from '../images/post4.png';
import img24 from '../images/kodu2.png';
import img25 from '../images/round2.png';
import img26 from '../images/kodu2.png';
import img27 from '../images/round3.png';
import './second2.css';

export default class Second1 extends Component {
render() {
    return (
      <div class="second-container">
         <p className="on">Ongoing Batch Courses</p>
         <p className="we">We conduct the most indemand IT courses in batches</p> 
        <section className="box4-contact"> 
            <div>
            <p className="in">In demand</p> 
             <p className="full">Full Stack MERN/MEAN Development</p>
            <p className="th"> This course offered by buyshubs in assosication with the leading tutors</p>
            <p className="box5"><p> Book Free Demo</p> </p>
            <img className="seven" src={img7} alt="company2"/>     
        </div>   
      </section>    
 
          <section className="box5-contact"> 
         <div class="er">
           <div>
          <p className="ba"> Basic Web Development</p>
          <p className="thr">The basic web development classes organised in batches</p>
          <p className="box6"><p> Book Free Demo</p> </p>
          <img className="eight" src={img8} alt="box"/>   
        </div>     
       </div> 
        
           <div class="er"> 
           <div>
           <p className="ba"> Fullstack QA</p>
           <p className="thr">The Full Stack QA classes organised in batches</p>
           <p className="box7"><p> Book Free Demo</p> </p>
           <img className="eight2" src={img8} alt="box"/>
         </div>      
      </div>   
      </section>    

       <section className="box6-contact"> 
           <div>
           <p className="ge">Get a Free Course <br/><span>Guideline consultation</span></p>
           <p className="ge2">Get a free course guildeline from our experts to know about the courses and its standards</p>
           <p className="box8"><p>Get Started&#8594;</p></p>    
            <img className="nine" src={img9} alt="company2" />
           <img className="ten" src={img10} alt="box1" />
           <img className="eleven" src={img11} alt="kodu" />
          <img className="tweleve" src={img12} alt="round" />    
          </div>   
      </section>   
         
    <section className="box7-contact"> 
       <p className="on">Categories</p>
       <p className="we">Select Courses From the list of categories</p> 
          <div className="images">
          <img src={img13} alt="traning1"/>
          <img src={img14} alt="traning2"/>
          <img src={img15} alt="traning3"/>
          <img className="fourteen" src={img16} alt="traning4"/> 
          <img className="fourteen" src={img17} alt="traning5"/>
          <img className="fourteen" src={img18} alt="traning6"/> 
        </div>  
        
           <div className="box7-cont">
           <div>
           <p className="itc">IT Courses</p>
           <p className="our">Our IT Courses are 1 to 1 courses connected directley to the tutor for better understability and beautiful learning experience.Our IT Courses are 1 to 1 courses connected directley to the tutor for better understability and beautiful learning experience.</p>
        <div className="boxes2"> 
          <div>
             <img class="five" src={img5} alt="women"/>
            <span>
            <p>Demand for IT People </p>
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
    </div>
    </div>   
         <img className="thirteen" src={img19} alt="all web"/>
         <p className="ex">Explore Course&#8594;</p> 
       </div>      
    </section> 
         
       <section className="box8-contact">
       <p className="on">Popular courses</p>
       <p className="we">Courses that are popular among the learners</p> 
          <div className="images2">
          <img src={img20} alt="post1"/>
          <img src={img21} alt="post2"/>
          <img className="fiveteen" src={img22} alt="post3"/>
          <img className="fiveteen" src={img23} alt="post3"/> 
        </div>    

          <div className="box8-cont"> 
          <div>
         <p className="do">Don’t have an idea regarding which course to pick?</p>
         <p className="ma">Match your goals to our programes, explore options and map out the path to success</p>
         </div>     
        <img className="sixteen" src={img24} alt="kodu2"/>
         <img className="seventeen" src={img25} alt="round2"/>
         <p className="box9"><p>Get Started&#8594;</p></p> 
         <img className="eighteen" src={img26} alt="kodu2"/>
         <img className="nineteen" src={img27} alt="round3"/>    
        </div>      
    </section>     
 </div>

      )
        }
}



