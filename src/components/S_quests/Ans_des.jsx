import React from 'react';

 export default function Ans_des({ ans,user_ans, description }) {
 
  return (
    <div>
      {ans === user_ans ? (
        <h2>Your Answer is correct</h2>
      ) : (
        <h1>Your Answer is wrong</h1>
      )}
      
      <p>{description}</p>
    </div>
  );
};

// export default Ans_des;

 