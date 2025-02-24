// eslint-disable-next-line no-unused-vars
import React from "react";

const Page3 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-250 w-full bg-[#ebebe9] static rounded-t-4xl rounded-b-4xl">
      <h1 className="text-5xl leading-15 font-bold text-center tracking-wide mt-40 opacity-80 ">
      Web Developer | UI/UX Designer | Building modern & <br /> responsive experiences 🚀
      </h1>
      <div className="flex gap-20 w-280 mt-20">
        <div className="w-140 h-65 hover:bg-gray-300 p-5 transition-ease-in-out duration-200 hover:scale-110">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8448/8448908.png"
            alt=""
            className="h-14"
          />
          <h1>UI & UX</h1>
          <p className="opacity-80 mt-5"> Design and Create beautifull UIs that are enjoyable to use </p>
        </div>
        <div className="w-140 h-65 hover:bg-gray-300 p-5 transition-ease-in-out duration-200 hover:scale-110">
        <img
            src="https://cdn-icons-png.flaticon.com/128/2857/2857433.png"
            alt=""
            className="h-14"
          />
          <h1>Design & Creative</h1>
          <p className="opacity-80 mt-5"> Crafting sleek, user-friendly, and visually stunning web designs.</p>
        </div>
        <div className="w-140 h-65 hover:bg-gray-300 p-5 transition-ease-in-out duration-200 hover:scale-110">
        <img
            src="https://cdn-icons-png.flaticon.com/128/2704/2704022.png"
            alt=""
            className="h-14"
          />
          <h1>Website DevlopMent</h1>
          <p className="opacity-80 mt-5"> I create seamless digital experiences that are both visually stunning and highly functional. </p>
        </div>
        <div className="w-140 h-65 hover:bg-gray-300 p-5 transition-ease-in-out duration-200 hover:scale-110">
        <img
            src="https://cdn-icons-png.flaticon.com/128/4035/4035077.png"
            alt=""
            className="h-14"
          />
          <h1>
            Content Creation
          </h1>
          <p className="opacity-80 mt-5"> Editing and Creating Content that is engaging. </p>
        </div>
      </div>
    </div>
  );
};

export default Page3;
