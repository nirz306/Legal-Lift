import React from "react";
import "./home.css";
import lawyer from "./char2.png";
import AboutUs from "../aboutus"; // Import the AboutUs component
import sitting_girl from "./Girl_sitting_2.png"
import girl_social from "./Girl_social2.png"

const Home = () => {
  return (
    <>
      <div className="home">
      <div className="bgimg">
          <img className="girl" src={girl_social} alt="" />
        </div>
        <p className="title">
          Unlock Your Potential<p></p>
          with India's Leading<p></p> Legal Minds
        </p>
        
      </div>
      <div className="wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L80,208C160,192,320,160,480,165.3C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <h1></h1>
      </div>
      <div className="aboutUs">
        <AboutUs />
      </div>{" "}
      {/* Render the AboutUs component */}
    </>
  );
};

export default Home;
