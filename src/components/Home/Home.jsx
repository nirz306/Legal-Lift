import React from "react";
import "./home.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import couple from "../assets/couple.png";
import three from "../assets/three.png";
import kt from "../assets/kt.png";
import sq from "../assets/sq.png";
import blogss from "../assets/blogg.png";
import lt from "../assets/lt.png";

const Home = () => {
  return (
    <>
      <Link className="logo" to="/">
        Legal Lift
      </Link>
      <Navbar />
      <div className="head">
        <div className="header">
          <p className="tit">Discovering the knowledge of Law</p>
          <div className="desp">
            Unraveling the secrets of law is like discovering the hidden keys to
            a fair of society and journey where every revelation empowers us
            towards greater understanding and equality for all.
          </div>
        </div>

        <div className="three">
          <img src={three}></img>
        </div>
      </div>

      <div className="features">
        <div className="row1">
          <Link className="link" to="/kidztube">
            <div className="kidztube">
              <p className="tit">Kidztube</p>
              <img className="cov" src={kt}></img>
              <div className="content">
                Discover into the fascinating world of law with our engaging
                visuals designed to make learning fun!
              </div>
            </div>
          </Link>
          <Link className="link" to="/rule">
            <div className="legaltrivia">
              <p className="tit">Legal Trivia</p>
              <img className="cov" src={lt}></img>
              <div className="content">
                Embark on a legal adventure in our quiz section! Unravel the
                mysteries of world of legal wisdom!
              </div>
            </div>
          </Link>
        </div>

        <div className="row2">
          <Link className="link" to="/squests">
            <div className="squests">
              <p className="tit">Scenario Quests</p>
              <img className="cov" src={sq}></img>
              <div className="content">
                Experience real-life scenarios through engaging visual content,
                followed by thought-provoking questions
              </div>
            </div>
          </Link>
          <Link className="link" to="/blogs">
            <div className="blogs">
              <p className="tit">Blogs</p>
              <img className="cov" src={sq}></img>
              <div className="content">
                Dive into our blog for easy-to-understand articles on law! All
                about justice, rights, and the legal world!
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="footer">
        <div className="imag">
          <img className="couple" src={couple} alt="" />
        </div>
        <div className="quote">QUOTE</div>
        <div className="media">Follow us on</div>
      </div>
    </>
  );
};

export default Home;
