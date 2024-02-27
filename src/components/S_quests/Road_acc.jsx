import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './squests.css';
import VIDEO_PATH from '../assets/r_a.mp4';

const Road_acc = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const myCallback = () => {
    console.log('Video has ended');
    setShowQuiz(true);
  };

  return (
    <div className='container'>
      <div className="road_acc">
        <ReactPlayer url={VIDEO_PATH} controls={true} onEnded={myCallback} />
      </div>
      {showQuiz && (
        <div className="quiz">
          <div className="options">
            <h1 id='question'>If you were in the child's position, what action would you take?</h1>
            <button className="a">Seek out an adult nearby for help. </button>
            <button className="b">Offer basic first aid assistance if possible</button>
            <button className="c">Utilize a phone to contact emergency services.</button>
            <button className="d">Give priority to your own safety in hazardous situations.</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Road_acc;
