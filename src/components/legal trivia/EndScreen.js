import React from "react";
import { Questions } from "./Questions";
import { NavLink } from "react-router-dom";

const EndScreen = ({ score, totalQuestions }) => {
  console.log("points", score);
  return (
    <>
      <NavLink className="logo" to="/">
        Legal Lift
      </NavLink>
      <div className="EndScreen">
        <h1>Quiz Finished</h1>
        <h1>
          {score} / {totalQuestions}
        </h1>
      </div>
    </>
  );
};


export default EndScreen;