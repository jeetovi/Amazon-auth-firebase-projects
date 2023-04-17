import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import { useContext } from 'react';
import { AuthContext } from '../../../../ContexAPI/AuthProveider';

const SignUp = () => {
    const [error , setError ] = useState('');
      const {createUser}  = useContext(AuthContext);
    

    const handelSignUp = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confromPassword = event.target.confromPassword.value
        const name = event.target.name.value
        console.log(email,password,confromPassword,name);


        setError('');
        if(  password !== confromPassword){
  setError('Password did not match')
  return;
        }
        else if(password.length < 6){
            setError('password must be 6 carecter Uppar')
            return;
        }

        createUser(email,password)

        .then(result =>{
            const logUser = result.user;
            console.log(logUser)
        })
        .catch(error =>{
     console.log(error)
     setError(error.massage)
        })
    }
  
  
    return (
        <div>
        <form onSubmit={handelSignUp} className="form-style">
          <h2>Sign Up</h2>

          <label htmlFor=" ">Your Name</label>
          <input type="text" name="name" placeholder="your name" />

          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Useremail" />

         

          <label htmlFor="password">password</label>
          <input type="password" name="password" placeholder="Password" />

          <p className='text-error'> {error}</p>
          <label htmlFor="password">confrom Password</label>
          <input type="password" name="confromPassword" placeholder="Password" />

          <input type="submit" value="Sign Up" />
          <h2> <small>Alredy have an account? <Link to='/login'>Login</Link></small></h2>

        </form>
        
       
      </div>
    );
};

export default SignUp;