import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../ContexAPI/AuthProveider';
import { signOut } from 'firebase/auth';

const Header = () => {
    const {user,logOut } = useContext(AuthContext)
    console.log(user)
    const handleLogOut = () =>{
          signOut()
          .then(result =>{})
          .catch(error => console.error(error))

    }
   
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link  to="/login">Login</Link>
                <Link to="/signUP">SignUP</Link>
                {
                   user && <span> welcome {user.email} <button onClick={handleLogOut}>Sign Out</button></span> 
                }
              
            </div>
        </nav>
    );
};

export default Header;