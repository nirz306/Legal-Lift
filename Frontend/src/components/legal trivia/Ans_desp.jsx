import React from 'react';

const Ans_desp = ({ desp }) => {
  return (
    <div className='lg:w-[850px] md:w-[600px] sm:w-[90%] p-3 rounded-lg ml-10 mr-10 mt-10 bg-[#FEFDED] lg:text-[30px] md:text-[24px] sm:text-[20px] font-body'>
      {desp}
    </div>
  );
};

export default Ans_desp;