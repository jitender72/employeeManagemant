import React from "react";
import { useEffect } from "react";
import { setLocalStorage, getLocalStorage } from "../utils/LocalStorage";
const AuthContext = ({ children }) => {
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  });
  return <div>{children}</div>;
};

export default AuthContext;
