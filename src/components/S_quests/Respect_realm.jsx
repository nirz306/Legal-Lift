import React from 'react'
import VIDEO_PATH from '../assets/r_r.mp4'
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
const Respect_realm = () => {
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

export default Respect_realm
