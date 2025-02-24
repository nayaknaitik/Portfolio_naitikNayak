// eslint-disable-next-line no-unused-vars
import React from "react";

const Page4 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
      {/* Container */}
      <div className="flex flex-col items-center text-center">
        {/* Profile Icon */}
        <img
          src="https://cdn-icons-png.flaticon.com/128/2449/2449806.png"
          alt="Project Icon"
          className="rounded-full h-28 sm:h-36 md:h-40 p-2 mb-6 bg-gray-300"
        />

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide mt-5">
          Tell me about your Next project
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-8">
          <button className="bg-[#242424] text-white px-8 py-3 sm:px-9 sm:py-4 font-semibold tracking-wide rounded-3xl cursor-pointer hover:bg-gray-300 hover:text-black transition-transform duration-200 hover:scale-105">
            Email
          </button>
          <button className="bg-gray-300 text-black px-8 py-3 sm:px-9 sm:py-4 font-semibold tracking-wide rounded-3xl cursor-pointer hover:bg-black hover:text-white transition-transform duration-200 hover:scale-105">
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page4;
