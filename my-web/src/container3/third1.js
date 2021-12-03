import React, { Component } from 'react';
import img28 from '../images/kama.png';
import img29 from '../images/oi1.png';
import img30 from '../images/oi2.png';
import img31 from '../images/oi3.png';
import img32 from '../images/fi1.png';
import img33 from '../images/fi2.png';
import './third2.css';

export default class Third1 extends Component {
render() {
    return (
      <div class="third-container">
        <div>
          <p className="te">Testimonials</p>
          <p className="lo">Look at what our learners have to say about us: </p>
             <section className="box9-contact">
            <div>
              <img className="twentyone" src={img29} alt="oi1"/>
             <span>
             <p className="ka">S.Kawathri</p>
             <p className="le">Learned Fullstack QA</p>
             <p className="ih">I have always been a person who was interested in delving into development. That's when I came across this course offered by Busyhubs. From the start of the process till I got my certificate, I have had nothing but a pleasurable experience. The course had industrial facts and the syllabus covered almost everything we needed. Now, I am confident with what I am going to endure. The mock interviews helped me a lot. They actually did redefine my learning, I am glad!</p>
          </span>      
          </div>  
            <div className="bo2">
           <img className="twentytwo" src={img30} alt="oi1"/>
            <span>
              <p className="ka">S.Riyaz</p>
              <p className="le">Learned Fullstack QA</p>
              <p className="ih">With respect to client handling and course offers, I have been in awe. They are professional and endorse good courses that need attention right now. Kudos to Busyhubs!</p>
            </span>
           </div>
         <div className="bo3">
          <img className="twentytwo" src={img31} alt="oi1"/>
            <span>
              <p className="ka">R.Priya</p>
              <p className="le">Learned Fullstack QA</p>
              <p className="ih">A lot of options to pick from and kind tutors with amazing knowledge. Really impressed with the kind of knowledge they are sharing. Thanks to Busyhubs for being extremely patient and professional.</p>
            </span>
          </div>   
         </section>    
        </div>
         <img className="twenty" src={img28} alt="kama"/> 
         <img className="twentythree" src={img32} alt="fi1"/> 
         <img className="twentyfour" src={img33} alt="fi2"/>      
        </div>

      )
        }
}