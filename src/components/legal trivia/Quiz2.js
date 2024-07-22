import React, { useState,useEffect } from 'react';
import Option from './options';
import reward from "../assets/reward.png";
import { NavLink,useNavigate } from "react-router-dom";
import axios from 'axios';

const Quiz = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [questions,setQuestions] = useState([]);

  const handleNextQuestion = () => {
    setIsCorrect(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setResult(true);
    }
  };
  
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        console.log("Fetching the quiz questions");
        const response = await axios.get('http://localhost:4000/api/Questions');
        console.log("Questions fetched: ", response.data);
        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching the data: ", error);
        setErrorMsg("Failed to load questions.");
        setLoading(false);
      }
    };

    fetchQuizData();
  }, []);
  const handleAnswer = ( isCorrect,option) => {
    setIsCorrect(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }
    setUserAnswers((prevAnswers) => [...prevAnswers, option]);
    setTimeout(() => {
      setIsCorrect(null);
      handleNextQuestion();
    }, 800);    
  };

  const sendResult =()=>{
    axios.post('http://localhost:4000/api/answers',{ans:userAnswers})
    .then(response =>{
      console.log("Answers data saved sucessfully",response.data);
      navigate("/");
    }).catch(error =>{
      console.error('Error svaing the answers');
      setErrorMsg('Failed to save Answers');
    })
    .catch((err) => {
      setErrorMsg(err.message);
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      {errorMsg ? (
        <div className='mb-10'>
          <NavLink className="logo1" to="/">
            Legal Lift
          </NavLink>
          <div className="EndScreen">
            <h1 className="mb-[20px] font-bold text-[0.875rem] text-[#c02802]">Error</h1>
            <p className="mb-[20px] font-bold text-[0.875rem] text-[#c02802]">{errorMsg}</p>
            <button
              className="w-full h-[45px] bg-[#A1C398] border-none outline-none rounded-[40px] cursor-pointer text-[16px] text-[#333] font-[Crimson Text] font-bold mt-[-2px]"
            onClick={() => navigate("/")}>Go Home</button>
          </div>
        </div>
      ) : (
        <>
          {result ? (
            <div className='mb-10'>
              <NavLink className="logo1" to="/">
                Legal Lift
              </NavLink>
              <div className="EndScreen">
                <h1>Result</h1>
                <img src={reward} alt="reward" />
                <h2>
                  You have scored {score} out of {questions.length} !!
                </h2>
              </div>
              <button
                type="button"
                onClick={sendResult}
                  >Done</button>
            </div>
          ) : (
            <div className='questions flex flex-col items-center'>
              <div className="text-black text-[30px] md:text-[50px] font-bold">
                {questions[currentQuestionIndex].ques}
              </div>
              <Option
                ans={questions[currentQuestionIndex].ans}
                a={questions[currentQuestionIndex].A}
                b={questions[currentQuestionIndex].B}
                c={questions[currentQuestionIndex].C}
                d={questions[currentQuestionIndex].D}
                onAnswer={handleAnswer}
              />
              {isCorrect !== null && (
                <p className={`text-3xl font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                  {isCorrect ? "Correct!" : "Incorrect!"}
                </p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;