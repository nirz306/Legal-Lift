import React from 'react';
import { NavLink } from "react-router-dom";
import racism from "../assets/racism.png";
import customer_rights from "../assets/customer.avif";
import sexual_harass from "../assets/POSH Act.jpg";
import stranger from "../assets/stranger_danger.jpg";
import "./Blogs.css";
import BlogPost from './BlogPost';

const Blogs = () => {
  return (
    <>
      <NavLink className="relative top-8 mx-auto my-6 text-5xl font-[Galada] text-black no-underline cursor-pointer sm:ml-16" to="/">Legal Lift</NavLink>
      
      <div className="text-center">
        <h1 className="mt-[75px] text-[35px] text-black font-gentium font-normal">Discover: Articles and Stories</h1>
        <br />
        <p className="text-[23px] text-black font-gentium font-normal italic">Delve into knowledge through our blog - discover enlightening articles and inspiring stories that ignite your transformative journey.</p>
      </div>
      
      <div className="components mt-[100px] flex flex-col items-center bg-transparent">
        <div className="row flex justify-around items-center flex-wrap">
          <BlogPost
            imageSrc={racism}
            link= "http://surl.li/sjblo"
            altText="Racism"
            quote= "Indian Country Stands in Solidarity with Black Lives Matter"
          />
          
          <BlogPost
            imageSrc={customer_rights}
            link="https://www.kredx.com/blog/consumers-know-your-rights/"
            altText="Customer Rights"
            quote="Consumers, Know Your Rights , KredX Blog"
          />
          
          <BlogPost
            imageSrc={sexual_harass}
            link="https://www.thehindu.com/news/national/explained-the-indian-law-on-sexual-harassment-in-the-workplace/article66854968.ece"
            altText="Sexual Harassment"
            quote="The POSH Act : Indian law for sexual harassment in the workplace"
          />
          
          <BlogPost
            imageSrc={stranger}
            link="http://surl.li/sjbom"
            altText="Stranger Safety"
            quote="Stranger Danger and Personal Safety"
          />
        </div>
      </div>
    </>
  );
};

export default Blogs;
