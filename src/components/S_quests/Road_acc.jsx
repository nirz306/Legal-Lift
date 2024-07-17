import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './squests.css';
import VIDEO_PATH from '../assets/r_a.mp4';
import Questionaire from './Questionaire';
import { NavLink } from 'react-router-dom';


const Road_acc = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const myCallback = () => {
    console.log('Video has ended');
    setShowQuiz(true);
  };

  return (
    <>
  <NavLink className="logo" to="/">
        Legal Lift
      </NavLink>
    <div className='container'>
      <div className="player">
        <ReactPlayer url={VIDEO_PATH} controls={true} onEnded={myCallback} />
      </div>

      {showQuiz && (
        <Questionaire 
        question="If you were in the child's position, what action would you take?"
        options={["Seek out an adult nearby for help.", "Offer basic first aid assistance if possible", "Utilize a phone to contact emergency services.", "Give priority to your own safety in hazardous situations."]}
        ans="b"
        desp="hello"
        
        />
      )}

    </div>
    </>
  );
};

export default Road_acc;



 