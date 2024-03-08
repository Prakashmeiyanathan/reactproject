import React from 'react';
import './Login.css'; 

const Register = () => {
  
  return (
    <div className="login-container">
      <h2>Register</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="name" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="number">Number</label>
        <input type="numbar" id="number" name="number" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
