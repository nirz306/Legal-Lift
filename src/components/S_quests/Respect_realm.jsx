import React, { useState } from 'react';
import VIDEO_PATH from '../assets/r_r.mp4'
import ReactPlayer from 'react-player';
import Questionaire from './Questionaire';
import { NavLink } from 'react-router-dom';
const Respect_realm = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const myCallback = () => {
    console.log('Video has ended');
    setShowQuiz(true);
  };
  return (
    <>
     <NavLink className="relative top-8 mx-auto my-6 text-5xl font-[Galada] text-black no-underline cursor-pointer sm:ml-16" to="/">Legal Lift</NavLink>
     <div className="text-center text-4xl font-lato italic my-8 text-gray-700">
        Respect Realm
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
              <div className="mt-[-155px] w-full max-w-xl border-4 border-gray-300 rounded-lg overflow-hidden">
                <ReactPlayer 
                  url={VIDEO_PATH} 
                  controls={true} 
                  width="100%" 
                  height="auto" 
                />
              </div>
            </div>
      <div>
          {showQuiz && (
        <Questionaire 
        question="Which of the following is the correct step Anita should take in this situation?"
        options={[" Ignore the comments and continue walking.", "Confront the boys and try to handle the situation herself.", " Seek help from a nearby authority figure or call a helpline.", "Respond with equally inappropriate comments to assert dominance."]}
        ans="c"
        desp="In situations where someone is subjected to inappropriate comments or harassment, it is important to prioritize safety and seek assistance. Approaching a nearby authority figure, such as a security guard or police officer, can help address the situation safely. Alternatively, calling a helpline designed to support individuals facing harassment ensures that the issue is documented and that appropriate steps are taken to resolve it."
        
        />
      )}

      </div>
     
    </>
   
  )
}

export default Respect_realm
