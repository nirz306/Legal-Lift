import React, { useEffect } from "react";
import { useContext } from "react";
import { GameStateContext } from "../../helpers/Contexts";
import { Questions } from "./Questions";

const EndScreen = () => {
  const { score, setScore, setGameState, userName } = useContext(
    GameStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  // useEffect(()=>{
  //   console.log(score);
  // },[])

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      
      <h1>
        {score} / {Questions.length}
      </h1>
      {/* <button id="startquiz" onClick={restartQuiz}>Restart Quiz</button> */}
    </div>
  );
};

export default EndScreen;