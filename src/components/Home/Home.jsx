import React from "react";
import "./home.css";
import cyber from "../assets/cyber.jpg"
import blm from "../assets/blm.jpg";
import privacy from "../assets/privacy.jpg";
import AboutUs from "./About Us/aboutus";
import girl_social from "../assets/Girl_with_laptop.png"
import Blogs from "./Blogs/Blogs";
import SimpleSlider from "./Slider";
 



const Home = () => {
  return (
    <>
   
      <div className="home">
        <p className="title">
          Unlock Your Potential<p></p>
          with India's Leading<p></p> Legal Minds
        </p>
        <div className="bgimg">
          {/* <img className="girl" src={girl_social} alt="" /> */}
          <p></p>
        </div>
      </div>

      

      

      <div className="aboutUs">
        <AboutUs />
      </div>


      {/* <div className="slider">
        This is slider
        <SimpleSlider/>
      </div> */}

      <h1 className="blog_title">Trending Posts</h1>
      {/* <div className="blog_page">

      <div className="blogs">
          <Blogs image={cyber} title={"Cyber Law Essentials"} author={"John"}/>
        </div>

        <div className="blogs">
          <Blogs image={blm} title={"Black Lives Matter"} author={"John"}/>
        </div>

        <div className="blogs">
          <Blogs image={privacy} title={"Privacy Rights"} author={"John"} />
        </div>

        <div className="blogs">
          <Blogs image={cyber} title={"Cyber Law Essentials"} author={"John"}/>
        </div>

        <div className="blogs">
          <Blogs image={blm} title={"Black Lives Matter"} author={"John"}/>
        </div>

        <div className="blogs">
          <Blogs image={privacy} title={"Privacy Rights"} author={"John"} />
        </div>
      </div> */}

     
      
      
      
    </>
  );
};

export default Home;
