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
        desp="The correct action, if a child is in a situation where immediate help is needed and they possess the knowledge to do so, is to offer basic first aid assistance. Providing basic first aid can help stabilize the situation until professional help arrives. This response assumes the child has some basic first aid training and is able to safely provide assistance without putting themselves in danger."
        
        />
      )}

    </div>
    </>
  );
};

export default Road_acc;



 