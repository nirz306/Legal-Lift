import React from 'react'

function Block({ imageUrl, title }) {
    return (
      <div className="w-[400px] p-3 hover:shadow hover:rounded-lg">
        <img className='image' src={imageUrl} alt={title} />
        
      </div>
    );
  }
  

export default Block
