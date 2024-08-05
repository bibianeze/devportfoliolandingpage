// import React from 'react'
import icon1 from "../assets/icon1.png"
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F5FCFF]">
      <div className="container w-11/12 mx-auto">
        <div className="flex flex-col justify-between gap-10 lg:flex-row pt-10 items-center">
          {/* logo */}
          <div className="flex">
            <img src={icon1} alt="" />
            <h1 className="text-2xl font-semibold">John Dev,</h1>
          </div>
          {/* add links */}
          <div>
            <ul
              className={`flex gap-6 flex-col lg:flex-row lg:items-center pb-3 lg:space-x-`}
            >
              <li className="mt-4 lg:mt-0">
                <a href="#" className="block   text-black">
                  Home
                </a>
              </li>
              <li className="mt-4 lg:mt-0">
                <a href="#" className="block text-black">
                  Portfolio
                </a>
              </li>
              <li className="mt-4 lg:mt-0">
                <a href="#" className="block text-black">
                  About me
                </a>
              </li>
              <li className="mt-4 lg:mt-0">
                <a href="#" className="block text-black">
                  Contact
                </a>
              </li>
              <li className="mt-4 lg:mt-0">
                <a href="#" className="block text-black">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          {/* add social links */}
          <div>
            <div className="flex gap-6 p-4">
              <a href="/">
                <FaFacebook />
              </a>
              <a href="/">
                <FaLinkedin />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <hr />

        <div className="grid grid-cols-1  lg:grid-cols-2 ">
          <div className="mt-4 lg:mt-0">
            <p className="text-sm text-center md:text-start"> Made with by Airdokan</p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <ul
              className={`flex gap-6 flex-col lg:flex-row lg:items-center pb-3 lg:space-x-`}
            >
              <li className="mt-4 lg:mt-0 text-sm">
                <p>Privacy Policy</p>
              </li>
              <li className="mt-4 lg:mt-0 text-sm">
                <p>Terms Service</p>
              </li>
              <li className="mt-4 lg:mt-0 text-sm">
                <p>Cookies Setting</p>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer