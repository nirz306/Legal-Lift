import React,{ useEffect, useState } from "react";
import Block from "./Block";
import sex_har from "../assets/sexual_harr.png";
import acc from "../assets/road_accc.png";
import phone from "../assets/phone pursuit.png";
import respect from "../assets/respect realm.png";
import { NavLink } from "react-router-dom";
import team from "../assets/team.png";
import bribe from "../assets/bribe.png";
import tenant from "../assets/tenant.png";
import { delay, motion } from "framer-motion";
import { useAnimation, color } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Squests = () => {
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
    <div id=""></div>
      <NavLink className="text-[50px] " to="/">
        Legal Lift
      </NavLink>
      <div className="flex mr-[100px]">
        <div className="bg-[#A1C398] ml-[100px] mr-[50px]  mt-[25px] rounded-lg p-4">
          <p className="font-galada mt-[10px] text-[50px] text-center">Scenario Quests</p>
          <br></br>

          <p className="text-[30px] mt-[-15px] text-justify font-sansita">
            "Welcome to our captivating legal scenario quest! Dive into
            real-life case studies and discover the intricacies of law in an
            engaging and interactive way. Our platform offers students a
            hands-on approach to learning, where they can explore, analyze, and
            solve legal challenges firsthand. Get ready to unlock the secrets
            of the legal world and embark on an exciting journey of discovery!"
          </p>
        </div>
        <div className="team"></div>
        <img src={team} alt="" className="cover" />
      </div>

      <div className="components">
        <motion.div className="row1" ref={ref1}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls1}>
          <div className="road_acc">
           
            <NavLink className="s_link" to="/Road Accident">
              <Block imageUrl={acc} title="road_acc" />
            </NavLink>
          </div>

          <div className="sexual_harras">
            <NavLink className="s_link" to="/Sexual harresment">
              <Block imageUrl={sex_har} title="Sexual harassment" />
            </NavLink>
          </div>

          <div className="lost_phone">
            <NavLink className="s_link" to="/Lost phone">
              <Block imageUrl={phone} title="Lost phone" />
            </NavLink>
          </div>
        </motion.div>
        <motion.div className="row2" ref={ref2}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls2}>
          <div className="respect_realm">
            <NavLink className="s_link" to="/respect_realm">
              <Block imageUrl={respect} title="Respect Realm" />
            </NavLink>
          </div>

          <div  className="bribe">
            <NavLink className="s_link" to="/bribe">
              <Block imageUrl={bribe} title="Bribe" />
            </NavLink>
          </div>

          <div  className="tenant">
            <NavLink className="s_link" to="/tenant">
              <Block imageUrl={tenant} title="Tenant" />
            </NavLink>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Squests;
