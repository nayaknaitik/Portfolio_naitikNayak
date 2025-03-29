// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#ebebe9] h-20 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-14 rounded-t-full">
      {/* Copyright Text */}
      <h1 className="text-center text-sm sm:text-base">
        © 2024. All rights reserved.
      </h1>

      {/* Social Links */}
      <ul className="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
        <li className="cursor-pointer tracking-wide hover:scale-110 transition-transform duration-200">
          LeetCode
        </li>
        <li className="cursor-pointer tracking-wide hover:scale-110 transition-transform duration-200">
          GitHub
        </li>
      </ul>
    </div>
  );
};

export default Footer;
