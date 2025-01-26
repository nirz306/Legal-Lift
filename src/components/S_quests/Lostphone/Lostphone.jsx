import React, { useState } from "react";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
import VIDEO_PATH from "./p_p.mp4";
import couple2 from "../../assets/couple2.png";
import Ans_des from '../../S_quests/Ans_des';


const Lostphone = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentOrder, setCurrentOrder] = useState([]);
  const correctOrder = ["op2", "op1", "op3"];
  const [showDes, setShowDes] = useState(false);
  const [ans,setAns] = useState(false);
  const desp = "dhdgcdycbdjcbduc";
  

  const myCallback = () => {
    console.log("Video has ended");
    setShowQuiz(true);
  };

  function handleClick(event) {
    const id = event.target.id;
    if (!currentOrder.includes(id)) {
      setCurrentOrder((prev) => [...prev, id]);
    }
  }

  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      setAns(false);
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        setAns(false);
        return false;
      }
    }
    setAns(true);
    return true;
  }

  const handleSubmit = () => {
    arraysEqual(currentOrder, correctOrder);
    setShowDes(true);
  };

  return (
    <>
      <NavLink className="text-[50px] font-heading" to="/">
                    Legal Lift
                  </NavLink>

      <div className="flex flex-col items-center">
        <div className=" flex justify-center items-center ">
          <ReactPlayer url={VIDEO_PATH} controls={true} onEnded={myCallback} />
        </div>

        {showQuiz && (
          <div className="bg-legal-pastel-red p-6 mb-12 w-[1057px] max-[1000px]:w-[800px] mx-auto rounded-md shadow-lg">

            { !showDes && (
              <div>
            <div className="text-3xl font-body font-bold text-gray-800 mb-6 w-[400px] ml-[500px]">
              What should the girl do after her phone got lost , select the sequence of actions from the buttons. 
            </div>

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 hidden lg:flex justify-center">
                <img
                  className="h-auto w-80 rounded-md"
                  src={couple2}
                  alt="Couple illustration"
                />
              </div>

              <div className="lg:w-1/2 flex flex-col justify-center mx-auto space-y-4 ">
                {["op1", "op2", "op3"].map((id) => (
                  <button
                    key={id}
                    id={id}
                    className={`px-6 py-3 rounded-md text-lg font-medium text-left transition-all hover:bg-legal-green ${
                      currentOrder.includes(id)
                        ? "bg-legal-green text-white"
                        : "bg-yellow-100 text-black"
                    }`}
                    onClick={handleClick}
                  >
                    {currentOrder.includes(id)
                      ? `${currentOrder.indexOf(id) + 1}. ${
                          id === "op1"
                            ? "Go to police station"
                            : id === "op2"
                            ? "File online FIR"
                            : "Go to cyber cafe and block phone"
                        }`
                      : id === "op1"
                      ? "Go to police station"
                      : id === "op2"
                      ? "File online FIR"
                      : "Go to cyber cafe and block phone"}
                  </button>
                ))}

                <button
                  onClick={handleSubmit}
                  className="w-1/2 mx-auto bg-gray-800 text-white font-body font-semibold py-2 px-4 rounded-md shadow-md hover:bg-green-500 transition-all"
                >
                  Submit
                </button>

              </div>
            </div>
            </div>
)}

             {showDes && (
                      <div className='w-[700px] mx-auto font-body text-[25px]'>
                      <Ans_des
                        ans={ans}
                        user_ans={true}
                        description={desp}
                      />
                      </div> 
                    )}

          </div>
        )}
      </div>
    </>
  );
};

export default Lostphone;
