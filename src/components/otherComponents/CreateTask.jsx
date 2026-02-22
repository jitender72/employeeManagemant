import React from "react";

const CreateTask = () => {
  return (
    <form className="p-4 flex justify-center  bg-blue-500 rounded flex-col">
      <div className=" flex justify-center gap-5 p-2 ">
        <h3 className="font-semibold">Task Title</h3>
        <input
          type="text"
          placeholder="Make a UI Design"
          className="  p-1 rounded-sm border outline-0"
        />
      </div>

      <div className="flex justify-center items-center gap-5 p-2 ">
        <h3 className="font-semibold ">Description</h3>
        <textarea name="" id="" className="border rounded-sm"></textarea>
      </div>

      <div className="flex justify-center items-center gap-5 p-2 ">
        <h3 className="font-semibold">Date</h3>
        <input type="date" name="" id="" />
      </div>
      <div className="flex justify-center items-center gap-5 p-2 ">
        <h3 className="font-semibold ">Assign to</h3>
        <input
          type="text"
          placeholder="Employee Name"
          className="  p-1 rounded-sm border outline-0"
        />
      </div>
      <div className="flex justify-center items-center gap-5 p-2 ">
        <h3 className="font-semibold">Category</h3>
        <input
          type="text"
          placeholder="design"
          className="border outline-0 p-2 rounded-sm"
        />
      </div>

      <button className="p-2 font-semibold  rounded-sm bg-[#1c1c1c] text-white w-sm m-auto">
        Create Task
      </button>
    </form>
  );
};

export default CreateTask;
