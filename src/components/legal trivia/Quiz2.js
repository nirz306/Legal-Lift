import React, { useState } from 'react';
import data from "./Questions2";
import Option from './options';
import { Link } from 'react-router-dom';
import reward from "../assets/reward.png";
import { NavLink } from "react-router-dom";

const Quiz2 = () => {
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    setIsCorrect(null);
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setResult(true);
    }
  };

  const handleAnswer = (isCorrect) => {
    setIsCorrect(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }
    setTimeout(handleNextQuestion, 800);
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      {/* result page  */}
      {result ? (
        <div className='mb-10'>
          <NavLink className="logo1" to="/">
            Legal Lift
          </NavLink>
          <div className="EndScreen">
            <h1>Result</h1>
            <img src={reward} alt="reward" />
            <h2>
              You have scored {score} out of {data.length} !!
            </h2>
          </div>
        </div>
      ) : (
        <div className='questions flex flex-col items-center'>
          <div className="text-black text-[30px] md:text-[50px] font-bold">{data[currentQuestionIndex].ques}</div>
          <Option
            ans={data[currentQuestionIndex].ans}
            a={data[currentQuestionIndex].A}
            b={data[currentQuestionIndex].B}
            c={data[currentQuestionIndex].C}
            d={data[currentQuestionIndex].D}
            onAnswer={handleAnswer}
          />
          {isCorrect !== null && (
            <p className={`text-3xl font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
              {isCorrect ? "Correct!" : "Incorrect!"}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz2;
