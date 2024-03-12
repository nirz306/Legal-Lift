import React, { useState } from 'react';
import './squests.css';
import Ans_des from './Ans_des';


//options is an array having options
const Questionaire = ({question , options , ans} ) => {
  const [user_ans, setUserAns] = useState(""); // Initialize user_ans state
  
  // Hook for handling after submit action
  const [showDes, setShowDes] = useState(false);

  // Handle click event on option buttons
  function handleClick(event) {
    setUserAns(event.target.className);
    console.log("user_ans is ", user_ans);
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
          description="This is the description"
        />
      )}
    </>
  )
}

export default Questionaire