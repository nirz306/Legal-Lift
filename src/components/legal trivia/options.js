import React, { useState, useEffect } from 'react';

const Option = ({ ans, a, b, c, d, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    let timeout;
    if (selectedOption !== null) {
      timeout = setTimeout(() => {
        setSelectedOption(null);
        setIsCorrect(null);
      }, 800); // Adjust the delay as needed (1000ms = 1s)
    }
    return () => clearTimeout(timeout);
  }, [selectedOption]);

  const handleClick = (option) => {
    const correctness = option === ans;
    setSelectedOption(option);
    setIsCorrect(correctness);
    onAnswer(correctness);
  };

  const getButtonStyle = (option) => {
    if (selectedOption === option) {
      return isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
    }
    return 'hover:bg-[#B0B0B0] hover:text-white bg-[#FEFDED]';
  };

  return (
    <div className='flex justify sm:flex-row flex-col'>
      <button className={`lg:w-[200px] md:h-[100px] md:w-[150px] sm:w-[110px] w-[250px] h-[70px] ${getButtonStyle('A')}`} onClick={() => handleClick('A')}>{a}</button>
      <button className={`lg:w-[200px] md:h-[100px] md:w-[150px] sm:w-[110px] w-[250px] h-[70px] ${getButtonStyle('B')}`} onClick={() => handleClick('B')}>{b}</button>
      <button className={`lg:w-[200px] md:h-[100px] md:w-[150px] sm:w-[110px] w-[250px] h-[70px] ${getButtonStyle('C')}`} onClick={() => handleClick('C')}>{c}</button>
      <button className={`lg:w-[200px] md:h-[100px] md:w-[150px] sm:w-[110px] w-[250px] h-[70px] ${getButtonStyle('D')}`} onClick={() => handleClick('D')}>{d}</button>
    </div>
  );
};

export default Option;
