import React from "react";
import AuthContext from "./AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";

const ContextProvider = ({ children }) => {
  const createUser = (email, password) => {
    return signInWithEmailAndPassword(email, password);
  };

  const user = { createUser };
  return <AuthContext value={user}>{children}</AuthContext>;
};

export default ContextProvider;
