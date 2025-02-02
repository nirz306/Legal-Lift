import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Questionaire from '../../reusables/Questionaire';
import { NavLink } from 'react-router-dom';
import VIDEO_PATH from '../assets/r_a.mp4';

const Road_acc = () => {
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
              question="IF YOU WERE IN A POSITION SIMILAR TO THAT OF THE CHILD, WHAT ACTION WOULD YOU TAKE UPON WITNESSING A ROAD ACCIDENT? SELECT THE MOST LIKELY OPTION YOU WOULD PERFORM."
              options={[
                "Seek out an adult nearby for help.",
                "Offer basic first aid assistance if possible",
                "Utilize a phone to contact emergency services.",
                "Give priority to your own safety in hazardous situations.",
              ]}
              ans="Offer basic first aid assistance if possible"
              desp="The correct action, if a child is in a situation where immediate help is needed and they possess the knowledge to do so, is to offer basic first aid assistance. Providing basic first aid can help stabilize the situation until professional help arrives. This response assumes the child has some basic first aid training and is able to safely provide assistance without putting themselves in danger."
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Road_acc;

 

