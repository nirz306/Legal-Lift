import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  useEffect(() => {
    // Check if the user is logged in by looking for a token in cookies or localStorage
    const token = localStorage.getItem("token"); // Assuming you store the JWT token in localStorage
    if (token) {
      setIsLoggedIn(true);
    }
  }, []); // Run once on component mount

  const handleLogout = () => {
    // Clear the token from storage and update the state
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div className="md:flex md:mt-4 hidden">
      <Link className="link text-[26px]" to="/">
        Home
      </Link>
      <Link className="link text-[26px] ml-[30px]" to="/blogs">
        Blogs
      </Link>
      {isLoggedIn ? (
        <button
          className="link text-[26px] ml-[30px] mr-[30px]"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <Link className="link text-[26px] ml-[30px] mr-[30px]" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
