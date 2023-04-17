import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
        <form className="form-style">
          <h2>Sign Up</h2>

          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Useremail" />

          <label htmlFor="password">password</label>
          <input type="password" name="password" placeholder="Password" />

          <label htmlFor="password">confrom password</label>
          <input type="password" name="confrom-password" placeholder="Password" />

          <input type="submit" value="Sign Up" />
          <h2> <small>Alredy have an account? <Link to='/login'>Login</Link></small></h2>
        </form>
        
       
      </div>
    );
};

export default SignUp;