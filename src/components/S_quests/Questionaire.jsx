import React, { useState } from 'react';
 
import Ans_des from './Ans_des';


//options is an array having options
const Questionaire = ({question , options , ans ,desp} ) => {
  const [user_ans, setUserAns] = useState(""); // Initialize user_ans state
  const [optionChosen, setOptionChosen] = useState("");

  // Hook for handling after submit action
  const [showDes, setShowDes] = useState(false);

  // Handle click event on option buttons
  function handleClick(event) {
    console.log(event.target);
    setUserAns(event.target.className);
    console.log("user_ans is ", user_ans);
  }


  const optionChoosen = (option)=>{
    setOptionChosen(option);
  }
  // Handle submit button click
  function handleSubmit() {
    setShowDes(true);
  }

  
  return (
    <>
      <div className="quiz">
        <h1 id="question">{question}</h1>
        <div className="options">
          <button className="a" onClick={handleClick}>
            {options[0]}
          </button>
          <button className="b" onClick={handleClick}>
            {options[1]}
          </button>
          <button className="c" onClick={handleClick}>
            {options[2]}
          </button>
          <button className="d" onClick={handleClick}>
            {options[3]}
          </button>
        </div>
        <div className="submit" onClick={handleSubmit}>
          Submit
        </div>
      </div>
      {showDes && (
        <Ans_des
          ans={ans}
          user_ans={user_ans}
          description={desp}
        />
      )}
    </>
  )
}

export default Questionaire