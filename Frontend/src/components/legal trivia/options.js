import React, { useState, useEffect } from "react";
import Ans_desp from "./Ans_desp";

const Option = ({ ans, a, b, c, d, description, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    // Reset states when the component mounts or when the question changes
    setSubmit(false);
    setSelectedOption(null);
    setIsCorrect(null);
  }, [a, b, c, d, description]); // sagle options che content reset karta and description pan reset karta

  const handleClick = (option) => {
    const correctness = option === ans;
    setSelectedOption(option);
    setSubmit(true);
    setIsCorrect(option === ans);
  };

  const getButtonStyle = (option) => {
    if (selectedOption === option) {
      return isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white"; //button color update karayla
    }
    return "hover:bg-[#B0B0B0] hover:text-white bg-[#FEFDED] hover:border-black";
  };

  const handleNextques = () => {
    onAnswer(isCorrect); //he parat return karta to quiz2 true/false to help in writing the score
  };

  return (
    <>
      <div className="flex justify sm:flex-row flex-col gap-4 ">
        
        <button
          className={`lg:w-[200px] md:h-[100px] md:w-[150px] sm:w-[110px] w-[250px] h-[70px]  rounded-lg border-2 border-[#f7f08eb7] md:mt-0 mt-3 ${getButtonStyle(
            "A"
          )}`}
          onClick={() => handleClick("A")}
        >
          {a}
        </button>

        <button
          className={`lg:w-[200px] md:h-[100px] md:w-[150px] sm:w-[110px] w-[250px] h-[70px]  rounded-lg border-2 border-[#f7f08eb7] md:mt-0 mt-3 ${getButtonStyle(
            "B"
          )}`}
          onClick={() => handleClick("B")}
        >
          {b}
        </button>
        <button
          className={`lg:w-[200px] md:h-[100px] md:w-[150px] sm:w-[110px] w-[250px] h-[70px]   rounded-lg border-2 border-[#f7f08eb7]  md:mt-0 mt-3 ${getButtonStyle(
            "C"
          )}`}
          onClick={() => handleClick("C")}
        >
          {c}
        </button>
        <button
          className={`lg:w-[200px] md:h-[100px] md:w-[150px] sm:w-[110px] w-[250px] h-[70px]   rounded-lg border-2 border-[#f7f08eb7] md:mt-0 mt-3  ${getButtonStyle(
            "D"
          )}`}
          onClick={() => handleClick("D")}
        >
          {d}
        </button>
      </div>
      {submit && <Ans_desp desp={description} />}
      {submit && (
        <button
          onClick={handleNextques}
          className="border mt-[100px] bg-[#A1C398] rounded-lg p-4 hover:bg-[#728b6c]"
        >
          Next Question
        </button>
      )}
    </>
  );
};

export default Option;
