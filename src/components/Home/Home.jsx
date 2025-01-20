import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Navbar from "../navbar/Navbar";
import couple from "../assets/couple.png";
import three from "../assets/three.png";
import kt from "../assets/kt.png";
import sq from "../assets/sq.png";
import blogss from "../assets/blogg.png";
import lt from "../assets/lt.png";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Logo from "../../helpers/Logo";
import Cards from "./Cards";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://mediafiles.botpress.cloud/2c13d088-c7f8-48a0-8612-8e07d9dfff42/webchat/config.js";
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    } else {
      controls1.start({ opacity: 0, y: 70 });
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    } else {
      controls2.start({ opacity: 0, y: 70 });
    }
  }, [controls2, inView2]);

  const [title] = useTypewriter({
    words: ["Law", "Education", "Legal Awareness"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <div className="flex justify-between items-center px-4 py-2">
        <Logo />
        <Navbar />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center p-4">
        <div className="bg-[#FA7070] w-full lg:w-[90%] max-w-7xl rounded-[15px] flex flex-col lg:flex-row items-center justify-center text-center p-6 gap-4">
          <img
            className="w-[60%] lg:w-auto h-[300px] lg:h-[500px] mx-auto"
            src={three}
            alt=""
          />
          <div className="flex flex-col items-center lg:items-start p-4 lg:w-[50%]">
            <p className="text-xl lg:text-3xl font-bold text-center lg:text-left">
              Discover the world of <span className="text-[#FFFFFF]">{title}</span>
              <Cursor />
            </p>
            <p className="text-sm lg:text-lg mt-4 text-gray-700 text-center lg:text-left">
              Unraveling the secrets of law is like discovering the hidden keys
              to a fair society, a journey where every revelation empowers us
              towards greater understanding and equality for all.
            </p>
          </div>
        </div>
      </div>

      <div className="features flex flex-col items-center gap-8 p-4">
        <motion.div
          className="row1 flex flex-col md:flex-row items-center justify-between gap-6"
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={controls1}
        >
          <Link className="w-full md:w-[45%]" smooth to="/kidztube#top">
            <Cards
              color="#FEFDED"
              desp="Dive into real-life stories with exciting videos and fun questions that make you think and learn."
              title="Kidztube"
              image={kt}
            />
          </Link>
          <Link className="w-full md:w-[45%]" to="/rule">
            <Cards
              color="#A1C398"
              desp="Experience real-life scenarios through engaging visual content, followed by thought-provoking questions"
              title="Legal Trivia"
              image={lt}
            />
          </Link>
        </motion.div>

        <motion.div
          className="row2 flex flex-col md:flex-row items-center justify-between gap-6"
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={controls2}
        >
          <Link className="w-full md:w-[45%]" smooth to="/squests#top">
            <Cards
              color="#A1C398"
              desp="Experience real-life scenarios through engaging visual content, followed by thought-provoking questions"
              title="Scenario Quests"
              image={sq}
            />
          </Link>
          <Link className="w-full md:w-[45%]" to="/blogs">
            <Cards
              color="#FA7070"
              desp="Dive into our blog for easy-to-understand articles on law! All about justice, rights, and the legal world!"
              title="Blogs"
              image={blogss}
            />
          </Link>
        </motion.div>
      </div>

      <div className="footer bg-[#FEFDED] w-full flex flex-col lg:flex-row items-center p-6 gap-4">
        <div className="chatbot flex-1"></div>
        <div className="imag hidden lg:block">
          <img className="couple" src={couple} alt="" />
        </div>
        <div className="quote text-center lg:text-left text-lg lg:text-2xl font-semibold text-gray-700">
          "Education is the foundation, and law is the framework, together they
          build a society where justice and progress thrive."
        </div>
      </div>
    </>
  );
};

export default Home;
