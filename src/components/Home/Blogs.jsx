import React from 'react';
import "./blogs.css";

const Blogs = ({ image, title }) => {
  return (
    <div className='container1'>
      <div className="image-container">
        <img src={image}></img>
      </div>
      
      <div className="title">{title}</div>
      read more
    </div>
  );
};

export default Blogs;
