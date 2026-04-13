import React from "react";

const CreateTask = () => {
  return (
    <div class="bg-blue-500 sm:p-8 rounded-lg md:max-w-full flex justify-center w-full">
      <form className="md:space-y-4 sm:border p-8 rounded-2xl w-full md:max-w-md">
        <div className="flex flex-col w-full ">
          <label className="text-white font-medium">Task Title</label>
          <input
            type="text"
            placeholder="Make a UI Design"
            class="bg-transparent border border-gray-300 rounded px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
          />
        </div>

        <div className="flex flex-col ">
          <label className="text-white font-medium">Assign To</label>
          <input
            type="text"
            placeholder="Employee Name"
            className="bg-transparent border border-gray-300 rounded px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white font-medium">Date</label>
          <input
            type="date"
            className="bg-transparent border border-gray-300 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50 w-full scheme-dark"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white font-medium">Category</label>
          <input
            type="text"
            placeholder="design"
            className="bg-transparent border border-gray-300 rounded px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white font-medium mt-2">Description</label>
          <textarea
            rows="4"
            className="bg-transparent border border-gray-300 rounded px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 w-full resize-none"
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
