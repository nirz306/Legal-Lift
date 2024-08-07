import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Navbar from "../navbar/Navbar";
import couple from "../assets/couple.png";
import three from "../assets/three.png";
import kt from "../assets/kt.png";
import sq from "../assets/sq.png";
import blogss from "../assets/blogg.png";
import lt from "../assets/lt.png";
import { useAnimation,motion, color } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../../variants";
import Logo from "../../helpers/Logo";
import Cards from "./Cards";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Home = () => {
 

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

  const [move, setMove] = useState(false);

  const [title] = useTypewriter(
    {
        words : ['Law','Education','Legal awareness'],
        loop : {},
        typeSpeed : 120,
        deleteSpeed : 80,


    }
  );

  return (
    <>
      <div className="flex justify-between">
        <Logo />
        <div className="justify-end">
          <Navbar />
        </div>
      </div>

      <div className="flex items-center min-h-screen relative">
        <div className="bg-[#FA7070] w-[300px] sm:w-[500px] md:w-full ml-[100px] mr-[100px] h-[450px] mx-auto rounded-[15px] flex mb-11 items-center justify-between">
          <div className="mt-[-80px]">
            <img className="w-auto h-[500px] max-[1000px]:hidden" src={three} alt="Image" />
          </div>
          <div className="flex flex-col mr-10 max-[1000px]:w-[600px] max-[1000px]:mx-auto p-10">
          <p className="text-[30px] font-bold text-center min-[1000px]:text-[25px] min-[1332px]:text-[45px] min-[1203px]:text-[35px] mx-auto max-[488px]:text-[20px]">
                 Discover the world of {title}<Cursor/>
               </p>
            <p className="text-[20px] mx-auto min-[1000px]:text-[25px] min-[1000px]:w-[350px] min-[1203px]:text-[30px] min-[1203px]:w-[600px]">
              Unraveling the secrets of law is like discovering the hidden keys to a fair society, a journey where every revelation empowers us towards greater understanding and equality for all.
            </p>
          </div>
        </div>
      </div>

      <div className="features flex flex-col items-center mt-[20px] justify-between p-[40px]">
        <div className="row1 flex md:flex-row items-center flex-col">
          <Link className="link" smooth to="/kidztube#top">
            <Cards color="#FEFDED" desp="Experience real-life scenarios through engaging visual content, followed by thought-provoking questions" title="Kidztube" image={kt} />
          </Link>

          <Link className="link" to="/rule">
            <Cards color="#A1C398" desp="Experience real-life scenarios through engaging visual content, followed by thought-provoking questions" title="Legal Trivia" image={lt} />
          </Link>
        </div>

        <div className="row2 flex md:flex-row items-center flex-col">
          <Link className="link" smooth to="/squests#top">
            <Cards color="#A1C398" desp="Experience real-life scenarios through engaging visual content, followed by thought-provoking questions" title="Scenario Quests" image={sq} />
          </Link>

          <Link className="link" to="/blogs">
            <Cards color="#FA7070" desp="Dive into our blog for easy-to-understand articles on law! All about justice, rights, and the legal world!" title="Blogs" image={blogss} />
          </Link>
        </div>
      </div>
      <div className="footer bg-[#FEFDED] w-full flex">
        <div className="chatbot"></div>
        <div className="imag relative mt-[-165px]">
          <img className="couple relative  max-[1000px]:hidden" src={couple} alt="" />
        </div>
        <div className="quote text-[40px] w-full mb-[100px] text-center mr-4 ml-4">
          "Education is the foundation, and law is the framework, together they build a society where justice and progress thrive."
        </div>
      </div>
    </>
  );
};

export default Home;