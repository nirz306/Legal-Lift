import React from "react";
import { Link } from "react-router-dom";
import "./rules.css"

const rule = () => {
  return (
    <div className="Rules">
       
      <div className="rulelist">
      Hey there! Get ready for the quiz fun! 
      <br />
      Before you dive in, make sure to check out these cool instructions.
      <br />
      <br />

<br />
<span className="ruless">1. There are 8 awesome questions waiting for you.</span>
<br />
<span className="ruless">2. Take a good look at each question – they've got some interesting stuff!</span>
<br />
3. For every question, you'll see 4 different options. Pick the one you think is right.
<br />
4. Remember, you can't skip any questions. We want to hear what you think!
<br />
5. When you get an answer right, it will light up in a cool green color.
<br />
6. If you miss one, no worries – it'll also light up, but in red. Keep going!
<br />
7. No need to rush! There's no timer, so take your time and enjoy solving the questions.
<br />
8. After you finish the quiz, you'll see your total score. How cool is that?
<br />
<br />
Wishing you tons of luck and fun with the trivia! You've got this! 🚀
      </div>
      <Link to="/play">
        <button className="letsPlay">Lets Play!!</button>
      </Link>
    </div>
  );
};

export default rule;
