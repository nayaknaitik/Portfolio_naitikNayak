// eslint-disable-next-line no-unused-vars
import React from "react";
// import Logo from "../assets/aro.png";

const Page1 = () => {
  return (
    <div className="bg-[#ebebe9] h-240 w-full rounded-b-4xl static">
      <div className="absolute mt-10 flex ml-20">
        <ul className="flex gap-5 items-center">
          <li className="font-light text-sm tracking-wider">
            naitiknayak009@gmail.com
          </li>
          <li>
            <button className="font-semibold tracking-wide text-sm bg-[#ffffff] px-5 py-2.5 rounded-2xl cursor-pointer hover:bg-black hover:text-white transition-ease-in-out duration-200 hover:scale-110">
              Copy
            </button>
          </li>
          <li>
            <button className="font-semibold bg-[#ffffff] px-5 py-2.5 rounded-2xl cursor-pointer text-sm tracking-wider  hover:bg-black hover:text-white transition-ease-in-out duration-200 hover:scale-110">
              CV
            </button>
          </li>
        </ul>
        <ul className="flex gap-5 items-center float-end ml-270">
          <li className="cursor-pointer tracking-wide hover:scale-110 transition-ease-in-out duration-200">
            LeetCode
          </li>
          <li className="cursor-pointer tracking-wide hover:scale-110 transition-ease-in-out duration-200">
            GitHub
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQGw5kshcxpCrg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727155362201?e=1746057600&v=beta&t=Sf4vHy-ZyPxPWTBMRLGYezxvAw-1SWwckBmezvZMSTU"
          alt=""
          className="rounded-full w-50 h-50 p-2 bg-amber-50 mb-7"
        />
        <h1 className="text-4xl tracking-wide font-light mb-10">
          Naitik Nayak 👋
        </h1>
        <h1 className="text-5xl font-bold text-center tracking-wide">
          Building Websites <br /> and mordern UIs .🚀.
        </h1>
        <button className="bg-[#242424] text-white px-9 py-4 mt-6 font-semibold tracking-wide rounded-4xl cursor-pointer hover:bg-white hover:text-black transition-ease-in-out duration-200 hover:scale-110">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Page1;
