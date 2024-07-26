import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import "./rules.css";
import { NavLink } from "react-router-dom";
import boy from "./boy.png";

const rule = () => {
  // const[move,setMove] = React.useState(false);
  return (
    <>
      <NavLink className="logo1" to="/">
        Legal Lift
      </NavLink>

      <div className="flex flex-col md:flex-row ml-[20px] md:ml-[100px] mr-[20px] md:mr-[100px]">

        <div className="p-[20px] md:p-[50px] flex flex-col justify-center items-center md:items-start md:justify-start" >
          
          <motion.div
            className="w-full md:w-auto"
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 1 }}
          >
             
              <div className="bg-[#FF8F8A] p-[20px] md:p-[50px] rounded-lg text-center md:text-left">
                Hey there! Get ready for the quiz fun!
                <p>
                  Before you dive in, make sure to check out these cool
                  instructions.
                </p>
                &nbsp;&nbsp;&nbsp;
                <div classname = "mt-4 space-y-2">
                <p> There are 8 awesome questions waiting for you.</p>
                <p>Each question presents 4 options. Choose the correct one.</p>
                <p>
                  Remember, you can't skip any questions. We want to hear what
                  you think!
                </p>
                <p>
                  When you get an answer right, it will light up in a cool green
                  color.
                </p>
                <p>
                  {" "}
                  If you miss one, no worries,it'll also light up, but in red.
                  Keep going!{" "}
                </p>
                <p>
                  {" "}
                  After you finish the quiz, you'll see your total score. How
                  cool is that?
                </p>
                &nbsp;&nbsp;&nbsp;
                <p>
                  Wishing you tons of luck and fun with the trivia! You've got
                  this! 🚀
                </p>
                </div>
              </div>

              <div className="flex items-center justify-center mt-4 mx-auto">
                <Link to="/play">
                  <button className="bg-[#A1C398] rounded-md p-4 justify-center">
                    Let's Play!!
                  </button>
                </Link>
              </div>

          </motion.div>

        </div>


        <div className="my-auto flex justify-center md:justify-end">
          <img height="400px" src={boy} alt="Boy illustration" className="w-[200px] md:w-[400px]"></img>
        </div>
      </div>
    </>
  );
};

export default rule;