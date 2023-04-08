import React from 'react';
import caracalpc from './images/caracalpc.jpg' //clickable image that redirects to my github profile
import gosha from './images/gosha.jpg' //a photo of gosha (original big floppa)
import pumba from './images/pumba.jpg' //a photo of pumba (@pumbacaracal)
import caracalishche from './images/caracalishche.jpg' //a photo of rosa, marx & clara from caracalishche
import {Link} from "react-router-dom";
import './IconicFloppa.css';

const IconicFloppa = () => {
    return (
      <div className="screen">
        <div className='bar'>
            <div className='githcontainer'> <a href="https://github.com/vivalaclara"> 
             <img src={caracalpc} className='imggithub' alt="floppa typing" /> 
            </a> </div>
            <Link to={'/'}> <button className='barbutton'> HOME</button> </Link> 
            <div className='buttonscontainer'> <Link to={'/floppatv'}><button className='barbutton'> FLOPPA TV</button></Link>
            <Link to="/floppaquiz"><button className='barbutton'> FLOPPA QUIZ</button></Link>
            </div>
            </div>
            <div className='contentcontainer'>
              <p className='title'> ICONIC FLOPPA</p>
              <p className='subtitle'> a collection of floppas that I've consistently 
              followed on social media and links to their profiles</p>
              <div className='iconicfloppas'>
              <div className='photocontainer'> <img src={gosha} alt="gosha, the og big floppa"  />
               <p className='floppaname'> GOSHA </p>
               <p className='socialmedia'> @prozhony </p>
               <Link to="https://www.instagram.com/prozhony/"> <button className='followbtn'> FOLLOW </button> </Link>
              </div>
              <div className='photocontainer'> <img src={pumba} alt="pumba, world famous hiss"  />
               <p className='floppaname'> PUMBA </p>
               <p className='socialmedia'> @pumbacaracal </p>
               <Link to="https://www.instagram.com/pumbacaracal/"> <button className='followbtn'> FOLLOW </button> </Link>
              </div>
              <div className='photocontainer'> <img src={caracalishche} alt="marx, rosa & clara, iconic trio"  />
               <p className='floppaname'> MARX, ROSA & CLARA </p>
               <p className='socialmedia'> @caracalishche </p>
               <Link to="https://www.instagram.com/caracalishche/"> <button className='followbtn'> FOLLOW </button> </Link>
              </div>
              </div>
               </div>
            
      </div>
    );
  }
  
  export default IconicFloppa;
  