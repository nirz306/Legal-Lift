import React from "react";
import { ABOUTUS_IMG_LINK } from "../utilites/constants";

const aboutus = () => {
  return (
    <>
      <div class="heading">
        <p>
          'In the book of life,every child deserves a chapter on legal rights
          ,ensuring a story of fairness and justice'.
        </p>
        <div class="container">
          <section class="about">
            <div>
              <img  className="aboutusimg" src={ABOUTUS_IMG_LINK } height="300" width="300"></img>
            </div>
            <div class="about-content">
              <h2>"Fueling Young Minds with Empowerment"</h2>
              <p>
                We're here to ensure the well-being and rights of young ones.
                Explore legal concepts through engaging stories and test your
                understanding with fun multiple-choice questions. We're
                committed to simplifying the world of law for kids, making it
                accessible and enjoyable. Empower young minds with knowledge
                that matters!
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default aboutus;
