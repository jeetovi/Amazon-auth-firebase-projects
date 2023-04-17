import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../ContexAPI/AuthProveider";

const Login = () => {
    const [error, setError] = useState('null')
    const {signIn} = useContext(AuthContext);
    const handleLogin = event =>{
        event.preventDefault();
        
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    console.log(email,password)

    signIn(email,password)
    .then(result =>{
        const logUser = result.user;
        console.log(logUser)
        form.reset();
    })
    .catch(error =>{
 console.log(error)
 setError(error.massage)
    })
    }
    
  return (
    <div>
      <form onSubmit={handleLogin} className="form-style">
        <h2>Login Form</h2>
        <label htmlFor=" ">Your Name</label>
          <input type="text" name="name" placeholder="your name" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="Username" />
        <label htmlFor="email">password</label>
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="Log In" />
        <h2> <small>Create an account <Link to='/signUP'>SignUp</Link></small></h2>

      </form>
    </div>
  );
};

export default Login;
