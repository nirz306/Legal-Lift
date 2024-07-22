import React from "react";
import Block from "../S_quests/Block";
import rasicm from "../assets/shades of struggle.png";
// import "../S_quests/squests.css";
import c_rights from "../assets/c_rights.png";
import o_safety from "../assets/online_safety.png";
// import c_freedom from "../assets/"
import stranger from "../assets/strager safety.png";
import detention from "../assets/unauthorised detension.png";
import { NavLink } from "react-router-dom";
import team from "../assets/team.png";
import o_shop from "../assets/online_shopping.png";
import { delay, motion } from "framer-motion";
import Logo from "../../helpers/Logo";

const Kidztube = () => {
  return (
    <>
     <div id="top"></div>
      <Logo/>
      <div className="">
        <div className="flex mx-auto  w-full min-h-screen">
        <div className="bg-[#A1C398] lg:w-[700px]  lg:h-[500px] mx-auto rounded-lg p-4 mt-4 md:w-[500px] md:h-[500px] flex">
          <div className="wrap ">
            <p className=" mx-auto text-center">Kidztube</p>
            <br></br>
            <div className="text-[30px] md:text-[20px] ml-5 mr-5">
              
            <p>Step into a world of wonder at KidzTube! </p>
            <p>We've handpicked videos that spark curiosity and inspire learning. </p>
            <p>Here, your children can explore a world of educational videos that are
            both fun and informative.</p>
            <p> Dive into a treasure trove of videos
                designed to ignite young minds and foster a love for knowledge.</p>
             
            </div>
          </div>
        </div>
          <img className="w-max h-[300px] justify-center align-center my-auto mx-auto" src={team} alt="" />
        </div>
      
        <div className="mx-auto mb-8 flex flex-col">
          <div className="flex  p-3 mx-auto">
            <motion.div
              className="rasicm"
              initial={{ x: -250 }}
              animate={{ x: -10 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <NavLink className="link" to="/rasicm">
                <Block imageUrl={rasicm} title="rasicm" />
              </NavLink>
            </motion.div>

            <motion.div
              className="consumer_rights"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <NavLink className="link" to="/consumer_rights">
                <Block imageUrl={c_rights} title="consumer_right" />
              </NavLink>
            </motion.div>

            <motion.div
              className="stranger_safety"
              initial={{ x: 250 }}
              animate={{ x: 10 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <NavLink className="link" to="/stranger_safety">
                <Block imageUrl={stranger} title="stranger_safety" />
              </NavLink>
            </motion.div>
          </div>
          <div className="flex p-3 mt-8 mx-auto">
            <motion.div
              className="detention"
              initial={{ x: -250 }}
              animate={{ x: -10 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <NavLink className="link" to="/detention">
                <Block imageUrl={detention} title="detention" />
              </NavLink>
            </motion.div>

            <motion.div
              className="online_safety"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <NavLink className="link" to="/online_safety">
                <Block imageUrl={o_safety} title="online_safety" />
              </NavLink>
            </motion.div>

            <motion.div
              className="online_shop"
              initial={{ x: 250 }}
              animate={{ x: 10 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <NavLink className="link" to="/online_shop">
                <Block imageUrl={o_shop} title="online_shop" />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Kidztube;
