import React, { useEffect, useState } from "react";

import Block from "../S_quests/Block";
import rasicm from "../assets/shades of struggle.png";
import "../S_quests/squests.css";
import c_rights from "../assets/c_rights.png";
import o_safety from "../assets/online_safety.png";
// import c_freedom from "../assets/"
import stranger from "../assets/strager safety.png";
import detention from "../assets/unauthorised detension.jpeg";
import { NavLink } from "react-router-dom";
import team from "../assets/team.png";
import o_shop from "../assets/online_shopping.png";
import { delay, motion } from "framer-motion";
import { useAnimation, color } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Kidztube = () => {
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
  return (
    <>
     <div id="top"></div>
      <NavLink className="relative top-8 mx-auto my-6 text-5xl font-[Galada] text-black no-underline cursor-pointer sm:ml-16" to="/">Legal Lift</NavLink>
      <div className="flex mr-[100px]">
        <div className="bg-[#A1C398] ml-[100px] mr-[50px] mt-[35px] rounded-lg p-4">
          
            <p className="tit mt-[10px] text-[40px] text-center">Kidztube</p>
            <br></br>
            
            <p className="tit text-[25px] mt-[-15px] text-justify">
                Step into a world of wonder at KidzTube! We've handpicked
                videos that spark curiosity and inspire learning. Here, your
                children can explore a world of educational videos that are
                both fun and informative. Dive into a treasure trove of videos
                designed to ignite young minds and foster a love for knowledge.
              </p>
        </div>    
          
          <div className="team"></div>
          <img  src={team} alt="" className="cover"/>
      </div>
       
        <div className="components " >
          <motion.div className="row1" ref={ref1}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls1}>
            <div className="rasicm">
                <NavLink className="link" to="/rasicm">
                <Block imageUrl={rasicm} title="rasicm" />
              </NavLink>
            </div>

            <div className="consumer_rights">
              <NavLink className="link" to="/consumer_rights">
                <Block imageUrl={c_rights} title="consumer_right" />
              </NavLink>
            </div>

            <div
              className="stranger_safety"
             
            >
              <NavLink className="link" to="/stranger_safety">
                <Block imageUrl={stranger} title="stranger_safety" />
              </NavLink>
            </div>

          </motion.div>
          <motion.div className="row2" ref={ref2}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls2}>
            <div className="detention">
              <NavLink className="link" to="/detention">
                <Block imageUrl={detention} title="detention" />
              </NavLink>
            </div>

            <div className="online_safety">
              <NavLink className="link" to="/online_safety">
                <Block imageUrl={o_safety} title="online_safety" />
              </NavLink>
            </div>

            <div className="online_shop">
              <NavLink className="link" to="/online_shop">
                <Block imageUrl={o_shop} title="online_shop" />
              </NavLink>
            </div>
          </motion.div>
        </div>
     
    </>
  );
};
export default Kidztube;