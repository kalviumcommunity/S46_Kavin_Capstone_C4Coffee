import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";

import GoogleAuthButton from "../components/AuthPage/GoogleAuthButton";
import ViewIcon from "../components/AuthPage/ViewIcon";
import { errorNotify, successNotify } from "../components/Toasts";

import logo from "../assets/coffeeCupIcon.png";

import "react-toastify/dist/ReactToastify.css";

const initState = {
  email: "",
  username: "",
  password: "",
  rePassword: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "username":
      return { ...state, username: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "re-password":
      return { ...state, rePassword: action.payload };
  }
}

function Signup() {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, username, password, rePassword } = state;

    if (password !== rePassword) {
      // Show error telling that passwords don't match
      errorNotify("Password are not matching");
      return;
    }

    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/user/signup`,
        {
          email,
          username,
          password,
        },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res.data);
        successNotify("User created successfully");
      })
      .catch((e) => {
        errorNotify(e.response.data);
      });
  };

  const [visibility, setVisibility] = useState({
    password: false,
    rePassword: false,
  });

  function togglePasswordVisibility() {
    setVisibility((prevState) => {
      return { ...prevState, password: !prevState.password };
    });
  }

  function toggleRePasswordVisibility() {
    setVisibility((prevState) => {
      return { ...prevState, rePassword: !prevState.rePassword };
    });
  }

  const googleLogin = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/user/google`)
      .then((res) => window.open(res.data.url, "_self"));
  };

  return (
    <div className="background-pic flex h-screen flex-col">
      <ToastContainer />
      <div className="col-span-2 flex w-full flex-row items-center justify-center bg-backGround2 bg-opacity-60 backdrop-blur md:col-span-1">
        <img src={logo} alt="logo" className="m-2 h-10 md:h-16" />
        <span className="text-3xl font-extrabold text-text2">C4Coffee</span>
      </div>
      <div className=" h-full">
        <div className="absolute left-1/2 top-1/2 mt-10 flex h-4/6 w-5/6 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-around rounded bg-backGround2 bg-opacity-60 shadow backdrop-blur-sm sm:w-1/3 md:h-4/5">
          <div className="text-xl font-extrabold text-text2 md:text-3xl">
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
                className={`border-b-2 border-backGround2 bg-transparent px-4 py-2 text-sm font-bold text-text2 outline-none duration-200 placeholder:text-text1 hover:border-text2 focus:border-text2 md:text-base`}
                onChange={handleChange}
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
                className={`border-b-2 border-backGround2 bg-transparent px-4 py-2 text-sm font-bold text-text2 outline-none duration-200 placeholder:text-text1 hover:border-text2 focus:border-text2 md:text-base`}
                onChange={handleChange}
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
                  type={visibility.password ? "text" : "password"}
                  placeholder="Enter password"
                  name="password"
                  id="password"
                  className={`w-full border-b-2 border-backGround2 bg-transparent px-4 py-2 text-sm font-bold text-text2 outline-none duration-200 placeholder:text-text1 hover:border-text2 focus:border-text2 md:text-base`}
                  onChange={handleChange}
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  <ViewIcon isVisible={visibility.password} />
                </span>
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
                  type={visibility.rePassword ? "text" : "password"}
                  placeholder="Re-Enter password"
                  name="re-password"
                  id="re-password"
                  className={`w-full border-b-2 border-backGround2 bg-transparent px-4 py-2 text-sm font-bold text-text2 outline-none duration-200 placeholder:text-text1 hover:border-text2 focus:border-text2 md:text-base`}
                  onChange={handleChange}
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                  onClick={toggleRePasswordVisibility}
                >
                  <ViewIcon isVisible={visibility.rePassword} />
                </span>
              </div>
            </div>
            <div className="my-4 flex flex-col items-center justify-center gap-2">
              <input
                type="submit"
                value="Submit"
                className="cursor-pointer rounded bg-text2 px-4 py-2 text-sm font-bold text-backGround2 shadow md:px-4 md:py-2 md:text-base"
              />
              <div className="text-sm font-semibold text-text1 md:text-base">
                Already a user ?{" "}
                <span className="cursor-pointer font-bold text-text2">
                  <Link to={"/login"}>Login</Link>
                </span>
              </div>
            </div>
          </form>
          <GoogleAuthButton onPress={googleLogin} />
        </div>
      </div>
    </div>
  );
}

export default Signup;
