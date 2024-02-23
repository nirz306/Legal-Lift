import React from 'react'

function Block({ imageUrl, title }) {
    return (
      <div className="block">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
      </div>
    );
  }
  

export default Block
