import React from 'react';
import "./home.css";
import lawyer from "./char2.png";
import AboutUs from '../aboutus'; // Import the AboutUs component

const Home = () => {
  return (
    <>
    <div className='home'>
     <p className='title'>Unlock Your Potential<p></p> 
      with India's Leading<p></p> Legal Minds</p>
      <div className="bgimg">
        <img className="lawyer" src={lawyer} alt="" />
      </div>
      </div>
      <div className='aboutUs'><AboutUs /></div> {/* Render the AboutUs component */}
    </>
  );
}

export default Home;
