import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center  p-2 rounded-sm">
      <h1 className="font-medium text-2xl text-white">
        hii <br />{" "}
        <span className="text-3xl font-semibold text-white">Jitender</span>
      </h1>
      <button className=" p-2 bg-red-500 rounded-sm text-lg font-medium">
        Logout
      </button>
    </div>
  );
};

export default Header;
