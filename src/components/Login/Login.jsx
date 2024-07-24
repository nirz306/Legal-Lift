import React, { useState } from "react";
// import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router";
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
    <>
<NavLink className="absolute top-8 left-[10%] text-5xl font-[Galada] text-black no-underline cursor-pointer z-20" to="/">
Legal Lift
      </NavLink>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex justify-center flex-wrap bg-red-300 mt-[210px] mb-[70px] gap-5 rounded-lg w-[80%] h-auto  text-center">
      <div className="mt-12 mb-12 mr-12 ml-12 w-[420px] bg-[#eec9c9] text-white rounded-[12px] p-8 transition-shadow duration-300 ease-in-out">
      <form>
            <h1 className="text-[51px] text-center text-black font-[Galada] font-normal opacity-100">Login</h1>
            <div className="relative w-full h-[50px] my-[30px]">
              <input
                type="text"
                placeholder="Enter email address"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
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

                <b className="mb-[20px] font-bold text-[0.875rem] text-[#c02802]">{errorMsg}</b>
            </div>

            <button
              disabled={submitButtonDisabled}
              type="submit"
               className="w-full h-[45px] bg-[#f88d8d] border-none outline-none rounded-[40px] cursor-pointer text-[16px] text-[#333] font-crimson font-bold"
              onClick={handleSubmission}
            >
              Login
            </button>

            <div className="mt-[5px] text-center font-[Crimson Text] text-black">
              <p  className="text-[17px]">
                {" "}
                Don't have an account?{" "}
                <span>
                  <NavLink to="/signup">Register</NavLink>
                </span>
              </p>
            </div>
          </form>
        </div>
          <img className=" h-[500px] w-[500px] hidden sm:block" src={gif}></img>
      </div>
      </div>
    </>
  );
}
export default LoginForm;