import React from 'react';

const BlogPost = ({ imageSrc, link, altText, quote }) => {
  return (
    <div className="imageWithQuote">
      <div className="imageContainer">
        <a className="link" href={link} target="_blank" rel="noopener noreferrer">
          <img className='blogg' src={imageSrc} alt={altText} />
        </a>
      </div>
      <div className="quoteContainer">
        <h3>{quote}</h3>
      </div>
    </div>
  );
};

export default BlogPost;