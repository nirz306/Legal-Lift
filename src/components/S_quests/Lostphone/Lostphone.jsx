import React, { useState } from 'react';
import Questionaire from '../Questionaire';
import "./lostphone.css";
import { NavLink } from 'react-router-dom';

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
     <NavLink className="logo" to="/">
        Legal Lift
      </NavLink>
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
