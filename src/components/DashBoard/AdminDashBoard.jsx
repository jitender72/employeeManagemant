import React from "react";
import Header from "../otherComponents/Header";
import CreateTask from "../otherComponents/CreateTask";
import AllTask from "../otherComponents/AllTask";
const AdminDashBoard = ({ changeUser }) => {
  return (
    <div className="p-10 bg-black">
      <Header changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashBoard;
