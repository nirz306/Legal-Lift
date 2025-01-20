import React from 'react'
import VIDEO_PATH from '../assets/Tenants.mp4'
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
const Tenants = () => {
  return (
    <>
     <NavLink className="relative top-8 mx-auto my-6 text-5xl font-[Galada] text-black no-underline cursor-pointer sm:ml-16" to="/">Legal Lift</NavLink>
            <div className="text-center text-4xl font-lato italic my-8 text-gray-700">
               Tenant Empowerment
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
           
    </>
   
  )
}

export default Tenants;
