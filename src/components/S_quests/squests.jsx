import React from 'react'
import ReactPlayer from 'react-player'
import './squests.css'
import VIDEO_PATH from '../assets/r_a.mp4'
import { acc } from '../../utilites/constants'
import Block from './Block'

const squests = () => {
  return (
    <>
    <div className="road_acc">
    <Block imageUrl={acc} title="Road Accident" />
      {/* <ReactPlayer url={VIDEO_PATH} controls={true} /> */}
    </div>
    </>
  )
}

export default squests
