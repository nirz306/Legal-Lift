//arrow functions

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    <div className=" md:flex md:mt-4 hidden">
          <Link className="link text-[26px]" to="/">
            Home
          </Link>
          <Link className="link text-[26px]  ml-[30px]" to="/blogs">
            Blogs
          </Link>
          <Link className="link text-[26px] ml-[30px] mr-[30px]" to="/login">
            Login
          </Link>
        
         
      </div>
    
  );
};

export default Navbar;
