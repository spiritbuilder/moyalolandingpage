import logo from "./assets/logo1.png";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import menu from "./assets/menuDark.svg";
import cancel from "./assets/closeIcon.svg";

function App() {
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const goto = (href) => {
    window.location.replace = `${href}`;
  };

  return (
    <div className="w-full flex   flex-col overflow-x-hidden">
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
          <a
            href="https://app.moyalo.ng"
            className=" p-3 m-2 rounded text-center bg-white border-m-black border-2 text-m-black  text-sm"
          >
            Sign In
          </a>
          <a
            href="https://app.moyalo.ng/register"
            className="p-3 m-2 text-center rounded border-m-orange border-2 bg-m-orange text-white  text-sm "
          >
            Get Started
          </a>
        </div>
      ) : null}
      <div className=" z-30 w-full xl:px-44  lg:py-6 lg:px-36 px-5 md:px-8 py-4 shadow-md flex flex-wrap fixed top-0 justify-between items-center bg-white ">
        <img className="h-10 object-contain lg:h-12" src={logo} alt="logo" />
        <div className="hidden md:flex md:justify-evenly md:align-middle">
          <a
            href="https://app.moyalo.ng"
            className="p-3 w-auto lg:px-5 lg:font-normal tracking-wide  rounded text-m-ash  lg:text-2xl"
          >
            Sign in
          </a>
          <a
            className="p-3 flex items-center justify-center lg:px-14 lg:py-1 tracking-wide rounded-lg border-m-orange border-2 bg-m-orange text-white   "
            href="https://app.moyalo.ng/register"
          >
            Get Started
          </a>
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
      <div className="2xl:flex  2xl:flex-col self-center">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/faq" component />
          </Switch>
        </Router>
        <Footer />
      </div>
    </div>
    // <div
    //   style={{
    //     fontSize: 40,
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100%",
    //     width: "100%",
    //     textAlign: "center",
    //   }}
    // >
    //   <h1>
    //     Site is currently being upgraded <br /> Please Check again soon
    //   </h1>
    // </div>
  );
}

export default App;
