import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const ContextProvider = ({ children }) => {
  const [user,setUser]=useState()
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

   useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = { createUser , user};
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default ContextProvider;
