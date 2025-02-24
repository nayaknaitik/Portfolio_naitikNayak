// eslint-disable-next-line no-unused-vars
import React from 'react'

const Page4 = () => {
  return (
    <div className='flex flex-col items-center justify-center h-220 static'>
     <div className="flex flex-col items-center justify-center h-full mt-50">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2449/2449806.png"
          alt=""
          className="rounded-full h-40 p-2 mb-7 bg-gray-300"
        />
        
        <h1 className="text-5xl font-bold text-center tracking-wide mt-20">
          Tell me about your  Next project
        </h1>
        <div className="flex gap-10 mt-10">
        <button className="bg-[#242424] text-white px-9 py-4 mt-6 font-semibold tracking-wide rounded-4xl cursor-pointer hover:bg-gray-300 hover:text-black transition-ease-in-out duration-200 hover:scale-110">
          Email
        </button>
        <button className="bg-gray-300 text-black px-9 py-4 mt-6 font-semibold tracking-wide rounded-4xl cursor-pointer hover:bg-black hover:text-white transition-ease-in-out duration-200 hover:scale-110">
          Watssapp
        </button>
        </div>

      </div>
    </div>
  )
}

export default Page4