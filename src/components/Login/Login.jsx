// import React from 'react';
import React, { useState } from 'react';
import "./login.css"
import { useHistory } from 'react-router-dom';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Login Successful');
        // Redirect to the home page after successful authentication
        alert("Login Successful");
        history.push("/Home");
      } else {
        console.error('Login Failed');
        alert('Invalid email or password. Please try again.');
        // Handle login failure, show error message, etc.
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      // Handle other errors, show error message, etc.
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email Id"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <i className='bx bxs-lock-alt' ></i>
        </div>
        
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember Me</label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;