import React, { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";
import { toastError, toastSuccess } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

//!context alani actik
export const AuthContextt = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();

  //!register icin (sitede de fetch.theh.then yapisi var) biz burda async await i tercih ettik

  const createUser = async (email, password,displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toastSuccess("Registered Successfully");
      navigate("/");
    } catch (error) {
      toastError(error.message)
    }
  };

//! login 

const signIn= async(email,password) => {
try {
   await signInWithEmailAndPassword(auth, email, password)
  toastSuccess("Logged in Successfully")
  navigate("/")

} catch (error) {
  toastError(error.message)
  
}

 
}



  return <AuthContextt.Provider value={{createUser, signIn}}>{children}</AuthContextt.Provider>;
};

export default AuthContext;
