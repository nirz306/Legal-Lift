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
import Logo from "../../helpers/Logo";

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
      <div className="flex justify-between">
          <Logo />
        <div className="justify-end">
          <Navbar />
        </div>
      </div>

      <div className="flex items-center  min-h-screen relative">
  <div className="bg-[#FA7070] w-[300px] sm:w-[500px] md:w-full ml-[100px] mr-[100px] h-[450px] mx-auto rounded-[15px] flex mb-11 items-center justify-between">

    <div className="mt-[-80px]">
      <img className="w-auto h-[500px] max-[1000px]:hidden" src={three} alt="Image" />
    </div>

    <div className="flex flex-col mr-10  max-[1000px]:w-[600px] max-[1000px]:mx-auto p-10">
      <p className="text-[30px] font-bold text-center min-[1000px]:text-[25px] min-[1332px]:text-[45px] min-[1203px]:text-[35px] mx-auto max-[488px]:text-[20px] ">
        Discovering the knowledge of Law
      </p>
      <p className=" text-[20px]  mx-auto  min-[1000px]:text-[25px] min-[1000px]:w-[350px]  min-[1203px]:text-[30px] min-[1203px]:w-[600px]  ">
        Unraveling the secrets of law is like discovering the hidden keys to a fair society, a journey where every revelation empowers us towards greater understanding and equality for all.
      </p>
    </div>
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
        <div className="imag relative mt-[-175px]">
          <img className="couple relative mb-5" src={couple} alt="" />
        </div>
        <div className="quote text-[40px] w-full mb-[100px]">
          "Education is the foundation, and law is the framework; together, they
          build a society where justice and progress thrive."
        </div>
      </div>
    </>
  );
};

export default Home;
