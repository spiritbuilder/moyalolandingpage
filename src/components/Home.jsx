import React from "react";

import { useHistory } from "react-router-dom";
import phonecard from "../assets/land-phonecard.png";
import sendmoney from "../assets/land-sendmoney.png";
import laptop from "../assets/land-laptop.png";
import dollar from "../assets/land-dollar.png";
import check from "../assets/icons8-checkmark-26.png";
import Footer from "./Footer";
import flutterwave from "../assets/land-flutterwave.png";
import mkobo from "../assets/land-mkobo.png";
import monnify from "../assets/land-monify.png";
import ndic from "../assets/land-ndic.png";
import security from "../assets/land-security.png";
import cbn from "../assets/land-cbn.jpg";

function Home(props) {
  let history = useHistory();
  return (
    <div className="w-full flex flex-col mt-8   overflow-x-hidden">
      <div className="px-3 pt-3 lg:px-32 lg:justify-center overflow-y-hidden  overflow-x-hidden flex flex-col flex-wrap md:px-10">
        <div className=" flex flex-wrap xl:pt-36 lg:pt-36 items-end justify-evenly md:pt-32">
          <div className=" lg:w-6/12 flex justify-start flex-col lg:flex-row flex-wrap ">
            <p className="lg:pt-0  xl:tracking-widest xl:font-semibold xl:leading-snug lg:pr-0 xl:py-4 lg:pb-0 pt-20 pr-8 pb-5  font-semibold text-m-ash text-4xl md:text-4xl xl:text-5xl  ">
              Redefining the
              <br />
              essence of money
            </p>
            <p className="text-m-ash xl:tracking-widest lg:text-xl font-light xl:mb-2 mt-2 mb-5 md:text-3xl">
              Moyalo helps you send money, save money, make seamless payments
              and access credit anywhere and everytime
            </p>
            <a
              href="https://app.moyalo.ng/register"
              className="inline lg:w-auto  xl:mt-6  md:self-center mt-2 p-3 xl:mb-2 mb-8 md:text-3xl lg:text-xl lg:rounded-xl lg:tracking-wide text-xl xl:w-auto xl:py-6   lg:px-14 lg:py-4 tracking-normal rounded-lg md:w-8/12 md:p-6  bg-m-orange text-white"
            >
              Create a Free Account
            </a>
          </div>
          <div className=" lg:w-5/12 relative lg:mt-0 bg-transparent self-center flex-col flex  mt-4">
            <img
              className="mb-4 twist lg:-mb-0 md:h-3/6 object-contain md:mb-32"
              src={phonecard}
              alt=""
            />
            <div className="underlay md:absolute xl:absolute self-center lg:absolute lg:left-6 lg:-top-10 xl:top-4 lg:w-52 xl:w-4/6 xl:h-4/6 lg:h-52 relative animate-pulse -top-80 md:-top-0 md:w-96 md:h-96 w-48 h-48 rounded-full bg-opacity-30 bg-m-blue"></div>
          </div>
        </div>

        <div className=" rounded-full md:-left-96 md:-top-96 lg:-left-96 lg:-top-96 xl:-left-56 absolute -left-56 xl:-top-64 underlay -top-64 bigw bigh  bg-gradient-to-r from-yellow-50  to-m-tiny-blue"></div>

        <div className="lg:mt-28 lg:text-lg text-center xl:text-2xl  -mt-52 md:relative md:-top-24  text-m-ash md:mt-0 md:text-md">
          Moyalo is a product of MKOBO MFB licenced by the CBN, all deposits are
          insured by the NDIC
        </div>
      </div>
      <div className="relative   overflow-y-hidden flex flex-col flex-wrap px-3 pt-3 md:px-32">
        <div className="smw xl:left-1/4 xl:-top-3/4 smh md:left-40 lg:-top-96 lg:left-60 left-10 md:-top-80 -top-32 underlay absolute rounded-full bg-opacity-20 bg-m-blue"></div>
        <div className="smw smh md:left-16 xl:-top-1/3 md:-top-56 lg:left-24 left-3 -top-42 underlay2 absolute rounded-full bg-opacity-20 bg-gradient-to-r from-yellow-50  to-m-tiny-blue"></div>
        <p className="text-m-black md:text-3xl xl:text-4xl xl:tracking-widest pt-6 font-semibold tracking-wide text-center text-xl">
          The Perfect Wallet For Individuals and Businesses
        </p>
        <p className="text-center xl:text-3xl my-6 font-medium md:text-lg text-m-ash">
          Do more with <span className="text-m-black">moyalo</span>, we&apos;ve
          got you in mind
        </p>
        <a
          href="https://app.moyalo.ng"
          className="mb-6 md:px-10 md:rounded-lg xl:text-3xl xl:py-2.5 xl:px-16 xl:my-7 md:text-xl bg-m-blue self-center text-white px-4 py-1 rounded-md blueshadow"
        >
          Get Started
        </a>
        <div className="flex flex-row flex-wrap  xl:mt-14">
          <div className="flex-col flex flex-wrap  lg:w-5/12 xl:w-6/12">
            <p className="md:text-xl xl:pl-4 xl:text-3xl  lg:mt-3 lg:text-left uppercase text-m-ash font-light text-center">
              Transfer and Bills Payment
            </p>
            <p className="py-6 xl:text-7xl text-m-black lg:text-3xl font-bold lg:text-left lg:self-start md:text-3xl text-center text-2xl justify-center self-center">
              Send Money <br /> Receive Money <br />
              &amp; Bills payment
            </p>
            <div className=" flex flex-row flex-wrap">
              <span className="bg-m-orange xl:px-8 xl:py-2 xl:text-2xl xl:font-light xl:m-3 md:text-lg lg:tracking-wider text-white flex items-center  rounded-xl py-0.5 px-3 m-1 ">
                Airtime
              </span>
              <span className=" bg-blue-400 xl:px-8 xl:py-2 xl:text-2xl xl:font-light xl:m-3 md:text-lg lg:tracking-wider text-white flex-nowrap flex items-center rounded-xl px-3 m-1 py-0.5">
                Electricity Bill
              </span>
              <span className="  bg-purple-400 xl:px-8 xl:py-2 xl:text-2xl xl:font-light xl:m-3 md:text-lg lg:tracking-wider text-white flex  items-center rounded-xl px-3 m-1 py-0.5">
                Data
              </span>
              <span className="  bg-m-red flex xl:px-8 xl:py-2 xl:text-2xl xl:font-light xl:m-3 md:text-lg lg:tracking-wider text-white items-center rounded-xl px-3 m-1 py-0.5">
                Cable TV subscription
              </span>
            </div>
          </div>
          <div className="relative flex items-end lg:w-7/12  xl:w-6/12">
            <span className="absolute z-10  lg:right-10 right-0 md:top-28 top-16 bg-opacity-50 md:right-20 md:text-base md:py-1.5  text-sm bg-m-ash text-white inline-flex items-center rounded-xl px-3 m-1 py-0.5">
              No hidden Charges
            </span>
            <span className="bg-opacity-50 z-10 right-0 md:right-20 lg:right-10 absolute md:text-base md:py-1.5 top-36 md:top-52 bg-m-ash text-sm text-white inline-flex items-center rounded-xl px-3 m-1 py-0.5">
              Zero Transfer Fees
            </span>
            <span className="bg-opacity-50 z-10 text-center left-0 md:left-16 lg:left-10 md:text-base md:py-1.5  absolute top-24 md:top-52 bg-m-ash text-sm text-white inline-flex items-center rounded-xl px-3 m-1 py-0.5">
              Instant and Secure <br /> Transfer
            </span>
            <img
              className="object-cover wave"
              src={sendmoney}
              alt="sendmoney"
            />
          </div>
        </div>
      </div>
      <div className="px-5 py-24 md:px-20 -mt-14 md:-mt-24 xl:-mt-24 bg-m-tiny-blue clipped flex lg:justify-center xl:justify-around lg:items-center flex-row flex-wrap-reverse">
        <img
          className="lg:w-7/12 zoom  object-contain"
          src={laptop}
          alt="laptop"
        />
        <div className="lg:w-5/12   flex flex-col">
          <p className="text-2xl lg:text-5xl md:text-3xl xl:text-7xl font-semibold lg:text-right ">
            A Modern
            <br /> Path to <span className="text-m-blue">Save</span>
          </p>
          <p className="text-lg lg:text-xl xl:text-2xl xl:tracking-wide text-m-ash my-5 lg:text-right">
            Moyalo helps you start saving smartly with any of our savings
            feature to avoid over spending and ensure financial discipline.
          </p>
          <a
            href="https://app.moyalo.ng"
            className="w-auto self-start xl:text-2xl  lg:py-4 lg:px-10 xl:px-14 lg:text-xl lg:self-end text-white my-5 bg-m-orange py-3 xl:rounded-3xl rounded-xl px-8"
          >
            Start Saving
          </a>
        </div>
      </div>
      <div className="px-3 md:px-24 flex flex-wrap pt-10 md:pt-40 justify-evenly items-end">
        <div className=" lg:w-5/12">
          <p className="align-left md:text-3xl xl:text-5xl text-2xl mb-4 text-m-black font-bold tracking-wider">
            Create Instant <br />
            Virtual Dollar Card <br />
            for International <br />
            Payments
          </p>
          <p className="tracking-wide xl:my-5 font-normal text-m-ash text-lg">
            Make online payment to international companies like Amazon,
            Facebook, Netflix,Google, Digital Ocean, Instagram Ads, Apple Music,
            Spotify e.t.c
          </p>
          <a href='http://app.moyalo.ng'>
          <button
            
            className="w-auto self-start xl:text-xl  lg:py-5 lg:px-10 xl:px-14 lg:text-xl lg:self-end text-white my-5 bg-m-orange py-3 xl:rounded-3xl rounded-xl px-8"
          >
            Create a Dollar Card
          </button>
          </a>
          
        </div>
        <img className="w-60 lg:w-4/12 shake" src={dollar} alt="dollar" />
      </div>
      <div className="w-full px-4 bg-m-blue bg-opacity-10 py-12 md:py-20 flex-col flex  ">
        <div className="w-full flex justify-center items-center">
          <img
            className="relative animate-bounce  -top-20 md:-top-28 "
            src={security}
            alt="secure"
          />
        </div>
        <div className="flex-wrap flex justify-evenly items-start">
          <div className="px-2 w-64 py-2">
            <div className="flex  justify-start">
              <div className="bg-m-orange px-2 flex justify-center items-center py-1 rounded-xl">
                <img className="h-5" src={check} alt="mark" />
              </div>
              <p className="ml-4 text-m-black text-3xl  font-semibold tracking-wider lg:tracking-widest">
                Secure
              </p>
            </div>
            <div className=" tracking-wide text-base self-center mt-4 text-m-ash break-normal text-center ">
              We use bank-level encryption for all your personal information
            </div>
          </div>
          <div className="px-2 w-64 py-2">
            <div className="flex  justify-start">
              <div className="bg-m-orange px-2 flex justify-center items-center py-1 rounded-xl">
                <img className="h-5" src={check} alt="mark" />
              </div>
              <p className="ml-4 text-m-black text-3xl  font-semibold tracking-wider lg:tracking-widest">
                Regulated
              </p>
            </div>
            <div className=" tracking-wide text-base self-center mt-4 text-m-ash break-normal text-center ">
              Authorized and regulated by the Central Bank of Nigeria(CBN). All
              deposits are insured by the NDIC
            </div>
          </div>
          <div className="px-2 w-64 py-2">
            <div className="flex justify-start ">
              <div className="bg-m-orange px-2 flex justify-center items-center py-1 rounded-xl">
                <img className="h-5" src={check} alt="mark" />
              </div>
              <p className="ml-4 text-m-black text-3xl  font-semibold tracking-wider lg:tracking-widest">
                Trusted
              </p>
            </div>
            <div className=" tracking-wide text-base self-center mt-4 text-m-ash break-normal text-center ">
              Our User reviews on Google speak volumes
            </div>
          </div>
          <div className="px-2 w-64 py-2">
            <div className="flex justify-start">
              <div className="bg-m-orange px-2 flex justify-center items-center py-1 rounded-xl">
                <img className="h-5" src={check} alt="mark" />
              </div>
              <p className="ml-4 text-m-black text-3xl  font-semibold tracking-wider lg:tracking-widest">
                Guaranty
              </p>
            </div>
            <div className=" tracking-wide text-base self-center mt-4 text-m-ash break-normal text-center ">
              Moyalo gives you the assurance of safety on your personal wallet
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 items-start justify-evenly flex flex-row flex-wrap">
        <div className="justify-center flex flex-col items-center">
          <p className="text-3xl tracking-wide">In Partnership with:</p>
          <div className="flex-col flex items-center justify-center">
            <img className="h-36" src={mkobo} alt="mkobo" />
            <div className="flex flex-row">
              <img className="h-20 object-contain" src={cbn} alt="cbn" />
              <img className="h-20 object-contain" src={ndic} alt="ndic" />
            </div>
          </div>
        </div>
        <div className="flex  flex-col justify-start p-1 items-center">
          <p className="text-3xl tracking-wide">Our Partners</p>
          <div className="bg-m-orange m-2 w-20 h-2"></div>
          <div className="flex  flex-wrap justify-evenly items-center">
            <img
              className=" w-48 mx-2 object-contain lg:mt-10"
              src={flutterwave}
              alt="flutterwave"
            />
            <img
              className="w-48 mx-2 object-contain lg:mt-10"
              src={monnify}
              alt="monnify"
            />
          </div>
        </div>
      </div>
      <div className="text-center bg-gradient-to-r from-yellow-50 text-opacity-70 to-m-tiny-blue text-m-black py-12 bg-opacity-10 text-xl px-3 font-normal lg:py-24 lg:text-4xl lg:tracking-wider lg:font-normal ">
        A Wallet that guarantees happiness...{" "}
        <span className="font-bold text-opacity-100 text-black">
          Say Hello to{" "}
        </span>
        <span className="text-m-orange uppercase font-bold text-opacity-100">
          Moyalo!
        </span>
      </div>
      <Footer />
      
    </div>
  );
}

export default Home;
