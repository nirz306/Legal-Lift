import React from 'react';
import VIDEO_PATH from '../assets/c_f.mp4';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';


const Consumer = () => {
  return (
    <>
     <div className=" min-h-screen flex flex-col ">
         <NavLink className="relative mx-auto my-6 text-5xl font-[Galada] text-black no-underline cursor-pointer sm:ml-16" to="/">Legal Lift</NavLink>
           <div className="text-center text-4xl font-heading w-max mx-auto text-legal-pastel-red my-[20px]">
           Consumer Rights and Protection      </div>
             <div className="w-full max-w-xl border-4 border-legal-green rounded-lg overflow-hidden align-center justify-center mx-auto ">
               <ReactPlayer 
                 url={VIDEO_PATH} 
                 controls={true} 
                 width="100%" 
                 height="auto" 
               />
             </div>
           </div>
    </>
  );
}

export default Consumer;
