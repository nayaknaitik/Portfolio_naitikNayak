import React from "react";

const Page2 = () => {
  return (
    <>
      {/* Title */}
      {/* <h1 className="text-center font-extrabold text-3xl sm:text-4xl mt-10">Skills</h1>
      <div className="w-40 sm:w-60 bg-gray-300 h-2 mx-auto rounded-full mt-5"></div> */}

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-10 px-6 h-40 items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Lnm0K-Cbz4eTj44xNdkW0c1dk4Jl2Xe1qw&s"
          alt="HTML"
          className="h-16 sm:h-20 mx-auto"
        />
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/javascript-logo-png-transparent.png"
          alt="JavaScript"
          className="h-16 sm:h-20 mx-auto"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROhOgcEIuQbeQTjCg1Ou_PQWNW4x0J-O3DBmpZzD0j_7wqcfL0TkSpiEAGDzkhPpOal9w&usqp=CAU"
          alt="CSS"
          className="h-16 sm:h-30"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
          alt="MongoDB"
          className="h-16 sm:h-20 mx-auto"
        />
        <img
          src="https://delta-dev-software.fr/wp-content/uploads/2024/02/nodejs.jpg"
          alt="Node.js"
          className="h-16 sm:h-20 mx-auto"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png"
          alt="Postman"
          className="h-16 sm:h-20 mx-auto"
        />
      </div>
    </>
  );
};

export default Page2;

