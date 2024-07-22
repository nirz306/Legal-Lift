import React, { useState, useEffect } from 'react';
import Ans_desp from './Ans_desp';

const Option = ({ ans, a, b, c, d, description, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    // Reset states when the component mounts or when the question changes
    setSubmit(false);
    setSelectedOption(null);
    setIsCorrect(null);
  }, [a, b, c, d, description]);

  const handleClick = (option) => {
    const correctness = option === ans;
    setSelectedOption(option);
    setIsCorrect(correctness);
    onAnswer(correctness,option);
  };

  const getButtonStyle = (option) => {
    if (selectedOption === option) {
      return isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
    }
    return 'hover:bg-[#B0B0B0] hover:text-white bg-[#FEFDED]';
  };

  const handleNextques = () => {
    onAnswer(isCorrect);
  };

  return (
    <>
      <div className='flex justify sm:flex-row flex-col'>
        <button
          className={`lg:w-[200px] md:h-[100px] md:w-[150px] sm:w-[110px] w-[250px] h-[70px] ml-3 ${getButtonStyle('A')}`}
          onClick={() => handleClick('A')}
        >
          {a}
        </button>
        <button
          className={`lg:w-[200px] md:h-[100px] md:w-[150px] sm:w-[110px] w-[250px] h-[70px] ml-3 ${getButtonStyle('B')}`}
          onClick={() => handleClick('B')}
        >
          {b}
        </button>
        <button
          className={`lg:w-[200px] md:h-[100px] md:w-[150px] sm:w-[110px] w-[250px] h-[70px] ml-3 ${getButtonStyle('C')}`}
          onClick={() => handleClick('C')}
        >
          {c}
        </button>
        <button
          className={`lg:w-[200px] md:h-[100px] md:w-[150px] sm:w-[110px] w-[250px] h-[70px] ml-3 ${getButtonStyle('D')}`}
          onClick={() => handleClick('D')}
        >
          {d}
        </button>
      </div>
      {submit && (
        <Ans_desp desp={description} />
      )}
      {submit && (
        <button onClick={handleNextques} className='border mt-[100px]'>Next Question</button>
      )}
    </>
  );
};

export default Option;
