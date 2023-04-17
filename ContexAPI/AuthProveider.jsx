import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut,   } from "firebase/auth";
import { useState } from "react";
 
import app from "../src/Firebase/firebase.config";
 

export const AuthContext = createContext(null);
const auth = getAuth(app)
 
const AuthProveider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) =>{
        return  createUserWithEmailAndPassword(auth, email,password);
    }
    const signIn =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
const logOut = () =>{
    return signOut(auth)
}
    const authInfo = {
        user,
        createUser,
        signIn,
         logOut

    }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProveider;
