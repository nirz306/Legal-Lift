 import VIDEO_PATH from '../assets/sexual_harresment.mp4';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Questionaire from '../../reusables/Questionaire';
import { NavLink } from 'react-router-dom';

const Sexualharras = () => {

  const [showQuiz, setShowQuiz] = useState(false);
  
    const myCallback = () => {
      console.log('Video has ended');
      setShowQuiz(true);
    };
    
  return (
    <>
    <NavLink className="text-[50px] font-heading" to="/">
              Legal Lift
            </NavLink>
     <div className="flex flex-col items-center justify-center  space-y-8">
       <div className="player">
         <ReactPlayer url={VIDEO_PATH} controls={true} onEnded={myCallback} />
       </div>

       <div className="md:w-[1057px] font-body mb-3 w-[480px] ">
         {showQuiz && (
           <Questionaire
           question="IF YOU WERE IN A POSITION SIMILAR TO THAT OF THE INDIVIDUAL WITNESSING SEXUAL HARASSMENT, WHAT ACTION WOULD YOU TAKE TO ADDRESS THE SITUATION? SELECT THE MOST APPROPRIATE RESPONSE."
           options={[  
             "Confront the harasser directly and demand they stop.",  
             "Report the incident to a trusted authority or organization.",  
             "Offer support to the victim and encourage them to seek help.",  
             "Ignore the situation to avoid personal involvement.",  
           ]}  
           ans="Report the incident to a trusted authority or organization."  
           desp="The correct action when witnessing sexual harassment is to report the incident to a trusted authority or organization. Taking this step ensures that the situation is addressed appropriately and helps protect the victim. This response highlights the importance of accountability and structured intervention while prioritizing the victim’s safety and well-being."             
           />
         )}
       </div>
     </div>
   </>
  )
}

export default Sexualharras;
