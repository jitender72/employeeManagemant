import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  console.log("userdata is", userData);

  useEffect(() => {
    setLocalStorage();
    const { employee, admin } = getLocalStorage();
    // console.log("all data", employee, admin);
    setUserData({ employee, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
