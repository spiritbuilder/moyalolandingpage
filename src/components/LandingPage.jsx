import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Home from "./Home";
import logo from "../assets/logo1.png";
import menu from "../assets/menuDark.svg";
import cancel from "../assets/closeIcon.svg";

function LandingPage() {
  let history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex  flex-col overflow-x-hidden">
      {menuOpen ? (
        <div className="w-full md:hidden h-screen bg-m-ash bg-opacity-90 fixed top-0 z-50 flex flex-col p-4">
          <img
            className="h-10 object-contain self-end bg-white bg-opacity-50 rounded"
            src={cancel}
            alt="cancel"
            onClick={() => {
              setMenuOpen(false);
            }}
          />
          <button
            onClick={() => history.push("/login")}
            className=" p-3 m-2 rounded text-center bg-white border-m-black border-2 text-m-black  text-sm"
          >
            Sign In
          </button>
          <button
            onClick={() => history.push("/register/:invite?")}
            className="p-3 m-2 text-center rounded border-m-orange border-2 bg-m-orange text-white  text-sm "
          >
            Get Started
          </button>
        </div>
      ) : null}
      <div className=" z-30 w-full  lg:py-6 lg:px-24 px-5 py-4 shadow-md flex flex-wrap fixed top-0 justify-between items-center bg-white ">
        <img className="h-10 object-contain lg:h-12" src={logo} alt="logo" />
        <div className="hidden md:flex md:justify-evenly md:align-middle">
          <button
            onClick={() => history.push("/login")}
            className="p-3 w-auto lg:px-5 lg:font-normal tracking-wide  rounded text-m-ash  lg:text-2xl"
            href="#"
            target="_blank"
          >
            Sign in
          </button>
          <button
            onClick={() => history.push("/register/:invite?")}
            className="p-3 flex items-center justify-center lg:px-14 lg:py-1 tracking-wide rounded-lg border-m-orange border-2 bg-m-orange text-white   "
            href="#"
            target="_blank"
          >
            Get Started
          </button>
        </div>
        <div className="md:hidden p-1 hover:text-opacity-20 ">
          <img
            src={menu}
            alt="menu"
            onClick={() => {
              setMenuOpen(true);
            }}
          />
        </div>
      </div>
      <Home />
    </div>
  );
}

export default LandingPage;
