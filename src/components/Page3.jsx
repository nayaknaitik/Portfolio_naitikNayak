// eslint-disable-next-line no-unused-vars
import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const refCard = useRef(null);
  useGSAP(() => {
    gsap.from(refCard.current, {
      scrollTrigger: {
        trigger: refCard.current,
        start: "top 70%",
        end: "bottom 50%",
        markers: false,
        scrub: true,
        toggleActions: "restart none none none",
      },
      duration: 2,
      y: -100,
      opacity: 0,
      stagger: 0.4,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#ebebe9] rounded-t-4xl rounded-b-4xl px-6 py-20">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center tracking-wide mt-10 opacity-80 leading-snug">
        Web Developer | UI/UX Designer | <br className="hidden sm:block" />{" "}
        Building Modern & Responsive experiences 🚀
      </h1>

      {/* Services Grid */}
      <div
        ref={refCard}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 w-full max-w-5xl"
      >
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-200 hover:scale-105">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8448/8448908.png"
            alt="UI & UX"
            className="h-16 mx-auto"
          />
          <h2 className="text-xl font-semibold mt-4">UI & UX</h2>
          <p className="opacity-80 mt-2">
            Design and create beautiful UIs that are enjoyable to use.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-200 hover:scale-105">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2857/2857433.png"
            alt="Design & Creative"
            className="h-16 mx-auto"
          />
          <h2 className="text-xl font-semibold mt-4">Design & Creative</h2>
          <p className="opacity-80 mt-2">
            Crafting sleek, user-friendly, and visually stunning web designs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-200 hover:scale-105">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2704/2704022.png"
            alt="Website Development"
            className="h-16 mx-auto"
          />
          <h2 className="text-xl font-semibold mt-4">Website Development</h2>
          <p className="opacity-80 mt-2">
            I create seamless digital experiences that are both visually
            stunning and highly functional.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-200 hover:scale-105">
          <img
            src="https://cdn-icons-png.flaticon.com/128/4035/4035077.png"
            alt="Content Creation"
            className="h-16 mx-auto"
          />
          <h2 className="text-xl font-semibold mt-4">Content Creation</h2>
          <p className="opacity-80 mt-2">
            Editing and creating content that is engaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page3;
