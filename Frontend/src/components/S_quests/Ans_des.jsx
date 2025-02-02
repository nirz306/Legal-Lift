import React from 'react';

 export default function Ans_des({ ans,user_ans, description }) {
 
  return (
    <div className='w-[700px]'>
      {ans === user_ans ? (
        <div className='mx-auto w-max text-[30px] font-bold'>Your Answer is correct</div>
      ) : (
        <div className='mx-auto w-max text-3xl font-bold'>Your Answer is wrong!</div>
      )}
      
      <p>{description}</p>
    </div>
  );
};

// export default Ans_des;

 