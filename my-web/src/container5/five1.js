import React, { Component } from 'react';
import img39 from '../images/computer.png';
import img40 from '../images/mad1.png';
import img41 from '../images/mad2.png';
import img42 from '../images/mad3.png';
import './five2.css';

export default class Five1 extends Component {
render() {
    return (
    <div class="five-container">
      <div>  
        <p className="wy">Why Busyhubs</p>
        <p className="ev">Everything you need to know about us</p>
         <img className="thirty" src={img39} alt="computer"/>   
    </div>
         <section className="one">
        <img className="thirtyone" src={img40} alt="mad1"/>
        <div>
        <p className="ha">Handpicked & Certified Tutors</p>
        <p className="wh">We have tutors who are experts in their fields and who are carefully<br/> hand-picked through scrutinising screening processes. We give to you <br/>the best tutors from an enormous number of interested ones. </p>
        </div>
      </section>

      <section className="two">
        <img className="thirtytwo" src={img41} alt="mad2"/>
        <div>
        <p className="ha">Your convenience is our success</p>
        <p className="wh">You can pick the type and the time of the session, and learn at <br/>the comfort of your home. </p>
        </div>
      </section>

      <section className="three">
        <img className="thirtythree" src={img42} alt="mad3"/>
        <div>
        <p className="ha"> Flexible and ease of use:</p>
        <p className="wh">You can develop your skills using our interactive learning platform<br/> equipped with the latest technologies. We are always there to ensure that<br/> you get the best learning experience at ease. </p>
        </div>
      </section>     
    </div>       
    )
        }
}