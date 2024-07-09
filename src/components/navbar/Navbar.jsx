//arrow functions

import { Link } from "react-router-dom";
// import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex flex-row-reverse ml-[1000px]">
        <div>
          {" "}
          <Link className="link text-[26px] ml-[30px]" to="/login">
            Login
          </Link>
        </div>
        <div>
          <Link className="link text-[26px]  ml-[30px]" to="/blogs">
            Blogs
          </Link>
        </div>
        <div>
          <Link className="link text-[26px]  ml-[30px]" to="/">
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
