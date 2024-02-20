import React from "react";
import { Link } from "react-router-dom";
import "./rules.css"

const rule = () => {
  return (
    <div className="Rules">
      <div className="rulelist">
        Hey there! Get ready for the quiz fun!
        <div className="container">Before you dive in, make sure to check out these cool instructions.</div>
        &nbsp;&nbsp;&nbsp;
        <p>1. There are 8 awesome questions waiting for you.</p>
        <p>2. Take a good look at each question – they've got some interesting stuff!</p>
        <p>3. Each question presents 4 options. Choose the correct one.</p>
        <p>4. Remember, you can't skip any questions. We want to hear what you think!</p>
        <p>5. When you get an answer right, it will light up in a cool green color.</p>
        <p>6. If you miss one, no worries – it'll also light up, but in red. Keep going!</p>
        <p>7  Take your time solving the questions; no rush, no timer.</p>
        <p>8. After you finish the quiz, you'll see your total score. How cool is that?</p>
        &nbsp;&nbsp;&nbsp;
        <div className="container">Wishing you tons of luck and fun with the trivia! You've got this! 🚀</div>
      </div>
      <Link to="/play">
        <button className="letsPlay">Let's Play!!</button>
      </Link>
    </div>
  );
  
};

export default rule;
