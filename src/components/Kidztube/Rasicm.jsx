import React from 'react'
import ReactPlayer from 'react-player'
import VIDEO_PATH from '../assets/rascism.mp4'
const Rasicm = () => {
  return (
    <div>
      <div className="road_acc">
        <ReactPlayer url={VIDEO_PATH} controls={true} />
      </div>
    </div>
  )
}

export default Rasicm
