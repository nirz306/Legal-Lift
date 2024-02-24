import React from 'react'
import ReactPlayer from 'react-player'
import './squests.css'
import VIDEO_PATH from '../assets/r_a.mp4'

const Road_acc = () => {
  return (
    <div>
      <>
    <div className="road_acc">
      <ReactPlayer url={VIDEO_PATH} controls={true} />
    </div>
    </>
    </div>
  )
}

export default Road_acc;
