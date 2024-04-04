import React from 'react';
import "./login.css"
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function LoginForm() {
  return (
    <div className="wrapper">
      <form>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Enter email address" required />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter Password" required />
          <i className='bx bxs-lock-alt' ></i>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember Me</label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="register-link">
        <p> Don't have an account? <span>
            <NavLink to ="/signup">Register</NavLink></span></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;