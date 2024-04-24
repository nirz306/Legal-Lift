import React from 'react'
import VIDEO_PATH from '../assets/On_shopping.mp4'
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
const Online_shop = () => {
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

export default Online_shop;

