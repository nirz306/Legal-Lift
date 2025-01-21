 


import React, { useState, useEffect } from 'react';
import Ans_des from '../components/S_quests/Ans_des';
import couple2 from "../../src/components/assets/couple2.png";

const Questionaire = ({ question, options, ans, desp }) => {
  const [userAns, setUserAns] = useState("");
  const [showDes, setShowDes] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [correct, setCorrect] = useState(false);

  function handleClick(event, index) {
    const selectedAnswer = event.target.textContent;
    setUserAns(selectedAnswer);
    setSelectedIndex(index);
    setCorrect(selectedAnswer === ans);
    
    // Show Ans_des after 5 seconds
    setTimeout(() => {
      setShowDes(true);
    }, 2000);
  }

  return (
    <>
      <div className="quiz bg-legal-pastel-red p-4 mb-1 w-[1057px] h-[500px] max-[1000px]:w-[800px] mx-auto font-body">
        {!showDes && (
          <div>
            <div className='w-[500px] ml-[350px] max-[1000px]:mx-auto'>
              <h1 id="question" className="text-left mb-6 text-xl font-bold ">{question}</h1>
            </div>
            <div className='flex mr-[50px] h-[285px] w-[820px]'>
              <div className="imag relative h-[285px] ">
                <img className="couple relative max-[1000px]:hidden " src={couple2} alt="" />
              </div>
              <div className="options flex flex-col items-center gap-4 h-[285px] max-[1000px]:ml-[200px]">
                {options.map((option, index) => (
                  <button
                    key={index}
                    className={`w-[400px] h-[60px] rounded shadow transition ${
                      selectedIndex === index
                        ? correct
                          ? "bg-green-500 text-white"
                          : "bg-black text-white"
                        : "bg-legal-yellow hover:bg-legal-green hover:text-black"
                    }`}
                    onClick={(event) => handleClick(event, index)}
                    disabled={showDes} // Disable buttons after selection
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        {showDes && (
          <div className='w-[700px] mx-auto relative mt-[150px] font-body text-[25px]'>
          <Ans_des
            ans={ans}
            user_ans={userAns}
            description={desp}
          />
          </div> 
        )}
      </div>
    </>
  );
};

export default Questionaire;
