import React from 'react'
import './squests.css'

function Block({ imageUrl, title }) {
    return (
      <div className="block">
        <img className='image' src={imageUrl} alt={title} />
        
      </div>
    );
  }
  

export default Block
