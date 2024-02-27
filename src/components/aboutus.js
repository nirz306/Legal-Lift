import React from "react";
// import { about_us_img_link } from "../utilites/constants";
import about_us_img_link from "./office-business-planning-and-developing-strategy.png"
import integrity_img_link from "./integrity-2.png"
import knowledge_img_link from "./books-2.png"
import creativity_img_link from "./creativity.jpg"
import growth_img_link from "./growth.png"
import {motion} from "framer-motion"
import {fadeIn} from "./variants"
import "./aboutus.css"


const aboutus = () => {
  return (
    <>
      <div class="heading" >
        <motion.p id="head" variants = {fadeIn("down",0.2)} initial = "hidden" whileInView = {"show"} viewport = {{once : false,amount : 0.7}}>
          "In the book of life,every child deserves a chapter on legal rights
          ,ensuring a story of fairness and justice".
        </motion.p>
        <div class="container">
          <section class="about">
            

            <motion.div class = "whyourweb" >
              <h2>Why our website ? </h2>
              
              <p>
              
              We believe that learning about the law should be more than just a task; it should be a joy. Through meticulously crafted lessons, quizzes, and interactive content, we turn legal concepts into an exciting journey of discovery.
              </p>
              </motion.div>

              <motion.div variants = {fadeIn("right",0.2)} initial = "hidden" whileInView = {"show"} viewport = {{once : false,amount : 0.7}} >
               
               <img class = "about_us_image"  src={about_us_img_link} width = "300px" height="300px" ></img>
            </motion.div> 
              

      

            
            <motion.div class="about-content" variants = {fadeIn("left",0.2)} initial = "hidden" whileInView = {"show"} viewport = {{once : false,amount : 0.7}}>
              <h2>"Our Mission"</h2>
              <p>
              We are driven by the mission to make the law accessible and engaging. Our commitment is to break down barriers and empower students with the knowledge they need to navigate the legal world with confidence.That's why infuse our content with enthusiasm, creating an environment where the joy of learning intersects with the principles of law. Empower young minds with knowledge that matters!
                
              </p>
            </motion.div>

           
          </section>
          <section class = "values" >
              <h2>"Core values"</h2>
              <div>
              <img class = "integrity"  src={integrity_img_link} width = "170px" height="170px" ></img>

              <img class = "knowledge"  src={knowledge_img_link} width = "170px" height="170px" ></img>

              <img class = "creativity"  src={creativity_img_link} width = "170px" height="170px" ></img>

              <img class = "growth"  src={growth_img_link} width = "170px" height="170px" ></img>
              </div>
              <div>
                <span id = "I">Integrity</span>
                <span id = "K">Knowlegde</span>
                <span id = "C">Creativity</span>
                <span id = "G">Growth</span>
              </div>

              
              

            </section>
        </div>
      </div>
    </>
  );
};

export default aboutus;
