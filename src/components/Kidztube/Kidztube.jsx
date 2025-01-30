import React, { useEffect, useState } from "react";

import Block from "../S_quests/Block";
import rasicm from "../assets/shades of struggle.png";
// import "../S_quests/squests.css";
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

const AnimatedBlock = ({ image, title, path, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, delay }}
      className="flex justify-center"
    >
      <NavLink className="s_link" to={path}>
        <Block imageUrl={image} title={title} />
      </NavLink>
    </motion.div>
  );
};

const Kidztube = () => {
  // const [ref1, inView1] = useInView({ triggerOnce: false });
  //   const [ref2, inView2] = useInView({ triggerOnce: false });
  //   const controls1 = useAnimation();
  //   const controls2 = useAnimation();

  //   useEffect(() => {
  //       if (inView1) {
  //           controls1.start({ opacity: 1, y: 0, transition: { duration: 1 } });
  //       } else {
  //           controls1.start({ opacity: 0, y: 70 });
  //       }
  //   }, [controls1, inView1]);

  //   useEffect(() => {
  //       if (inView2) {
  //           controls2.start({ opacity: 1, y: 0, transition: { duration: 1 } });
  //       } else {
  //           controls2.start({ opacity: 0, y: 70 });
  //       }
  //   }, [controls2, inView2]);

  // const [move, setMove] = useState(false);

  const blocks = [
    { image: rasicm, title: "Rasicm", path: "/rasicm" },
    { image: c_rights, title: "Consumer Rights", path: "/consumer_rights" },
    { image: stranger, title: "Stranger Safety", path: "/stranger_safety" },
    { image: detention, title: "Detention", path: "/detention" },
    { image: o_safety, title: "Online Safety", path: "/online_safety" },
    { image: o_shop, title: "Tenant", path: "/online_shop" },
  ];
  return (
    <>
     <div id="top"></div>

     <div className="min-h-screen">

      <NavLink className="text-[50px] font-heading" to="/">
        Legal Lift
      </NavLink>

      <div className="flex mr-[100px]">
  {/* Colored Component */}
  <div className="bg-[#A1C398] ml-[100px] mr-[50px] mt-[25px] rounded-lg p-4 w-[700px] h-[500px]">
    <p className="font-heading mt-[10px] text-[50px] text-center">Kidztube</p>
    <br></br>
    <p className="text-[30px] mt-[-15px] text-justify font-body">
      Step into a world of wonder at KidzTube! We've handpicked
      videos that spark curiosity and inspire learning. Here, your
      children can explore a world of educational videos that are
      both fun and informative. Dive into a treasure trove of videos
      designed to ignite young minds and foster a love for knowledge.
    </p>
  </div>

  {/* Image */}
  <div>
    <img src={team} alt="" className="h-[500px] w-[500px]" />
  </div>
</div>
      </div>
       

<div className="grid lg:grid-cols-3 lg:gap-3 min-h-screen md:grid-cols-2 gap-4 ">
        {blocks.map((block, index) => (
          <AnimatedBlock
            key={index}
            image={block.image}
            title={block.title}
            path={block.path}
            delay={index * 0.05}
          />
        ))}
      </div>

    </>
  );
};
export default Kidztube;