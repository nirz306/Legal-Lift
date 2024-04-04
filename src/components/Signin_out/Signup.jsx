import React, { useState } from "react";
import "../Login/login.css";
// import { Link} from "react-router-dom/cjs/react-router-dom.min";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "./firebase";
import { NavLink } from "react-router-dom";

function Signup() {
   
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all the fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async(res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user,{
          displayName:values.name,
        })
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
        <h1>Sign Up</h1>

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

          <b className="errorMsg">{errorMsg}</b>
        </div>
        <button
          type="submit"
          onClick={handleSubmission}
          disabled={submitButtonDisabled}
          className="btn"
        >
          SignUp
        </button>
        <div className="register-link">
          <p>
            Already have an account?{" "}
            <span>
              <NavLink to="/login">Login</NavLink>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
