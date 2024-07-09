import React from "react";
import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
// import "./home.css";
import Navbar from "../navbar/Navbar";
import couple from "../assets/couple.png";
import three from "../assets/three.png";
import kt from "../assets/kt.png";
import sq from "../assets/sq.png";
import blogss from "../assets/blogg.png";
import lt from "../assets/lt.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

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
  const [move, setMove] = React.useState(false);
  return (
    <>
      <div class="flex justify-start">
        <div>
          {" "}
          <Link className="text-[50px] cursor-pointer" to="/">
            Legal Lift
          </Link>
        </div>
      </div>

      <Navbar />

      <div className="head flex ">
        <div className="header bg-[#FA7070] w-[1200px] h-[400px] mt-[50px] rounded-[15px] flex justify-center z=1  ">
          <div className="flex flex-col absolute ml-[300px] mt-[80px]">
            <p className="tit title font-[75px] ">
              Discovering the knowledge of Law
            </p>
            <div className="desp text-[30px] w-[600px]">
              Unraveling the secrets of law is like discovering the hidden keys
              to a fair of society and journey where every revelation empowers
              us towards greater understanding and equality for all.
            </div>
          </div>
        </div>

        <div className="three absolute ">
          <img className="" src={three}></img>
        </div>
      </div>

      <div className="features flex flex-col items-center mt-[70px] justify-between p-[40px]">
        <div className="row1 flex  items-center">
          <Link className="link" smooth to="/kidztube#top">
            <div className="kidztube bg-[#FEFDED] rounded-[15px] ml-[50px] h-[200px] w-[400px] mb-[50px] transition ease-in-out delay-150 hover:-translate-x-2 hover:-translate-y-3 hover:shadow-lg duration-300">
            <div>
                <img
                  className="cov w-[150px]  mt-[25px] absolute"
                  src={kt}
                ></img>
              </div>
              <div className="flex flex-col ml-[170px]">
                <div>
                  <p className="tit text-[30px] ">Kidztube</p>
                </div>
                <div className="content w-[220px] text-[20px]">
                  Experience real-life scenarios through engaging visual
                  content, followed by thought-provoking questions
                </div>
              </div>
            </div>
          </Link>

          <Link className="link" to="/rule">
            <div className="legaltrivia flex bg-[#A1C398] rounded-[15px] ml-[50px] h-[200px] w-[400px] mb-[50px] transition ease-in-out delay-150 hover:-translate-x-2 hover:-translate-y-3 hover:shadow-lg duration-300">
            <div>
                <img
                  className="cov w-[150px]  mt-[25px] absolute"
                  src={lt}
                ></img>
              </div>
              <div className="flex flex-col ml-[170px]">
                <div>
                  <p className="tit text-[30px] ">Legal Trivia</p>
                </div>
                <div className="content w-[220px] text-[20px]">
                  Experience real-life scenarios through engaging visual
                  content, followed by thought-provoking questions
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="row2 flex items-center">
          <Link className="link" smooth to="/squests#top">
            <div className="squests flex bg-[#C6EBC5] rounded-[15px] ml-[50px] h-[200px] w-[400px] mb-[50px] transition ease-in-out delay-150 hover:-translate-x-2 hover:-translate-y-3 hover:shadow-lg duration-300">
              <div>
                <img
                  className="cov w-[150px]  mt-[25px] absolute"
                  src={sq}
                ></img>
              </div>
              <div className="flex flex-col ml-[170px]">
                <div>
                  <p className="tit text-[30px] ">Scenario Quests</p>
                </div>
                <div className="content w-[220px] text-[20px]">
                  Experience real-life scenarios through engaging visual
                  content, followed by thought-provoking questions
                </div>
              </div>
            </div>
          </Link>

          <Link className="link" to="/blogs">
            <div className="blogs flex bg-[#FA7070] rounded-[15px] ml-[50px] h-[200px] w-[400px] mb-[50px] transition ease-in-out delay-150 hover:-translate-x-2 hover:-translate-y-3 hover:shadow-lg duration-300">
              <img className="cov w-[150px] mt-[25px] absolute" src={sq}></img>
              <div className="flex flex-col ml-[170px]">
                <p className="tit text-[30px]">Blogs</p>
                <div className="content w-[220px] text-[20px]">
                  Dive into our blog for easy-to-understand articles on law! All
                  about justice, rights, and the legal world!
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="footer bg-[#FEFDED] w-full flex">
        <div className="chatbot"></div>
        <div className="imag">
          <img className="couple" src={couple} alt="" />
        </div>
        <div className="quote">
          "Education is the foundation, and law is the framework; together, they
          build a society where justice and progress thrive."
        </div>
      </div>
    </>
  );
};

export default Home;
