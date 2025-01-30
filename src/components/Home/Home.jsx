// import React, { useEffect, useState } from "react";
// import { HashLink as Link } from "react-router-hash-link";
// import Navbar from "../navbar/Navbar";
// import couple from "../assets/couple.png";
// import three from "../assets/three.png";
// import kt from "../assets/kt.png";
// import sq from "../assets/sq.png";
// import blogss from "../assets/blogg.png";
// import lt from "../assets/lt.png";
// import { useAnimation,motion, color } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { fadeIn } from "../../variants";
// import Logo from "../../helpers/Logo";
// import Cards from "./Cards";
// import { Cursor, useTypewriter } from "react-simple-typewriter";


// const Home = () => {

//   const [ref1, inView1] = useInView({ triggerOnce: false });
//     const [ref2, inView2] = useInView({ triggerOnce: false });
//     const controls1 = useAnimation();
//     const controls2 = useAnimation();

//     useEffect(() => {
//         if (inView1) {
//             controls1.start({ opacity: 1, y: 0, transition: { duration: 1 } });
//         } else {
//             controls1.start({ opacity: 0, y: 70 });
//         }
//     }, [controls1, inView1]);

//     useEffect(() => {
//         if (inView2) {
//             controls2.start({ opacity: 1, y: 0, transition: { duration: 1 } });
//         } else {
//             controls2.start({ opacity: 0, y: 70 });
//         }
//     }, [controls2, inView2]);

//   const [move, setMove] = useState(false);

//   const [title] = useTypewriter(
//     {
//         words : ['Law','Education','Legal awareness'],
//         loop : {},
//         typeSpeed : 120,
//         deleteSpeed : 80,


//     }
//   );

//   return (
//     <>  
//     <div className="min-h-screen ">
//       <div className="flex justify-between">
//         <Logo />
//         <div className="justify-end">
//           <Navbar />
//         </div>
//       </div>

//       <div className="flex justify-center text-center relative p-10">
//          <div className="bg-legal-pastel-red w-[430px] sm:w-auto h-auto  rounded-[15px] flex mb-11 items-center justify-center flex-wrap text-center ">             
//                 <img className="w-auto h-[500px] text-center " src={three} alt="  " />
            
//              <div className="flex flex-col mr-10 max-[1000px]:w-[600px] max-[1000px]:mx-auto p-10">
//                <p className="text-[30px] font-bold text-center min-[1000px]:text-[25px] min-[1332px]:text-[45px] min-[1203px]:text-[35px] mx-auto max-[488px]:text-[20px] font-heading ">
//                  Discover the world of {title}<Cursor/>
//                </p>
             
              
//                <p className="text-left text-[20px] mx-auto min-[1000px]:text-[25px] min-[1000px]:w-[350px] min-[1203px]:text-[30px] min-[1203px]:w-[600px] font-body ">
//                  Unraveling the secrets of law is like discovering the hidden keys to a fair society, a journey where every revelation empowers us towards greater understanding and equality for all. </p>
//            </div>
//          </div>
//        </div>
//        </div>

//       <div className="features flex flex-col items-center mt-[20px] justify-between p-[40px]">
//         <motion.div className="row1 flex md:flex-row items-center flex-col" ref={ref1}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={controls1}>
//           <Link className="link"   to="/kidztube#top">
//             <Cards color="#FEFDED" desp="Dive into real-life stories with exciting videos and fun questions that make you think and learn." title="Kidztube" image={kt} />
//           </Link>

//           <Link className="link" to="/rule">
//             <Cards color="#A1C398" desp="Experience real-life scenarios through engaging visual content, followed by thought-provoking questions" title="Legal Trivia" image={lt} />
//           </Link>
//         </motion.div>

//         <motion.div className="row2 flex md:flex-row items-center flex-col" ref={ref2}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={controls2}>
//           <Link className="link" to="/squests#top">
//             <Cards color="#A1C398" desp="Experience real-life scenarios through engaging visual content, followed by thought-provoking questions" title="Scenario Quests" image={sq} />
//           </Link>

//           <Link className="" to="/blogs">
//           <Cards color="#FA7070" desp="Dive into our blog for easy-to-understand articles on law! All about justice, rights, and the legal world!" title="Blogs" image={blogss} />
//           </Link>
          
//         </motion.div>
//       </div>
//       <div className="footer bg-[#FEFDED] w-full flex">
//         {/* <div className="chatbot"></div> */}
//         <div className="imag relative mt-[-165px]">
//           <img className="couple relative  max-[1000px]:hidden" src={couple} alt="" />
//         </div>
//         <div className="quote text-[40px] w-full mb-[100px] text-center mr-4 ml-4 font-body">
//           "Education is the foundation, and law is the framework, together they build a society where justice and progress thrive."
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


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
      <div className="min-h-screen "> 
      <div className="flex justify-between items-center px-4 py-2">
        <Logo />
        <Navbar />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center p-4">
      <div className="bg-[#FA7070] w-full lg:w-[90%] max-w-7xl rounded-[15px] flex flex-col lg:flex-row items-center justify-center text-center gap-4 font-body md:h-[600px] lg:h-auto sm:h-[500px]">
      <img
            className="w-[60%] hidden lg:block  lg:w-auto h-[300px] lg:h-[500px] mx-auto"
            src={three}
            alt=""
          />

          <div className="flex flex-col   lg:items-start md:pl-14 md:pr-14  md:text-left lg:p-4 lg:mt-0 md:mt-[-200px]  lg:w-[60%] lg:mr-[80px] " >
            <p className="text-[40px] font-bold  text-left font-heading">
              Discover the world of <span className="">{title}</span>
              <Cursor />
            </p>
            <p className=" text-[38px] font-body mt-4 text-center lg:text-left min-h-[100px] leading-[35px] sm:font-thin ">
            Unraveling the secrets of law is like discovering the hidden keys
              to a fair society, a journey where every revelation empowers us
              towards greater understanding and equality for all.
            </p>
          </div>
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

<div className="footer bg-[#FEFDED] w-full flex">
        <div className="imag relative mt-[-165px]">         
          <img className="couple relative  max-[1000px]:hidden" src={couple} alt="" />
        </div>
        <div className="quote text-[40px] w-full mb-[100px] text-center mr-4 ml-4 font-body">
         Education is the foundation, and law is the framework, together they build a society where justice and progress thrive.
      </div>
      </div>
    </>
  );
};

export default Home;