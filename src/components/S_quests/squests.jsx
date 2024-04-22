import sex_har from "../assets/sexual_harr.png";
import Block from "./Block";
import acc from "../assets/road_accc.png";
 import phone from "../assets/phone pursuit.png";
import respect from "../assets/respect realm.png";
import "../S_quests/squests.css";
import { NavLink } from 'react-router-dom'
import team from "../assets/team.png";
import {delay, motion} from "framer-motion";

const Squests = () => {
  return (
    <>
    <NavLink className = "logo" to='/'>Legal Lift</NavLink>
    <div className="out">
      <div className="wrap">
        <p className="title">Scenario Quests</p>
        <br></br>

        <p className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, pariatur.
        </p>

        
      </div>
      <div className="team"></div>
      <img src={team} alt="" className="cover" />
    </div>

      <div className="components">
        <div className="row1">
          <motion.div className="road_acc" initial = {{x : -250}} animate = {{x : -10}} transition = {{delay : 0.5, duration : 1}}>
            <NavLink className="s_link" to="/Road Accident">
              <Block imageUrl={acc} title="road_acc" />
            </NavLink>
          </motion.div>

          <motion.div className="sexual_harras" initial = {{opacity : 0}} animate = {{opacity : 1}} transition={{delay : 0.5, duration : 1}}>
            <NavLink className="s_link" to="/Sexual harresment">
              <Block imageUrl={sex_har} title="Sexual harassment" />
            </NavLink>
          </motion.div>

          <motion.div className="lost_phone" initial = {{x : 250}} animate = {{x : 10}} transition = {{delay : 0.5, duration : 1}}>
            <NavLink className="s_link" to="/Lost phone">
              <Block imageUrl={phone} title="Sexual harassment" />
            </NavLink>
          </motion.div>
        </div>
        <div className="row2">
          <motion.div className="respect_realm" initial = {{x : -250}} animate = {{x : -10}} transition = {{delay : 0.5, duration : 1}}>
            <NavLink className="s_link" to="/respect_realm">
              <Block imageUrl={respect} title="Respect Realm" />
            </NavLink>
          </motion.div>

          <motion.div className="sexual_harras" initial = {{opacity : 0}} animate = {{opacity : 1}} transition={{delay : 0.5, duration : 1}}>
            <NavLink className="s_link" to="/Sexual harresment">
              <Block imageUrl={sex_har} title="Sexual harassment" />
            </NavLink>
          </motion.div>

          <div className="sexual_harras" initial = {{x : 250}} animate = {{x : 10}} transition = {{delay : 0.5, duration : 1}}>
            <NavLink className="s_link" to="/Sexual harresment">
              <Block imageUrl={sex_har} title="Sexual harassment" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Squests;
