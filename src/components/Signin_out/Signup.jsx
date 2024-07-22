import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import axios from "axios";
import { auth } from "./firebase";
import { NavLink, useNavigate } from "react-router-dom";
// import "./Signup.css";
import gif from "../assets/logingif.gif";


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
    .then(async (res) => {
      setSubmitButtonDisabled(false);
      const user = res.user;
      await updateProfile(user, {
        displayName: values.name,
      });
      
      const userData = {
        Name: values.name,
        Email: values.email,
        password: values.pass,
      };

      axios.post('http://localhost:4000/api/help', userData)
          .then(response => {
            console.log('User data saved:', response.data);
            navigate("/");
          })
          .catch(error => {
            console.error('Error saving user data:', error);
            setErrorMsg('Failed to save user data');
          });
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <>
      <NavLink
  className="absolute top-[30px] left-[10%] text-[50px] font-[Galada] text-black no-underline cursor-pointer z-[2]"
  to="/"
>
  Legal Lift
</NavLink>
<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex justify-center flex-wrap bg-[#A1C398] mt-[210px] mb-[70px] gap-5 rounded-lg w-[80%] h-auto  text-center  ">
      <div>
      <img className=" h-[550px] w-[550px] hidden sm:block" src={gif} alt="Signup GIF"></img>
      </div>
      <div className="mt-[50px] mb-[50px] mr-[40px] ml-[40px] w-[420px] bg-[#f6f4db] backdrop-blur-[9px] text-white rounded-[12px] p-[30px_40px] transition-shadow duration-300 ease  ">
      <form>
      <h1 className="text-[51px] text-center text-black font-[Galada] font-normal opacity-100">Sign Up</h1>
      <div className="mt-[-30px]">
          <div className="relative w-full h-[50px] my-[30px]">
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
              required
              className="w-full h-full bg-transparent border-2 border-solid rounded-[40px] text-[16px] text-black px-[20px] pr-[45px] placeholder-black font-[Crimson Text] font-normal"
              style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
            />
            <i className="absolute right-[20px] top-[30%] transform translate-x-[-50%] text-[20px]"></i>
          </div>


              <div className="relative w-full h-[50px] my-[30px]">
                <input
                  type="text"
                  placeholder="Enter email address"
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                  required
                  className="w-full h-full bg-transparent border-2 border-solid rounded-[40px] text-[16px] text-black px-[20px] pr-[45px] placeholder-black font-[Crimson Text] font-normal"
                  style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
                />
                <i className="absolute right-[20px] top-[30%] transform translate-x-[-50%] text-[20px]"></i>
              </div>

              <div className="relative w-full h-[50px] my-[30px]">
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, pass: event.target.value }))
                  }
                  required
                  className="w-full h-full bg-transparent border-2 border-solid rounded-[40px] text-[16px] text-black px-[20px] pr-[45px] placeholder-black font-[Crimson Text] font-normal"
                  style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
                />
                <i className="absolute right-[20px] top-[30%] transform translate-x-[-50%] text-[20px]"></i>
                </div>
                <b className="mb-[20px] font-bold text-[0.875rem] text-[#c02802]">{errorMsg}</b>
                <button
                  type="button"
                  onClick={handleSubmission}
                  disabled={submitButtonDisabled}
                  className="w-full h-[45px] bg-[#A1C398] border-none outline-none rounded-[40px] cursor-pointer text-[16px] text-[#333] font-[Crimson Text] font-bold mt-[-2px]"
                >
                  Sign Up
                </button>
            </div>
            <div className="mt-[5px] text-center font-[Crimson Text] text-black">
  <p className="text-[17px]">
    Already have an account?{" "}
    <span>
      <NavLink
        to="/login"
        className="no-underline font-semibold hover:underline cursor-pointer"
      >
        Login
      </NavLink>
    </span>
  </p>
</div>

          </form>
        </div>
      </div>
      </div>

    </>
    );
}

export default Signup;
