import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-cover h-[90vh] max-w-screen-2xl mx-auto flex justify-end items-center">
      <div className="max-w-xl px-6 py-12 bg-none ">
        {/* Text Content */}

        <h1 className="text-2xl md:text-4xl uppercase font-bold text-purple-700 text-opacity-100">
          Practical Teaching & 
        </h1>
        <br>
        </br>

        <h1 className="text-2xl md:text-4xl uppercase font-bold text-red-500 text-opacity-100">
          Social Development
        </h1>
        <br>
        </br>

        <p className="text-black md:text-lg font-semibold mt-0">
          We aim at success by creating skills necessary for kids to enrich &
          empower in studies & sports.
        </p>
        <br>
        </br>

        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Learn More
        </button>
      </div>
    </div>   
    
  );
};

export default Banner;
