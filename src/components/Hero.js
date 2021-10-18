import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text 5xl text-5xl font-black mb-14">
        CABOLOUS
      </h1>
      <Link className="py-6 px-10 bg-yellow-500 rounded-full lg:text-3xl md:text-2xl sm:text 1xl text-1xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce font-bold">
        Download Now
        <svg
          className="w-6 h-6 ml-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Hero;
