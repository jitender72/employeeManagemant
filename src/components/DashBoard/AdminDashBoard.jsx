import React from "react";
import Header from "../otherComponents/Header";
import CreateTask from "../otherComponents/CreateTask";
import AllTask from "../otherComponents/AllTask";
const AdminDashBoard = () => {
  return (
    <div className="p-10">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashBoard;
