import React , { useState } from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../Signin_out/firebase";
// import { auth } from "./firebase";

function LoginForm() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all the fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
          navigate("/");
        })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="wrapper">
      <form>
        <h1>Login</h1>

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

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>

        <button disabled={submitButtonDisabled} type="submit" className="btn" onClick={handleSubmission}>
          Login
        </button>
        <div className="register-link">
          <p>
            {" "}
            Don't have an account?{" "}
            <span>
              <NavLink to="/signup">Register</NavLink>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
