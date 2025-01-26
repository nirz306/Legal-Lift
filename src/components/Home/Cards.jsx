import React from 'react';

const Cards = ({ color, desp, title, image }) => {
  return (
    <div className={`bg-[${color}] rounded-[15px] h-[200px] w-full max-w-[400px] mb-[30px] p-4 transition ease-in-out delay-150 hover:-translate-x-2 hover:-translate-y-3 hover:shadow-lg duration-300 flex flex-col md:flex-row items-center`}>
      <div className="flex-shrink-0">
        <img
          className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-contain"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col ml-0 md:ml-4 mt-2 md:mt-0 text-center md:text-left margin-top:-0.5rem">
        <div>
          <p className="text-lg md:text-2xl font-semibold margin-[-4px]">{title}</p>
        </div>
        <div className="text-sm md:text-base mt-0">
          <p>{desp}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
