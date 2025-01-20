import React, { useState } from 'react';
import VIDEO_PATH from '../assets/Bribe.mp4';
import ReactPlayer from 'react-player';
import Questionaire from './Questionaire';
import { NavLink } from 'react-router-dom';
const Bribe = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const myCallback = () => {
    console.log('Video has ended');
    setShowQuiz(true);
  };
  return (
    <>
     <NavLink className="relative top-8 mx-auto my-6 text-5xl font-[Galada] text-black no-underline cursor-pointer sm:ml-16" to="/">Legal Lift</NavLink>
            <div className="text-center text-4xl font-lato italic my-8 text-gray-700">
               Under the table
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
        question="What is the appropriate action the citizen should take in such a situation?"
        options={[" Offer money to speed up the process.", "Complain to a higher authority about the officer’s behavior.", " Pretend to offer a bribe to get the work done.", "Accept the officer’s rudeness and leave without any action."]}
        ans="b"
        desp="When faced with rudeness and delays in a government office, it is important to address the issue appropriately. Complaining to a higher authority ensures that the officer's behavior is reported and can be investigated. This action not only seeks accountability but also helps improve the system for future citizens. Offering money, even in jest, can perpetuate a culture of corruption, and accepting rudeness without action allows such behavior to continue unchecked. Addressing the issue through proper channels promotes integrity and helps maintain standards of service in public offices."


        
        />
      )}


      </div>
     
    </>
   
  )
}

export default Bribe;
