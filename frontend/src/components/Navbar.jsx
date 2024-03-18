import React, { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <>
      <div className="bg-backGround2 w-full grid grid-flow-col items-center grid-cols-3 md:grid-cols-4 shadow-lg sticky top-0 z-10">
        <div className="mx-10 flex flex-row items-center col-span-2 md:col-span-1">
          <img src={logo} alt="logo" className="h-16 md:h-28" />
          <span className="text-3xl font-extrabold text-text2 xl:block hidden">
            C4Coffee
          </span>
        </div>
        <div className="text-text2 font-bold text-xl md:grid grid-flow-col col-span-2 hidden">
          <div>Home</div>
          <div>Coffee Types</div>
          <div>Coffee shops</div>
          <div>Coffee recipe</div>
        </div>
        <div className="md:grid grid-flow-col justify-end grid-cols-2 gap-10 mx-auto font-bold text-lg hidden">
          <div className="text-text2 border-4 py-2 px-6 border-text2 rounded-md transition duration-300 ease-in-out hover:cursor-pointer hover:bg-text2 hover:text-backGround2">
            Login
          </div>
          <div className="text-backGround2 bg-text2 flex justify-center items-center rounded-md hover:cursor-pointer transition duration-300 ease-in hover:bg-backGround2 hover:text-text2">
            Sign up
          </div>
        </div>
        <div
          className="justify-self-center block md:hidden"
          onClick={() => setShowDropDown((prevState) => !prevState)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div
        className={
          showDropDown
            ? 'fixed right-0 grid grid-flow-rows bg-backGround2 justify-center items-center gap-4 animate-in slide-in-from-right w-3/4 h-full duration-700 bg-opacity-90'
            : 'animate-out slide-out-to-right duration-700'
        }
      >
        <div
          className={
            showDropDown
              ? 'text-text2 font-bold text-lg grid grid-flow-rows place-items-center'
              : 'hidden'
          }
        >
          <div className="m-2">Home</div>
          <hr className="w-full border-text1 border-2 rounded-md" />
          <div className="m-2">Coffee Types</div>
          <hr className="w-full border-text1 border-2 rounded-md" />
          <div className="m-2">Coffee shops</div>
          <hr className="w-full border-text1 border-2 rounded-md" />
          <div className="m-2">Coffee recipe</div>
        </div>
        <div className={showDropDown ? 'flex gap-10 m-2' : 'hidden'}>
          <div className="text-text2 text-sm border-4 py-1 border-text2 rounded-md transition duration-300 ease-in-out hover:cursor-pointer hover:bg-text2 hover:text-backGround2 w-20 justify-center items-center flex">
            Login
          </div>
          <div className="text-backGround2 text-sm bg-text2 flex justify-center items-center rounded-md hover:cursor-pointer transition duration-300 ease-in hover:bg-backGround2 hover:text-text2 w-20">
            Sign up
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
