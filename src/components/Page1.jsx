const Page1 = () => {
  const email = "naitiknayak009@gmail.com";
  const subject = encodeURIComponent("Let's Connect!");
  const body = encodeURIComponent("Hey Naitik,\n\nI’d love to discuss something with you.");

  const gotTo = () => {
    window.location.href = "https://drive.google.com/file/d/17dc0iGzcD4uelJv_eVT80IL5W1f2_LwR/view?usp=drivesdk";
  };
  const gotTol = () => {
    window.location.href = "https://leetcode.com/u/lunarbeam_10/";
  };
  const gotToG = () => {
    window.location.href = "https://github.com/nayaknaitik ";
  };

  return (
    <div className="bg-[#ebebe9] min-h-screen w-full rounded-b-4xl static flex flex-col items-center px-5 sm:px-10 mx-auto">
      {/* Top Navigation (Hidden on Small Screens) */}
      <div className="hidden sm:flex justify-between w-full max-w-screen-lg mt-10">
        <ul className="flex gap-5 items-center">
          <li className="font-light text-sm tracking-wider">naitiknayak009@gmail.com</li>
          <li>
            <button className="font-semibold tracking-wide text-sm bg-white px-5 py-2.5 rounded-2xl cursor-pointer hover:bg-black hover:text-white transition duration-200 hover:scale-110">
              Copy
            </button>
          </li>
          <li>
            <button
              onClick={gotTo}
              className="font-semibold bg-white px-5 py-2.5 rounded-2xl cursor-pointer text-sm tracking-wider hover:bg-black hover:text-white transition duration-200 hover:scale-110"
            >
              CV
            </button>
          </li>
        </ul>
        <ul className="flex gap-5 items-center">
          <li className="cursor-pointer tracking-wide hover:scale-110 transition duration-200" onClick={gotTol}>
            LeetCode
          </li>
          <li className="cursor-pointer tracking-wide hover:scale-110 transition duration-200" onClick={gotToG}>
            GitHub
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center w-full text-center mt-70">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQGw5kshcxpCrg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727155362201?e=1746057600&v=beta&t=Sf4vHy-ZyPxPWTBMRLGYezxvAw-1SWwckBmezvZMSTU"
          alt=""
          className="rounded-full w-40 h-40 p-2 bg-amber-50 mb-5 sm:w-50 sm:h-50"
        />

        <h1 className="text-3xl sm:text-4xl tracking-wide font-light mb-5">Naitik Nayak 👋</h1>

        <h1 className="font-bold text-center tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Building Websites <br className="hidden sm:block" /> and modern UIs 🚀
        </h1>

        <button
          onClick={() => (window.location.href = `mailto:${email}?subject=${subject}&body=${body}`)}
          className="bg-[#242424] text-white px-7 py-3 mt-6 font-semibold tracking-wide rounded-full cursor-pointer hover:bg-white hover:text-black transition duration-200 hover:scale-110"
        >
          Contact
        </button>

        {/* CV Button (Only Visible on Small Screens) */}
        <button
          onClick={gotTo}
          className="block sm:hidden bg-white px-6 py-3 mt-4 font-semibold tracking-wide rounded-2xl cursor-pointer hover:bg-black hover:text-white transition duration-200 hover:scale-110"
        >
          CV
        </button>
      </div>
    </div>
  );
};

export default Page1;
