import "./quiz.css";
import { Questions } from "./Questions";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState("");
  const [ans, setAns] = useState("next");
  //jar answer right asel tar tyala green kar and if wrong asel tar red and next question var switch kelyavar tyala back to no color state

  const chooseOption = (option) => {
    setOptionChosen(option);
    check_Ans(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }

    document.getElementById("a").style.background = "white";
    document.getElementById("a").style.color = "black";
    document.getElementById("b").style.background = "white";
    document.getElementById("b").style.color = "black";
    document.getElementById("c").style.background = "white";
    document.getElementById("c").style.color = "black";
    document.getElementById("d").style.background = "white";
    document.getElementById("d").style.color = "black";

    setAns("next");

    setCurrentQuestion(currentQuestion + 1);
  };

  const check_Ans = (option) => {
    if (Questions[currentQuestion].asnwer == option) {
      console.log(option);
      console.log("correct answer");

      setAns("correct");

      if (option == "optionA")
        document.getElementById("a").style.backgroundColor = "green";
      if (option == "optionB")
        document.getElementById("b").style.backgroundColor = "green";
      if (option == "optionC")
        document.getElementById("c").style.backgroundColor = "green";
      if (option == "optionD")
        document.getElementById("d").style.backgroundColor = "green";
    } else {
      console.log(option);
      console.log("wrong answer");
      console.log("score: ", score);

      setAns("wrong");

      if (option == "optionA")
        document.getElementById("a").style.backgroundColor = "red";
      if (option == "optionB")
        document.getElementById("b").style.backgroundColor = "red";
      if (option == "optionC")
        document.getElementById("c").style.backgroundColor = "red";
      if (option == "optionD")
        document.getElementById("d").style.backgroundColor = "red";
    }
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  console.log("final score", score); //here the score value showing correctly

    if(gameState === "finished")
    {
      return(
        <>
         <NavLink className="logo" to="/">
        Legal Lift
      </NavLink>
      <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h1>
        {score} / {Questions.length}
      </h1>
    </div>
    </>) 
    }

  else return (
    <>
      <NavLink className="logo" to="/">
        Legal Lift
      </NavLink>
      <div className="Quiz">
        <h1 id="Ques">{Questions[currentQuestion].prompt}</h1>
        <div className="questions">
          <button
            id="a"
            onClick={() => {
              chooseOption("optionA");
            }}
          >
            {Questions[currentQuestion].optionA}
          </button>

          <button
            id="b"
            onClick={() => {
              chooseOption("optionB");
            }}
          >
            {Questions[currentQuestion].optionB}
          </button>

          <button
            id="c"
            onClick={() => {
              chooseOption("optionC");
            }}
          >
            {Questions[currentQuestion].optionC}
          </button>

          <button
            id="d"
            onClick={() => {
              chooseOption("optionD");
            }}
          >
            {Questions[currentQuestion].optionD}
          </button>
        </div>

        {currentQuestion == Questions.length - 1 ? (
          <Link>
            <button onClick={finishQuiz} id="nextQuestion">
              Finish Quiz
            </button>
          </Link>
        ) : (
          <button onClick={nextQuestion} id="nextQuestion">
            Next Question
          </button>
        )}
      </div>
    </>
  );
}

export default Quiz;
