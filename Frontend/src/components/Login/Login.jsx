// import React, { useState } from "react";
// import axios from "axios"; // Import axios
// import { NavLink, useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// // import { useNavigate } from "react-router";
// import { auth } from "../Signup/firebase";
// // import girl from "../assets/login.png";
// import gif from "../assets/login2gif.gif";
// import Logo from "../../helpers/Logo";

// const Login=() => {
//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     email: "",
//     pass: "",
//   });

//   const [errorMsg, setErrorMsg] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await axios.post('https://legal-lift-backend.vercel.app/user/login', {
//         email,
//         password,
//       },{
//         withCredentials: true
//       });
  
//    // After a successful login
// if (response.data.token) {
//   localStorage.setItem('token', response.data.token); // Store token
//   localStorage.setItem('user', JSON.stringify(response.data.user)); // Store the full user object as JSON
//   console.log("User info stored:", response.data.user);
//   navigate('/'); // Redirect to the home page or dashboard
// }
  
//     } catch (err) {
//       console.error('Login failed:', err.response?.data?.error || err.message);
//     }
//   };


//   return (
//     <>
//       <Logo />
//       <div className="flex items-center justify-center h-max  relative">
//         <div className=" flex justify-between lg:bg-red-300 my-auto  h-max gap-5 rounded-lg    mx-auto ">
//           <div className="my-auto lg:ml-12  h-max  w-[420px] bg-[#eec9c9] text-white rounded-[12px] p-8  ">
//             <form>
//               <h1 className="text-[51px] text-center text-black font-heading">
//                 Login
//               </h1>

//               <div className="relative w-full h-[50px] my-[30px] font-body">
//                 <input
//                   type="email"
//                   placeholder="Enter email address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="w-full h-full bg-transparent border-2 text-xl border-solid rounded-[40px] text-[25px] text-black px-[20px] pr-[45px] placeholder-black focus:outline-none font-body "
//                   style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}  
//                   />
//                </div>

//               <div className="relative w-full h-[50px] my-[30px] font-body">
//                 <input
//                   type="password"
//                   placeholder="Enter Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="w-full h-full bg-transparent border-2 text-xl border-solid rounded-[40px] text-[25px] text-black px-[20px] pr-[45px] placeholder-black focus:outline-none font-body "
//                   style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}  
//                 />
//                 <i className="absolute right-[20px] top-[30%] transform translate-x-[-50%] text-[20px]"></i>

//                 <b className="mb-[20px] font-bold text-[0.875rem] text-[#c02802]">
//                   {errorMsg}
//                 </b>
//               </div>

//               <button
//                 disabled={submitButtonDisabled}   
//                 type="submit"
//                 className="w-full h-[45px] bg-[#f88d8d] font-body hover:bg-[#ef7272] border-none outline-none rounded-[40px] cursor-pointer text-[25px] text-black font-crimson"
//                 onClick={handleLogin}
//               >
//                 Login
//               </button>

//               <div className="mt-[5px] text-center font-body  text-black">
//                 <p className="text-[20px]">
//                   {" "}
//                   Don't have an account?{" "}
//                   <span>
//                     <NavLink  className="no-underline font-semibold hover:underline cursor-pointer" to="/signup">Register</NavLink>
//                   </span>
//                 </p>
//               </div>
//             </form>
//           </div>
//           <img className=" h-[500px] w-[500px] hidden lg:block p-0" src={gif}></img>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Login;


import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Signup/firebase";
import gif from "../assets/login2gif.gif";
import Logo from "../../helpers/Logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setSubmitButtonDisabled(true); // Disable the button while processing
    setErrorMsg(""); // Clear any previous error messages

    // Check for empty fields
    if (!email || !password) {
      setErrorMsg("Please enter your email and password.");
      setSubmitButtonDisabled(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://legal-lift-backend.vercel.app/user/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      // After a successful login
      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // Store token
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Store the full user object as JSON
        console.log("User info stored:", response.data.user);
        navigate("/"); // Redirect to the home page or dashboard
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data?.error || err.message);

      // Handle specific error cases
      if (err.response) {
        switch (err.response.status) {
          case 400: // Incorrect email or password
            setErrorMsg("Incorrect email or password. Please try again.");
            break;
          case 404: // Email not found
            setErrorMsg("The email you entered is not registered.");
            break;
          case 401: // Unauthorized (e.g., incorrect password)
            setErrorMsg("Incorrect password. Please try again.");
            break;
          default:
            setErrorMsg("An error occurred. Please try again later.");
        }
      } else if (err.request) {
        // Network error (no response from server)
        setErrorMsg("Unable to connect to the server. Please check your internet connection.");
      } else {
        // Other errors (e.g., Axios configuration error)
        setErrorMsg("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setSubmitButtonDisabled(false); // Re-enable the button
    }
  };

  return (
    <>
      <Logo />
      <div className="flex items-center justify-center h-max relative">
        <div className="flex justify-between md:bg-red-300 my-auto h-max gap-5 rounded-lg mx-auto">
          <div className="my-auto lg:ml-12 h-max w-[420px] bg-[#eec9c9] text-white rounded-[12px] p-8">
            <form>
              <h1 className="text-[51px] text-center text-black font-heading">
                Login
              </h1>

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

              <div className="relative w-full h-[50px] my-[30px] font-body">
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-full bg-transparent border-2 text-xl border-solid rounded-[40px] text-[25px] text-black px-[20px] pr-[45px] placeholder-black focus:outline-none font-body"
                  style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
                />
                <i className="absolute right-[20px] top-[30%] transform translate-x-[-50%] text-[20px]"></i>

                <b className="mb-[20px] font-bold text-[0.875rem] text-[#c02802]">
                  {errorMsg}
                </b>
              </div>

              <button
                disabled={submitButtonDisabled}
                type="submit"
                className="w-full h-[45px] bg-[#f88d8d] font-body hover:bg-[#ef7272] border-none outline-none rounded-[40px] cursor-pointer text-[25px] text-black"
                onClick={handleLogin}
              >
                {submitButtonDisabled ? "Logging in..." : "Login"}
              </button>

              <div className="mt-[5px] text-center font-body text-black">
                <p className="text-[20px]">
                  {" "}
                  Don't have an account?{" "}
                  <span>
                    <NavLink
                      className="no-underline font-semibold hover:underline cursor-pointer"
                      to="/signup"
                    >
                      Register
                    </NavLink>
                  </span>
                </p>
              </div>
            </form>
          </div>
          <img
            className="h-[500px] w-[500px] hidden md:block p-0"
            src={gif}
            alt="Login GIF"
          />
        </div>
      </div>
    </>
  );
};

export default Login; 