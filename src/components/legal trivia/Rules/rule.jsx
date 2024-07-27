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

      <div className="flex flex-col md:flex-row mt-5 h-max">

        <div className="flex flex-col items-center mx-auto">
          <motion.div
            className="w-full md:w-auto"
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-[#FF8F8A] p-6 sm:p-8 md:p-[50px] rounded-lg text-center sm:mx-4 md:mx-0">
              Hey there! Get ready for the quiz fun!
              <p>
                Before you dive in, make sure to check out these cool
                instructions.
              </p>
              <div className="mt-4 space-y-2">
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
            </div>

            <div className="letsplaybtton flex items-center justify-center mx-auto mt-4">
              <Link to="/play">
                <button className="bg-[#A1C398] rounded-md p-4 hover:bg-[#63785d] hover:text-white">
                  Let's Play!!
                </button>
              </Link>
            </div>

          </motion.div>
        </div>

        <div className="boyimage mx-auto hidden md:block my-auto">
          <img src={boy} alt="Boy illustration" className=""></img>
        </div>
      </div>
    </>
  );
};

export default rule;
