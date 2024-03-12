// Respect_realm
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './squests.css';
import VIDEO_PATH from '../assets/r_a.mp4';
import Questionaire from './Questionaire';

const Respect_realm = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const myCallback = () => {
    console.log('Video has ended');
    setShowQuiz(true);
  };

  return (
    <div className='container'>
      <div className="Respect_realm">
        <ReactPlayer url={VIDEO_PATH} controls={true} onEnded={myCallback} />
      </div>

      {showQuiz && (
        <Questionaire 
        question="If you were in the child's position, what action would you take?"
        options={["Seek out an adult nearby for help.", "Offer basic first aid assistance if possible", "Utilize a phone to contact emergency services.", "Give priority to your own safety in hazardous situations."]}
        ans="b"
        />
      )}

    </div>
  );
};

export default Respect_realm;



 