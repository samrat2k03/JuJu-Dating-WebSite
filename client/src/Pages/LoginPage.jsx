import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  return (
    <div className="lg:bg-gray-200 min-sm:flex-col w-full min-sm:w-1 flex xl:flex-row flex-col justify-center min-h-screen gap-0 max-container min-sm:gap-[10px]">
      {/* left side */}
      <div className="flex flex-1 justify-center items-center flex-col p-10 ">
        <h1 className="min:sm:text-sm text-[80px] font-montserrat font-bold text-center">
          JuJu
        </h1>
        <p className=" min-sm:text-sm text-[40px] font-palanquin text-coral-red  text-center">
          A Dating Website
        </p>
      </div>
      {/* right side */}
      <div className="flex flex-1 flex-col justify-center items-center ">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-coral-red text-[25px] font-bold text-center p-2">
            Login
          </h2>
          <form>
            <input
              type="email"
              placeholder="Email address"
              className="mb-3 shadow apperance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="password"
              className="mb-3 shadow apperance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className=" my-2 bg-coral-red hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600">
            Don't have an account just{" "}
            <Link to="/signup" className="text-coral-red">
              create it
            </Link>
          </p>
        </div>
      </div>
      <div className='w-10'></div>
    </div>
  );
}

export default LoginPage;
