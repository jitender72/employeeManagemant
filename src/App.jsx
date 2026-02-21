import React from "react";
import Login from "./components/Auth/Login";
import Header from "./components/otherComponents/Header";
import EmployeeDashBoard from "./components/DashBoard/EmployeeDashBoard";
const App = () => {
  return (
    <div className="bg-[#313131] h-screen">
      {/* <Login /> */}
      <EmployeeDashBoard />
    </div>
  );
};

export default App;
