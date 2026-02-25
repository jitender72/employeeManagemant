import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import Header from "./components/otherComponents/Header";
import EmployeeDashBoard from "./components/DashBoard/EmployeeDashBoard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  // handleLogin to check "email,password" match or not ?
  const handleLogin = (email, password) => {
    const isAdmin = authData.admin.find(
      (e) => email == e.email && password == e.password,
    );
    const isEmployees = authData.employees.find(
      (e) => email == e.email && password == e.password,
    );
    if (isAdmin) {
      setUser("admin");
    } else if (isEmployees) {
      setUser("employees");
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
