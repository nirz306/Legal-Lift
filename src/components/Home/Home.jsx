import React from "react";
import "./home.css";

import girl from "./Girl_sitting_2.png";
import AboutUs from "../aboutus"; // Import the AboutUs component
import sitting_girl from "./Girl_sitting_2.png";
import girl_social from "./Girl_social2.png";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <>
      <div className="home">
        <p className="title">
          Unlock Your Potential<p></p>
          with India's Leading<p></p> Legal Minds
        </p>
        <div className="bgimg">
          <img className="girl" src={girl_social} alt="" />
        </div>
      </div>

      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,224L80,208C160,192,320,160,480,165.3C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="wave2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,138.7C480,160,600,224,720,261.3C840,299,960,309,1080,272C1200,235,1320,149,1380,106.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </div>

      <div className="aboutUs">
        <AboutUs />
      </div>

      <div className="blogs">
        <Blogs image={girl} title={"Hello world"} />
      </div>

      <h1></h1>
    </>
  );
};

export default Home;
