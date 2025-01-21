import React, { useEffect } from "react";
import Block from "./Block";
import sex_har from "../assets/sexual_harr.png";
import acc from "../assets/road_accc.png";
import phone from "../assets/phone pursuit.png";
import respect from "../assets/respect realm.png";
import { NavLink } from "react-router-dom";
import team from "../assets/team.png";
import bribe from "../assets/bribe.png";
import tenant from "../assets/tenant.png";
import { motion, useAnimation } from "framer-motion";
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

const Squests = () => {
  const blocks = [
    { image: acc, title: "Road Accident", path: "/Road Accident" },
    { image: sex_har, title: "Sexual Harassment", path: "/Sexual harassment" },
    { image: phone, title: "Lost Phone", path: "/Lost phone" },
    { image: respect, title: "Respect Realm", path: "/respect_realm" },
    { image: bribe, title: "Bribe", path: "/bribe" },
    { image: tenant, title: "Tenant", path: "/tenant" },
  ];

  return (
    <>
      <div className="min-h-screen">
        <NavLink className="text-[50px] font-heading" to="/">
          Legal Lift
        </NavLink>
        <div className="flex lg:w-[1200px] mx-auto md:ml-[70px]">
          <div className="bg-[#A1C398] w-[700px] h-[500px] rounded-lg p-4 mr-10">
            <p className="mt-[10px] text-[50px] text-center font-heading">Scenario Quests</p>
            <br />
            <p className="md:text-[28px] mt-[-15px] text-justify font-body text-[24px] ">
              Welcome to our captivating legal scenario quest! Dive into real-life case
              studies and discover the intricacies of law in an engaging and interactive
              way. Our platform offers students a hands-on approach to learning, where
              they can explore, analyze, and solve legal challenges firsthand. Get ready
              to unlock the secrets of the legal world and embark on an exciting journey
              of discovery!
            </p>
          </div>
          <img
            src={team}
            alt=""
            className="w-max h-[300px] justify-center align-center my-auto hidden lg:block "
          />
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

export default Squests;
