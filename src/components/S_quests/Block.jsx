import React from 'react'

function Block({ imageUrl, title }) {
    return (
      <div className="w-[400px]  hover:shadow hover:rounded-2xl mx-auto justify-center align-center h-auto transform transition-transform duration-300 hover:scale-110">
        <img className='image' src={imageUrl} alt={title} />
        
      </div>
    );
  }
  

export default Block
