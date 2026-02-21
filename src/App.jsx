import React from "react";
import Login from "./components/Auth/Login";
import Header from "./components/otherComponents/Header";
import EmployeeDashBoard from "./components/DashBoard/EmployeeDashBoard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
const App = () => {
  return (
    <div className="bg-[#1c1c1c] h-screen">
      {/* <Login /> */}
      {/* <EmployeeDashBoard /> */}
      <AdminDashBoard />
    </div>
  );
};

export default App;
