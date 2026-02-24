import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import Header from "./components/otherComponents/Header";
import EmployeeDashBoard from "./components/DashBoard/EmployeeDashBoard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";

const App = () => {
  const [user, setUser] = useState(null);
  // handleLogin to check "email,password" match or not ?
  const handleLogin = (email, password) => {
    // console.log(email, password);
    if (email == "admin@gmail.com" && password == 123) {
      // console.log("its admin");
      setUser("admin");
    } else if (email == "employee@gmail.com" && password == "123") {
      // console.log("this is user");
      setUser("employee");
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <div className="bg-[#1c1c1c] h-screen">
      {/* agr user nahi hai to login dikha do otherwise kuch nahi */}
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user == "admin" ? <AdminDashBoard /> : <EmployeeDashBoard />}
      {/* <EmployeeDashBoard /> */}
      {/* <AdminDashBoard /> */}
    </div>
  );
};

export default App;
