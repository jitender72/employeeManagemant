import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
const CreateTask = () => {
  const { setUserData } = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [active, setActive] = useState(true);
  const [newTask, setNewTask] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [failed, setFailed] = useState(false);

  // handle task creation logic here
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      taskTitle,
      assignedTo,
      taskDate: date,
      category,
      taskDescription: description,
      active: true,
      newTask: true,
      completed: false,
      failed: false,
    };
    console.log("New Task Created:", newTask);

    // get data from local storage
    const employeesData = JSON.parse(localStorage.getItem("employees"));
    // find the employee to assign the task
    // console.log("employeedata is ", employeesData);

    if (!employeesData) {
      alert("No employee data found in local storage.");
      return;
    }

    let isEmployeeFound = false;
    const updateData = employeesData.map((employee) => {
      if (
        employee.name.toLowerCase().trim() === assignedTo.toLowerCase().trim()
      ) {
        isEmployeeFound = true;
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
        };
      }
      return employee;
    });

    // save the updated employee data back to local storage
    if (isEmployeeFound) {
      localStorage.setItem("employees", JSON.stringify(updateData));
      console.log("updated data saved");
      // 🔥 Update context also
      setUserData((prev) => ({
        ...prev,
        employees: updateData,
      }));
      // clear form fields after submission
      setAssignedTo("");
      setCategory("");
      setDate("");
      setDescription("");
      setTaskTitle("");
      alert("Task Assigned Successfully!");
    } else {
      alert("Employee not found. Please check the name and try again.");
    }
  };

  return (
    <div className="bg-blue-500 sm:p-8 rounded-lg md:max-w-full flex justify-center w-full">
      <form
        className="md:space-y-4 sm:border p-8 rounded-2xl w-full md:max-w-md"
        onSubmit={handleTaskSubmit}
      >
        <div className="flex flex-col w-full">
          <label className="text-white font-medium mb-1">Task Title</label>
          <input
            type="text"
            placeholder="Make a UI Design"
            className="bg-transparent border border-gray-300 rounded px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white font-medium mb-1">Assign To</label>
          <input
            type="text"
            placeholder="Employee Name"
            className="bg-transparent border border-gray-300 rounded px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white font-medium mb-1">Date</label>
          <input
            type="date"
            className="bg-transparent border border-gray-300 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50 w-full scheme-dark"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white font-medium mb-1">Category</label>
          <input
            type="text"
            placeholder="design"
            className="bg-transparent border border-gray-300 rounded px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white font-medium mb-1">Description</label>
          <textarea
            rows="4"
            className="bg-transparent border border-gray-300 rounded px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 w-full resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="flex justify-end mt-6 mr-1">
          <button className="bg-black text-white px-8 py-2 rounded font-semibold hover:bg-gray-800 transition-all">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
