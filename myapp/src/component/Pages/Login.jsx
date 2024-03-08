
import React from 'react';
import './Login.css'; 

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <div className='button'>
        <button type="submit">Login</button>
        </div>
        <small>Don't have an account?  <a href='#'>sign up now</a></small>
      </form>
    </div>
  );
};

export default Login;
