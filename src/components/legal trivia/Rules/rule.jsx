import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./rules.css";
import { NavLink } from "react-router-dom";
import boy from "./boy.png"

const rule = () => {
  // const[move,setMove] = React.useState(false);
  return (
    <>
      <NavLink className="logo1" to="/">
        Legal Lift
      </NavLink>
      <div className="out">
        <div className="wrapp">
          <motion.div
            className="Rules"
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="rulelist">
              Hey there! Get ready for the quiz fun!
              <div className="container">
                Before you dive in, make sure to check out these cool
                instructions.
              </div>
              &nbsp;&nbsp;&nbsp;
              <p> There are 8 awesome questions waiting for you.</p>
              
              <p>
                Each question presents 4 options. Choose the correct one.
              </p>
              <p>
                Remember, you can't skip any questions. We want to hear what
                you think!
              </p>
              <p>
               When you get an answer right, it will light up in a cool
                green color.
              </p>
              <p>
                 If you miss one, no worries,it'll also light up, but in
                red. Keep going!
              </p>
              <p>
                 After you finish the quiz, you'll see your total score. How
                cool is that?
              </p>
              {/* &nbsp;&nbsp;&nbsp; */}
              <div className="container">
                Wishing you tons of luck and fun with the trivia! You've got
                this! 🚀
              </div>
            </div>
            <Link to="/play">
              <button className="letsPlay">Let's Play!!</button>
            </Link>
          </motion.div>
        </div>
        <div className="boy">
          <img height="400px" src= {boy}></img>
        </div>
      </div>
    </>
  );
};

export default rule;
