import React from 'react'
import './squests.css';

//options is an array having options
const Questionaire = ({question , options , ans} ) => {
  return (
    <div className="quiz">
       <div className="options">
            <h1 id='question'> {question}</h1>
            <button className="a">{options[0]}</button>
            <button className="b">{options[1]}</button>
            <button className="c">{options[2]}</button>
            <button className="d">{options[3]}</button>
          </div>
    </div>
  )
}

export default Questionaire
