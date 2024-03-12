import React, { useState } from 'react';
import './signup.css';
import { useHistory } from 'react-router-dom';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });
  const history = useHistory();
  const signUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Signup Successful');
        alert('Signup Successful');
        // You can reset the form if needed
        setFormData({
          name: '',
          email: '',
          mobile: '',
          password: '',
        });
        // Redirect to login or another page
        history.push("/login");
        // this.props.history.push('/login');
      } else {
        console.error('Signup Error:', response.statusText);
        alert('Signup Error');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Signup Error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="wrapper">
      <form onSubmit={signUp}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Email address"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Phone"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
