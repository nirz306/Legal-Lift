import React from 'react';

const Cards = ({ color, desp, title, image }) => {
  return (
    <div className={`bg-[${color}] rounded-[15px] ml-[50px] h-[200px] w-[400px] mb-[50px] transition ease-in-out delay-150 hover:-translate-x-2 hover:-translate-y-3 hover:shadow-lg duration-300`}>
      <div>
        <img
          className="cov w-[150px] mt-[25px] absolute"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col ml-[170px]">
        <div>
          <p className="tit text-[30px]">{title}</p>
        </div>
        <div className="content w-[220px] text-[20px]">
          <p>{desp}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
