// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#ebebe9] h-20 flex items-center  rounded-t-full p-10'>
     <h1 className='ml-3'>© 2024. All rights reserved.</h1>
     <ul className="flex gap-5 items-center float-end ml-320">
          <li className="cursor-pointer tracking-wide hover:scale-110 transition-ease-in-out duration-200">
            LeetCode
          </li>
          <li className="cursor-pointer tracking-wide hover:scale-110 transition-ease-in-out duration-200">
            GitHub
          </li>
        </ul>
    </div>
  )
}

export default Footer