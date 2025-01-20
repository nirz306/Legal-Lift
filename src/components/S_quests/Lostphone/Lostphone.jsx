import React, { useState } from 'react';
import Questionaire from '../Questionaire';
import ReactPlayer from 'react-player';
import "./lostphone.css";
import { NavLink } from 'react-router-dom';
import VIDEO_PATH from './p_p.mp4';

const Lostphone = () => {
  const correctOrder = ["op2","op1","op3"];
  let currentOrder = [];

  function handleClick(event) {
    const color = event.target.id;
    event.target.style.backgroundColor = 'lightblue';
    currentOrder.push(color);
    console.log(currentOrder); // Optional: Print current order to see the selected colors
  }

  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      alert('false');
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        alert('false');
        return false;
      }
    }
    alert('true');
    return true;
  }

  const result = false;
  function show(){
     result = arraysEqual(currentOrder,correctOrder)
     console.log("result",result)
  }

  return (
    <>
     <NavLink className="relative top-8 mx-auto my-6 text-5xl font-[Galada] text-black no-underline cursor-pointer sm:ml-16" to="/">Legal Lift</NavLink>
            <div className="text-center text-4xl font-lato italic my-8 text-gray-700">
               Phone Pursuit
             </div>
             <div className="flex justify-center items-center min-h-screen bg-gray-100">
                     <div className="mt-[-155px] w-full max-w-xl border-4 border-gray-300 rounded-lg overflow-hidden">
                       <ReactPlayer 
                         url={VIDEO_PATH} 
                         controls={true} 
                         width="100%" 
                         height="auto" 
                       />
                     </div>
                   </div>
      <div className="quiz">
      <div className="ques"><h1>"Please select the actions you would take if your phone were lost."</h1></div>
      <div className='option'>
        <button id="op1" onClick={handleClick}>Go to police station</button>
        <button id="op2" onClick={handleClick}>File online FIR</button>
        <button id="op3" onClick={handleClick}>Go to cyber cafe and block phone</button>
      </div>
   
      <button id="submit" onClick={() => arraysEqual(currentOrder, correctOrder)}>Submit</button>
      </div>
   

      <div className="result">{result && (<h1>Correct Answer!!</h1>)}</div>
    </>
  )
}

export default Lostphone;
