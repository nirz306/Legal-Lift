import React, { useState } from 'react';
import data from "./Questions2";
import Option from './options';
import { NavLink } from 'react-router-dom';
import reward from "../assets/reward.png";
import Logo from '../../helpers/Logo';

const Quiz2 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleNextQuestion = (isCorrect) => {
    setIsCorrect(null);
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setResult(true);
    }
  };

  return (
    <>
   
    <Logo/>  
      {/* result page */}
    <div className='flex items-center justify-center min-h-screen'>
      {result ? (
        <>
        <div className='flex flex-col p-0'>

        <div className='flex flex-col'>
          
            <div className='text-center text-[60px]'>Congratulations</div>
            <img className="w-[100px]"src={reward} alt="reward" />
            <h2 className='text-center mt-6 font-bold'>
              You have scored {score} out of {data.length} !!
            </h2>
          
        </div>

        </div>
        </>
      ) : (
        <div className='questions flex flex-col items-center '>
          <div className="text-black text-[30px] md:text-[50px] font-bold ml-7 mr-7">{data[currentQuestionIndex].ques}</div>
          <Option
            ans={data[currentQuestionIndex].ans}
            a={data[currentQuestionIndex].A}
            b={data[currentQuestionIndex].B}
            c={data[currentQuestionIndex].C}
            d={data[currentQuestionIndex].D}
            description={data[currentQuestionIndex].desp}
            onAnswer={handleNextQuestion}
          />
        </div>
      )}
    </div>
    </>
  );
};

export default Quiz2;
