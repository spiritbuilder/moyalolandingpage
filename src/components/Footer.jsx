import React from "react";
import logo from "../assets/logo1.png";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

function Footer() {
  const date = new Date();
  return (
    <>
      <div className="w-full sm:py-12 md:px-12 p-4 bg-m-black px-2 lg:px-32">
        <img className="h-6 lg:ml-12" src={logo} alt="logo" />
        <div className="md:flex md:justify-between">
          <div className="text-white w-40">
            <p className="uppercase font-bold my-4">Office Address</p>
            <p className="text-white text-opacity-70">
              Nigeria
              <br />
              238, Afriland House, Egbeda - idimu, Road, Egbeda, Lagos. <br /><br />
              USA.
              <br />
              8 Fremont St,
              <br />
              San Francisco, CA 94105
              <br /> <br />
              E: hello@moyalo.ng
              <br />
              <span>support@moyalo.ng</span>
            </p>
          </div>
          <div className="text-white ">
            <p className="uppercase font-bold my-4">About</p>
            <p className="text-white text-opacity-70">
              <span>Company</span>
              <br />
              <span>Regulations</span>
              <br />
              <span>Career</span>
              <br />
              <span>In the Media</span>
              <br />
              <span>Sitemap</span>
            </p>
          </div>
          <div className="text-white ">
            <p className="uppercase font-bold my-4">Legal</p>
            <p className="text-white text-opacity-70">
              <span>Terms of Services</span>
              <br />
              <span>Privacy Policy</span>
              <br />
              <span>Terms and Conditions</span>
              <br />
              <span>Know your customer(KYC)</span>
              <br />
              <span className=" block uppercase my-4 font-bold  text-white text-opacity-100">
                Pricing
              </span>
              <select className="w-24 text-black rounded-md" name="Currency" id>
                <option className="text-black" value="NGN">
                  NGN
                </option>
                <option className="text-black" value="NGN">
                  USD
                </option>
              </select>
            </p>
          </div>
          <div className="text-white ">
            <p className="uppercase font-bold my-4">Customers</p>
            <p className="text-white text-opacity-70">
              <span>Testimonials</span>
              <br />
              <span>Products</span>
              <br />
              <span>FAQs</span>
              <br />
              <span className=" block uppercase my-4 font-bold  ">Socials</span>
            </p>
            <div className="flex items-center flex-row flex-wrap">
              <a
                href="http://twitter.com/moyalohq"
                rel="noreferrer"
                target="_blank"
              >
                <img className="w-3 lg:w-6 mx-2" src={twitter} alt="twitter" />
              </a>
              <a
                href="http://instagram.com/moyalohq"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-4 lg:w-6 mx-2"
                  src={instagram}
                  alt="instagram"
                />
              </a>
              <a href="#" rel="noreferrer" target="_blank">
                <img
                  className="w-4 lg:w-6 mx-2"
                  src={linkedin}
                  alt="linkedin"
                />
              </a>
              <a
                href="http://facebook.com/moyalohq"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-4 lg:w-6 mx-2"
                  src={facebook}
                  alt="facebook"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-m-blue bg-opacity-10 text-gray-600 font-normal tracking-wide text-normal lg:text-lg xl:text-xl py-4">
        &copy; Moyalo {date.getFullYear()}. All rights reserved.
      </div>
    </>
  );
}

export default Footer;
