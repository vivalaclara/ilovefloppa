import React from 'react';
import './Results.css';
import caracalpc from './images/caracalpc.jpg'; //clickable image that redirects to my github profile
import resultsimg from './images/resultsimg.png';
import { useLocation, Link } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const score = location.state.score; //retrieve score from quiz page
  return (   
 <div className="screen">
  <div className='bar'>
      <div className='githcontainer'> <a href="https://github.com/vivalaclara"> 
       <img src={caracalpc} className='imggithub' alt="floppa typing" /> 
      </a> </div>
      <div className='buttonscontainer'>  <Link to="/"> <button className='barbutton'>HOME</button></Link> <Link to={'/floppatv'}><button className='barbutton'> FLOPPA TV</button></Link>
            <Link to={'/iconicfloppa'}><button className='barbutton'> ICONIC FLOPPA</button></Link>
             </div>
      </div> 
       <div className='contentcontainer'> 
       <div className='resultscontainer'>
          <p className='resultstitle'>YOUR QUIZ RESULTS</p>
          <p className='scorelabel'>YOUR SCORE:</p>
          <p className='points'> {score} FLOPPA POINTS</p>      
          <img src={resultsimg} className='imgresults' alt="a floppa in a party hat, it's happy to see you! :)" /> 
          <Link to="/floppaquiz"><button className='quizbtn'>RETAKE</button></Link>
          </div>
      </div>
      
      </div>
       );

    
}
export default Results;