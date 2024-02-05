import React from "react";
// import lawimg from "./law.jpg";

const aboutus = () => {
  return (
    <>
      <div class="heading">
        <h1>About Us</h1>
        <p>
          In the book of life,every child deserves a chapter on legal rights
          ,ensuring a story of fairness and justice.
        </p>
        <div class="container">
          <section class="about">
            <div>
              {/* <img src={lawimg} alt="about us" height="300" width="300"></img> */}
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
