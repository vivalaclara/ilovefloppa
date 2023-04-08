import React from "react";
import YouTube from 'react-youtube';
import caracalpc from './images/caracalpc.jpg';
import babyfloppa from './images/babyfloppa.png'
import { Link } from "react-router-dom";
import './FloppaTv.css'

const FloppaTv = () => {
  // playlist ID
  const playlistId = 'PLaoARwOEl9lU8_6NA8UlFhFlQOrHM0jgP';

  // player options
  const opts = {
    playerVars: {
      // enable autoplay
      autoplay: 1,
      // specifying the playlist
      listType: 'playlist',
      list: playlistId,
    },
  };

  return (
    <div className="screen">
      <div className='bar'>
        <div className='githcontainer'>
          <a href="https://github.com/vivalaclara">
            <img src={caracalpc} className='imggithub' alt="floppa typing" />
          </a>
        </div>
        <div className='buttonscontainer'>
          <Link to={'/'}><button className='barbutton'> HOME</button></Link>
          <Link to="/floppaquiz"><button className='barbutton'> FLOPPA QUIZ</button></Link>
          <Link to={'/iconicfloppa'}><button className='barbutton'> ICONIC FLOPPA</button></Link>
        </div>
      </div>
      <div className="videoframe"><div className="videocontainer">  <YouTube opts={opts} /></div> </div>
      <div className="bottomimg"> <img className="babyfloppa" src={babyfloppa} alt="a baby caracal with orange hearts" /></div>
      
      
    </div>
  );
};

export default FloppaTv;
