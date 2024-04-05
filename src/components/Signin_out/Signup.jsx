import React, { useState } from "react";
import "../Login/login.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "./firebase";
import { NavLink } from "react-router-dom";
import girl from "../assets/login.png";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = () => {
    console.log("clcikced");
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all the fields");
      return;
    }
    setErrorMsg("");

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <>
     <NavLink className="logo" to="/">Legal Lift</NavLink> 
      <div className="outer2">
        <div className="wrapper2">
          <form>
            <h1>Sign Up</h1>

            <div className="inputs">
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter Name"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, name: event.target.value }))
                }
                required
              />
              <i className="bx bxs-user"></i>
            </div>

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
              </div>
              <b className="errorMsg">{errorMsg}</b>
              <button type="submit" onClick={handleSubmission} className="btn">
              SignUp
            </button>
            </div>

            
            <div className="register-link">
              <p className="footer">
                Already have an account?{" "}
                <span>
                  <NavLink to="/login">Login</NavLink>
                </span>
              </p>
            </div>
          </form>
        </div>
        <div className="girl">
          <img height="500px" src={girl}></img>
        </div>
      </div>
    </>
  );
}

export default Signup;
