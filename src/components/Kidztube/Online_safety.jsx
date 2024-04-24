import React from 'react'
import VIDEO_PATH from '../assets/Online_safety.mp4'
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
const Online_safety = () => {
  return (
    <>
     <NavLink className="logo" to="/">
        Legal Lift
      </NavLink>
     <div className='player'>
     <ReactPlayer url={VIDEO_PATH} controls={true} />
    </div>
    </>
   
  )
}

export default Online_safety;

