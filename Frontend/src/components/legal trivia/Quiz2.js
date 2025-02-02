import React, { useState, useEffect } from "react";
import Option from "./options";
import reward from "../assets/reward.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../helpers/Logo";

const Quiz = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [ansDescription,setAnsDescription] = useState([]);

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
        const token = localStorage.getItem("token"); // Retrieve the JWT from localStorage
      console.log("token during creating new task: ", token);
      if (!token) {
        console.error("No token found, redirecting to login.");
      navigate("/login"); // Redirect to the login page if no token is found
      //later need to add a timeout here 
      return;
      }

        const response = await axios.get(`${import.meta.env.BACKEND_BASEURL}/api/Questions`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // Send the JWT token in the Authorization header
          },
          withCredentials: true 
        });


        
        console.log("Questions fetched: ", response.data);
        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the data: ", error);
  
        if (error.response && error.response.status === 401) {
          // If the error is 401 Unauthorized
          setErrorMsg("Please log in to access the quiz.");
          setTimeout(() => {
            navigate("/login"); // Redirect to the login page
          }, 2000); // Optional delay to show the message before redirecting
        } else {
          setErrorMsg("Failed to load questions.");
        }
  
        setLoading(false);
      }
    };
  
    fetchQuizData();
  }, [navigate]);
  
  const handleAnswer = (isCorrect, option) => {
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

  const sendResult = () => {
    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("user"); // Retrieve the user object as a JSON string

    // console.log("Token: ",token);
    // console.log("User: ",userString);
  
    if (!userString) {
      setErrorMsg("User information not found. Please log in again.");
      return;
    }
  
    try {
      const user = JSON.parse(userString); // Parse the JSON string into an object
      console.log("Parsed user info:", user); // Debugging: Log the parsed user info
  
      const resultData = {
        userId: user._id, // Use the user's _id from the parsed object
        score: score, // The score the user achieved in the quiz
      };
  
      console.log("Sending result data:", resultData); // Debugging: Log the data being sent
  
      axios
        .post("https://legal-lift-backend.vercel.app/user/score", resultData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Send the JWT token for authentication
          },
        })
        .then((response) => {
          console.log("Quiz score updated successfully", response.data);
          navigate("/"); // Redirect to the home page or any other page
        })
        .catch((error) => {
          console.error("Error updating quiz score:", error);
          setErrorMsg("Failed to update quiz score. Please try again.");
        });
    } catch (error) {
      console.error("Error parsing user info from localStorage:", error);
      setErrorMsg("Invalid user information. Please log in again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    // flex items-center justify-center min-h-screen
    <div>
      <Logo className="mt-2" />
      <div className="flex justify-center items-center font-body ">
        {errorMsg ? (
          <div className="mb-10">
            <div className="EndScreen">
              <h1 className="mb-[20px] font-bold text-[0.875rem] text-[#c02802]">
                Error
              </h1>
              <p className="mb-[20px] font-bold text-[0.875rem] text-[#c02802]">
                {errorMsg}
              </p>
              <button
                className="w-full h-[45px] bg-[#A1C398] border-none outline-none rounded-[40px] cursor-pointer text-[16px] text-[#333] font-[Crimson Text] font-bold mt-[-2px]"
                onClick={() => navigate("/")}
              >
                Go Home
              </button>
            </div>
          </div>
        ) : (
          <>
            {result ? (
              <div className="flex flex-col font-body ">
              
                <div className="justify-center items-center bg-[#F8F8DC] w-max mx-auto p-5 rounded-lg">
                  <div className="flex flex-col">
                    <h1 className="text-center font-heading text-2xl">Congratulations</h1>
                    <img src={reward} alt="reward" />
                    <h2 className="text-center items-center mx-auto text-xl">
                      You have scored {score} out of {questions.length} !!
                    </h2>
                  </div>
                </div>

                <div className=" items-center justify-center mx-auto">
                  <button
                    className="items-center justify-center mx-auto p-3 bg-[#A1C398] rounded-md mt-3"
                    type="button"
                    onClick={sendResult}
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div className="questions flex flex-col items-center justify-center my-auto">
                <div className="text-black text-[30px] md:text-[50px] font-bold  lg:ml-[300px] lg:mr-[300px] ">
                  {questions[currentQuestionIndex].ques}
                </div>
                <Option
                  ans={questions[currentQuestionIndex].ans}
                  a={questions[currentQuestionIndex].A}
                  b={questions[currentQuestionIndex].B}
                  c={questions[currentQuestionIndex].C}
                  d={questions[currentQuestionIndex].D}
                  onAnswer={handleAnswer}
                  description = {questions[currentQuestionIndex].description}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
