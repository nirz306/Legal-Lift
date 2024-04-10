import React, { useState } from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../Signin_out/firebase";
// import girl from "../assets/login.png";
import gif from "../assets/login2gif.gif";

function LoginForm() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = () => {
    console.log("submit");
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all the fields");
      return;
    }
    setErrorMsg("");

    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        navigate("/");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <>
     <NavLink className="logo" to="/">Legal Lift</NavLink> 
      <div className="outer">
        <div className="wrapper">
          <form>
            <h1 className="login">Login</h1>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter email address"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                required
              />
              <i className="bx bxs-user"></i>
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, pass: event.target.value }))
                }
                required
              />
              <i className="bx bxs-lock-alt"></i>

              <b className="errorMsg">{errorMsg}</b>
            </div>

            <button type="" className="btn" onClick={handleSubmission}>
              Login
            </button>

            <div className="register-link">
              <p className="foot">
                {" "}
                Don't have an account?{" "}
                <span>
                  <NavLink to="/signup">Register</NavLink>
                </span>
              </p>
            </div>
          </form>
        </div>
        <div className="girl">
          <img className="gif" height="500px" src={gif}></img>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
