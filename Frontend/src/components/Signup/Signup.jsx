import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import gif from "../assets/logingif.gif";
import Logo from "../../helpers/Logo";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const handleSubmission = async (e) => {
    e.preventDefault();
    setSubmitButtonDisabled(true); // Disable the button to prevent multiple submissions

    try {
      const response = await axios.post(
        `${import.meta.env.BACKEND_BASEURL}/user/signup`,
        {
          email,
          password,
          name,
        },
        {
          withCredentials: true, // Important for sending cookies
        }
      );

      console.log("Response headers:", response.headers);

      if (response.status === 201) {
        console.log("Signup successful:", response.data.message);
        localStorage.setItem("token", response.data.token); // Store the token
        localStorage.setItem("username", name); // Store the name

        navigate("/", { state: { username: name } }); // Redirect to homepage
      } else {
        setErrorMessage("This user already exists or signup failed.");
      }
    } catch (err) {
      if (err.response) {
        console.error("Signup failed:", err.response.data.error);
        setErrorMessage(err.response.data.error || "An error occurred during signup.");
      } else if (err.request) {
        console.error("No response received from server:", err.request);
        setErrorMessage("No response from the server. Please try again.");
      } else {
        console.error("Error during signup:", err.message);
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setSubmitButtonDisabled(false); // Re-enable the button after processing
    }
  };

  return (
    <>
      <Logo />
      <div className="flex items-center justify-center h-max relative">
        <div className="flex justify-between md:bg-[#A1C398] my-auto h-max gap-5 rounded-lg mx-auto">
          <div>
            <img
              className="h-[500px] w-[500px] hidden md:block"
              src={gif}
              alt="Signup GIF"
            ></img>
          </div>
          <div className="my-auto lg:mr-12 h-max w-[420px] bg-[#f6f4db] text-white rounded-[12px] p-8">
            <form onSubmit={handleSubmission}>

              <h1 className="text-[51px] text-center text-black font-heading">Sign Up</h1>
              
              <div className="mt-[-30px]">
                <div className="relative w-full h-[50px] my-[30px] font-body">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    className="w-full h-full bg-transparent border-2 text-xl border-solid rounded-[40px] text-[25px] text-black px-[20px] pr-[45px] placeholder-black focus:outline-none font-body"
                  style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
                  />
                </div>

                <div className="relative w-full h-[50px] my-[30px] font-body">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={email}
          onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-full bg-transparent border-2 text-xl border-solid rounded-[40px] text-[25px] text-black px-[20px] pr-[45px] placeholder-black focus:outline-none font-body"
                    style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
                  />
                </div>

                <div className="relative w-full h-[50px] my-[30px]">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
          onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full h-full bg-transparent border-2 text-xl border-solid rounded-[40px] text-[25px] text-black px-[20px] pr-[45px] placeholder-black focus:outline-none font-body"
                    style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
                  />
                </div>

                <b className="mb-[20px] font-bold  font-body text-[0.875rem] text-[#c02802]">
                  {errorMessage}
                </b>

                <button
                  type="submit"
                  disabled={submitButtonDisabled}
                  className={`w-full h-[45px] ${
                    submitButtonDisabled ? "bg-gray-400" : "bg-[#A1C398] hover:bg-[#839f7b] font-body"
                  } border-none outline-none rounded-[40px] cursor-pointer text-[25px] text-[#333] font-body mt-[-2px]`}
                >
                  Sign Up
                </button>
              </div>
              <div className="mt-[5px] text-center font-body  text-black">
                <p className="text-[20px]">
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
};

export default Signup;
