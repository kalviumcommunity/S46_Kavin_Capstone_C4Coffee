import { useState } from "react";
import logo from "../../assets/coffeeCupIcon.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-10 grid w-full grid-cols-2 items-center justify-center bg-backGround2 shadow-lg md:grid-cols-3">
        <div className="mx-10 flex flex-row items-center md:col-span-1">
          <img src={logo} alt="logo" className="m-2 h-10 md:h-16" />
          <span className="hidden text-3xl font-extrabold text-text2 xl:block">
            C4Coffee
          </span>
        </div>
        <div className="hidden grid-flow-col gap-16 justify-self-center text-xl font-bold text-text2 md:grid">
          <div>
            <Link to={"/"}>Home</Link>
          </div>
          <div>
            <Link to={"/coffeetypes"}>Coffee types</Link>
          </div>
          <div>
            <Link to={"/shopreview"}>Shop review</Link>
          </div>
        </div>
        <div className="mx-auto hidden grid-flow-col grid-cols-2 justify-end gap-10 justify-self-end text-lg font-bold md:grid">
          <div className="rounded-md border-4 border-text2 px-4 py-2 text-text2 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-text2 hover:text-backGround2">
            <Link to={"/login"}>Login</Link>
          </div>
          <div className="flex items-center justify-center rounded-md bg-text2 text-backGround2 transition duration-300 ease-in hover:cursor-pointer hover:bg-backGround2 hover:text-text2">
            <Link to={"/signup"}>Sign up</Link>
          </div>
        </div>
        <div
          className="block justify-self-center md:hidden"
          onClick={() => setShowDropDown((prevState) => !prevState)}
        >
          {showDropDown ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        className={
          showDropDown
            ? "grid-flow-rows fixed right-0 z-10 grid h-full w-3/4 items-center justify-center gap-4 bg-backGround2 bg-opacity-90 duration-700 animate-in slide-in-from-right"
            : "duration-700 animate-out slide-out-to-right"
        }
      >
        <div
          className={
            showDropDown
              ? "grid-flow-rows z-10 grid place-items-center text-lg font-bold text-text2"
              : "hidden"
          }
        >
          <div className="m-2">Home</div>
          <hr className="w-full rounded-md border-2 border-text1" />
          <div className="m-2">Coffee recipe</div>
          <hr className="w-full rounded-md border-2 border-text1" />
          <div className="m-2">Coffee shops</div>
          <hr className="w-full rounded-md border-2 border-text1" />
          <div className="m-2">Coffee review</div>
        </div>
        <div className={showDropDown ? "m-2 flex gap-10" : "hidden"}>
          <div className="flex w-20 items-center justify-center rounded-md border-4 border-text2 py-1 text-sm text-text2 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-text2 hover:text-backGround2">
            <Link to={"/login"}>Login</Link>
          </div>
          <div className="flex w-20 items-center justify-center rounded-md bg-text2 text-sm text-backGround2 transition duration-300 ease-in hover:cursor-pointer hover:bg-backGround2 hover:text-text2">
            <Link to={"/signup"}>Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
