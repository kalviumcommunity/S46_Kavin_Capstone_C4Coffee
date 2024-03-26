import React, { useState } from "react";
import logo from "../assets/coffeeCupIcon.png";
import googleLogo from "../assets/googleLogo.jpg";
import { Link } from "react-router-dom";

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRePasswordVisible, setIsRePasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  function toggleRePasswordVisibility() {
    setIsRePasswordVisible((prevState) => !prevState);
  }

  return (
    <div className="background-pic flex h-screen flex-col">
      <div className="col-span-2 flex w-full flex-row items-center justify-center bg-backGround2 bg-opacity-60 backdrop-blur md:col-span-1">
        <img src={logo} alt="logo" className="m-2 h-10 md:h-16" />
        <span className="text-3xl font-extrabold text-text2">C4Coffee</span>
      </div>
      <div className=" h-full">
        <div className="absolute left-1/2 top-1/2 flex h-3/5 w-5/6 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-around rounded bg-backGround2 bg-opacity-60 shadow backdrop-blur md:h-2/3 md:w-1/3">
          <div className="text-xl font-extrabold text-text2 md:text-4xl">
            Sign up
          </div>
          <form className="flex w-2/3 flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-base font-semibold text-text2 md:text-lg"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Enter email"
                name="email"
                id="email"
                className="bg-text1 p-2 text-sm text-backGround1 placeholder:text-backGround1 placeholder:text-opacity-60 focus:outline-2 focus:outline-text2 md:text-base"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="text-base font-semibold text-text2 md:text-lg"
              >
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                name="username"
                id="username"
                className="bg-text1 p-2 text-sm text-backGround1 placeholder:text-backGround1 placeholder:text-opacity-60 focus:outline-2 focus:outline-text2 md:text-base"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-base font-semibold text-text2 md:text-lg"
              >
                Password
              </label>
              <div className="container relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Enter password"
                  name="password"
                  id="password"
                  className="w-full bg-text1 p-2 px-4 py-2 text-sm text-backGround1 placeholder:text-backGround1 placeholder:text-opacity-60 focus:outline-2 focus:outline-text2 md:text-base"
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5 text-backGround2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5 text-backGround2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="re-password"
                className="text-base font-semibold text-text2 md:text-lg"
              >
                Re-Enter password
              </label>
              <div className="container relative">
                <input
                  type={isRePasswordVisible ? "text" : "password"}
                  placeholder="Re-Enter password"
                  name="re-password"
                  id="re-password"
                  className="w-full bg-text1 p-2 px-4 py-2 text-base text-backGround1 placeholder:text-backGround1 placeholder:text-opacity-60 focus:outline-2 focus:outline-text2 md:text-base"
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                  onClick={toggleRePasswordVisibility}
                >
                  {isRePasswordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5 text-backGround2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5 text-backGround2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="my-4 flex flex-col items-center justify-center gap-2">
              <input
                type="submit"
                value="Submit"
                className="cursor-pointer rounded bg-text2 px-4 py-2 text-sm font-bold text-backGround2 shadow md:px-6 md:py-4 md:text-base"
              />
              <div className="-medium text-sm text-text1 md:text-base">
                Already a user ?{" "}
                <span className="cursor-pointer font-semibold text-text2">
                  <Link to={"/login"}>Login</Link>
                </span>
              </div>
            </div>
          </form>
          <div className="flex w-2/5 cursor-pointer items-center justify-around bg-white py-2">
            <img src={googleLogo} alt="google-logo" className="h-8 w-8" />
            <div className="font-semibold">Login with google</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
