import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import boy from "./boy.png";
import Logo from "../../../helpers/Logo";

const rule = () => {
  return (
    <>
      <Logo />

      <div className="flex ml-[100px] mr-[100px]">

        <div className=" p-[50px] flex flex-col">
          
          <motion.div
            className="w-full md:w-auto"
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 1 }}
          >
             
              <div className=" bg-[#FF8F8A] p-[50px] rounded-lg">
                Hey there! Get ready for the quiz fun!
                <p>
                  Before you dive in, make sure to check out these cool
                  instructions.
                </p>
                &nbsp;&nbsp;&nbsp;
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
                  If you miss one, no worries, it'll also light up, but in red.
                  Keep going!
                </p>
                <p>
                  After you finish the quiz, you'll see your total score. How
                  cool is that?
                </p>
                <p>
                  Wishing you tons of luck and fun with the trivia! You've got
                  this! 🚀
                </p>
              </div>

              <div className="absolute mt-4 mx-auto">
                <Link to="/play">
                  <button className="bg-[#A1C398] rounded-md p-4">
                    Let's Play!!
                  </button>
                </Link>
              </div>

          </motion.div>
        </div>


        <div className="my-auto">
          <img height="400px" src={boy}></img>
        </div>
      </div>
    </>
  );
};

export default rule;