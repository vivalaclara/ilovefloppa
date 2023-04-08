import React from 'react';
import './Home.css'
import caracalpc from './images/caracalpc.jpg' //clickable image that redirects to my github profile
import ilovefloppa from './images/ilovefloppa.jpg' //the image for I LOVE FLOPPA
import {Link} from "react-router-dom";
const Home = () => {
    return (
      <div className="screen">
        <div className='bar'>
            <div className='githcontainer'> <a href="https://github.com/vivalaclara"> 
             <img src={caracalpc} className='imggithub' alt="floppa typing" /> 
            </a> </div>
            <div className='buttonscontainer'> <Link to={'/floppatv'}><button className='barbutton'> FLOPPA TV</button></Link>
            <Link to="/floppaquiz"><button className='barbutton'> FLOPPA QUIZ</button></Link>
            <Link to={'/iconicfloppa'}><button className='barbutton'> ICONIC FLOPPA</button></Link>
             </div>
            </div>
         <div className='homepagedecor'>
            <div className='hpdecorcontainer'>
            <p className='ilovefloppatxt'> I LOVE FLOPPA</p>
              <img className='ilovefloppaimg' src={ilovefloppa} alt="an orange and yellow heart with a caracal cat inside" /> 
            <div className='introtxt'> <p className='introduction'>Hello! My name is Clara, I'm a dev from Brazil. I made this web app as a fun tribute to my favorite animal: the caracal.
            I hope you have a nice experience! To see my other work, click on the floppa typing at the top. Enjoy ♡</p></div>
            </div>
        </div>

      </div>
    );
  }
  
  export default Home;
  