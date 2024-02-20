import React,{ useState } from "react";
// import React from 'react'
import "./login.css"
import Home from "../Home/Home";
import Navbar from "../../navbar/Navbar";
// import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



//verifies if login details match or not 
let verfication = true;
function Login () {
    const[state , setstate] = useState("");
  return (
    <>
      <div className='text'>
        <p>Unlock Your Potential </p>
        with India's 
        <p></p>Leading Legal Minds
      </div>
      <div className="loginform">
        <form className="loginForm">
                 
                <input type="text" className="loginInput" placeholder="Enter your email"/>
                <input type="password"  className="loginInput" placeholder="Enter your password"/>
                <button className="loginButton" onClick={() => verfication ? setstate("logedin") : setstate("incorrect")}>Login</button>

                
            </form>
      </div>
        <div>

        </div>
    </>
  
  )
}

// console.log{state};

export default Login
