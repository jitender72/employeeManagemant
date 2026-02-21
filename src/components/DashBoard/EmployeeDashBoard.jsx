import React from "react";
import Header from "../otherComponents/Header";
import TaskListNumbers from "../otherComponents/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
const EmployeeDashBoard = () => {
  return (
    <div className="p-10">
      <h1 className="text-center text-white mb-6 text-5xl font-serif">
        Employee Dashboard
      </h1>
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  );
};

export default EmployeeDashBoard;
