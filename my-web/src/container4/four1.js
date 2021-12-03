import React, { Component } from 'react';
import img34 from '../images/box5.png';
import img35 from '../images/all box.png';
import img38 from '../images/all box2.png';
import img36 from '../images/kodu3.png';
import img37 from '../images/box4.png';
import './four2.css';

export default class Four1 extends Component {
render() {
    return (
      <div class="four-container">
         <img className="twentyfive" src={img34} alt="box5"/>
          <img className="twentysix" src={img35} alt="all box"/>
          <img className="twentynine" src={img38} alt="all box2"/>
          <img className="twentyseven" src={img36} alt="kodu3"/>
           <section>
            <p className="ach">Achievements </p>
            <p className="at"> We, at Busyhubs, have created a strong network of learners and tutors over the past couple of years and the community has only been flourishing since then. They are well-informed about the recent trends and developments.<br/><br/> We have been able to place a few of our learners in the industry with opportunities that have made their dreams come true. Come join us on the journey to revolutionised learning. </p>
         </section>  
       <img className="twentyeight" src={img37} alt="box4"/>    
      </div>    
        

      )
        }
}