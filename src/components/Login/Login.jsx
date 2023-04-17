import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form className="form-style">
        <h2>Login Form</h2>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="Username" />
        <label htmlFor="email">password</label>
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="Log In" />
        
      </form>
      <h2> <small>Alredy have an account? <Link to='/signUP'>Login</Link></small></h2>
    </div>
  );
};

export default Login;
