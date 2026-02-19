import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
const Login = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="bg-amber-400 p-10 rounded-2xl w-sm ">
        <h1 className="text-center mb-8 text-2xl font-bold">Login</h1>
        {/* username */}
        <div className="border-2 border-black hover:border-white  rounded-2xl mb-2 p-2 flex justify-between items-center transition-all duration-300 ease-in-out ">
          <input type="text" placeholder="Username" className="outline-0" />
          <span>
            <FaCircleUser className="text-2xl" />
          </span>
        </div>
        {/* password */}
        <div className="border-2 border-black hover:border-white rounded-2xl mb-1 p-2 flex justify-between items-center transition-all duration-300 ease-in-out">
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="outline-0"
          />
          <span>
            <RiLockPasswordFill className="text-2xl" />
          </span>
        </div>
        {/* remember and forgot password */}

        <div className="flex justify-between items-center mb-1 p-2">
          <div>
            <input type="checkbox" name="" id="" />
            <span>Remember me</span>
          </div>
          <span>Forgot password?</span>
        </div>
        {/* login button */}
        <button className="bg-black hover:bg-white text-white hover:text-black  p-3 rounded-2xl w-full text-sm font-bold transition-all duration-300 ease-in-out">
          Login
        </button>
        <p className="text-center">Dont't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
