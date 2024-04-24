import React from "react";
import Block from "../S_quests/Block";
import rasicm from "../assets/shades of struggle.png";
import "../S_quests/squests.css";
import c_rights from "../assets/c_rights.png";
import o_safety from "../assets/online_safety.png";
// import c_freedom from "../assets/"
import stranger from "../assets/strager safety.png";
import detention from "../assets/unauthorised detension.png";
import { NavLink } from "react-router-dom";
import team from "../assets/team.png";
import o_shop from "../assets/online_shopping.png";
import {delay, motion} from "framer-motion";

const Kidztube = () => {
  return (
    <>
        <NavLink className="logo" to="/">Legal Lift</NavLink> 
        <div className="outermost">
      <div className="out">
        <div className="wrap">
          <p className="title">Kidztube</p>
          <br></br>
          <div className="content1">
            <p>
              Step into a world of wonder at KidzTube! We've handpicked videos
              that spark curiosity and inspire learning. Here, your children can
              explore a world of educational videos that are both fun and
              informative. Dive into a treasure trove of videos designed
              to ignite young minds and foster a love for knowledge.
            </p>
          </div>
        </div>
        <div className="team"></div>
        <img className="cover" src={team} alt="" />
      </div>
      <div className="components">
        <div className="row1">
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

          <div className="stranger_safety">
            <NavLink className="link" to="/stranger_safety">
              <Block imageUrl={stranger} title="stranger_safety" />
            </NavLink>
          </div>
        </div>
        <div className="row2">
          <div className="detention">
            <NavLink className="link" to="/detention">
              <Block imageUrl={detention} title="detention" />
            </NavLink>
          </div>

          <div className="online_safety">
            <NavLink className="link" to="/online_safety">
              <Block imageUrl={o_safety} title="consumer_right" />
            </NavLink>
          </div>

          <div className="online_shop">
            <NavLink className="link" to="/online_shop">
              <Block imageUrl={o_shop} title="consumer_right" />
            </NavLink>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Kidztube;
