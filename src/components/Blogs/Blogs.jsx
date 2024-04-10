import React from 'react';
import { NavLink } from "react-router-dom";
import racism from "../assets/racism.png";
import customer_rights from "../assets/customer.avif";
import sexual_harass from "../assets/POSH Act.jpg";
import stranger from "../assets/stranger_danger.jpg";
import "./Blogs.css"

const Blogs = () => {
  return (
   <>
    <NavLink className="logo" to="/">Legal Lift</NavLink> 
   
   
    <div>
      <h1 id="title">Discover : Articles and Stories</h1>
      <br></br>
      <p id = "subtitle">Delve into knowledge through our blog - discover enlightening articles and inspiring stories that ignite your transformative journey.</p>
    </div>
      
    <div className="components">
      <div className="row">
        <div className="imageWithQuote">
          <div className="imageContainer">
          <a className="link" href="http://surl.li/sjblo" target="_blank" rel="noopener noreferrer">  
            <img className='blogg' src={racism} alt="Racism" />
            </a>
          </div>
         
          <div className="quoteContainer">
            <h3>Indian Country Stands in Solidarity with Black Lives Matter</h3>
          </div>
        </div>

        <div className="imageWithQuote">
          <div className="imageContainer">
          <a className="link" href="https://www.kredx.com/blog/consumers-know-your-rights/" target="_blank" rel="noopener noreferrer"> 
            <img className='blogg' src={customer_rights} alt="Customer Rights" />
            </a>
          </div>
          <div className="quoteContainer">
            <h3>Consumers, Know Your Rights , KredX Blog</h3>
          </div>
        </div>

        <div className="imageWithQuote">
          <div className="imageContainer">
          <a className="link" href="https://www.thehindu.com/news/national/explained-the-indian-law-on-sexual-harassment-in-the-workplace/article66854968.ece" target="_blank" rel="noopener noreferrer"> 
            <img src={sexual_harass} alt="Sexual Harassment" />
            </a>
          </div>
          <div className="quoteContainer">
            <h3>The POSH Act : Indian law for sexual harassment in the workplace</h3>
          </div>
        </div>

        <div className="imageWithQuote">
          <div className="imageContainer">
          <a className="link" href="http://surl.li/sjbom" target="_blank" rel="noopener noreferrer"> 
            <img src={stranger} alt="Stranger Safety" />
            </a>
          </div>
          <div className="quoteContainer">
            <h3>Stranger Danger and Personal Safety</h3>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Blogs;
