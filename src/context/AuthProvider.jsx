import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  // console.log("userdata is", userData);

  useEffect(() => {
    // store data in local storage
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    // console.log("Employees Data:", employees);
    // console.log("Admin Data:", admin);
    setUserData({ employees, admin });

    // const { employee, admin } = getLocalStorage();
    // console.log("all data", employee, admin);
    // setUserData({ employee, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
