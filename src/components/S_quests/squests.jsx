import React from 'react'
import ReactPlayer from 'react-player'
import './squests.css'
import VIDEO_PATH from '../assets/r_a.mp4'

const squests = () => {
  return (
    <>
    <div className="road_acc">
      <ReactPlayer url={VIDEO_PATH} controls={true} />
    </div>
    </>
  )
}

export default squests
