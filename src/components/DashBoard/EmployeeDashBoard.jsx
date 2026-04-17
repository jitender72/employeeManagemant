import React from "react";
import Header from "../otherComponents/Header";
import TaskListNumbers from "../otherComponents/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
const EmployeeDashBoard = ({ changeUser }) => {
  return (
    <div className="p-10 bg-black">
      <h1 className="text-center text-white mb-6 text-5xl font-serif">
        Employee Dashboard
      </h1>
      <Header changeUser={changeUser} />
      <TaskListNumbers />
      <TaskList />
    </div>
  );
};

export default EmployeeDashBoard;
