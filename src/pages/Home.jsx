// import React from 'react'
import image1 from "../assets/image1.png";
import phoneimage from "../assets/phoneimage.png";
import logoimage from "../assets/logoimage.png";
import uiuximage from "../assets/uiuximage.png";
import webflowimage from "../assets/webflowimage.png";
import image2 from "../assets/image2.png";
import { FaGithub } from "react-icons/fa";
import Stars from "../assets/Stars.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import Checkbox from "../assets/Checkbox.png";
import waterimage from "../assets/waterimage.jpg";
import vect from "../assets/vect.png";
// import houseImage from "../assets/houseImage.jpg";
// import starimage from "../assets/starimage.jpg";
const Home = () => {
  return (
    <div className="">
      {/* section1 */}
      <div className="bg-[#F5FCFF]">
        <div className="flex items-center flex-col lg:flex-row w-11/12 mx-auto container ">
          <div className="my-5 flex-col gap-7 space-y-6">
            <h6 className="text-sm">Hey, I am John</h6>
            <h1 className="text-xl lg:text-4xl text-[ #282938] font-bold leading-tight my-3 w-10/12">
              I develop dynamic and User-Centered Web Applications
            </h1>
            <p className="">
              My expertise spans both front-end and back-end development,
              enabling me to build comprehensive solutions that meet diverse
              client needs.
            </p>
            <button className="btn bg-purple-600 text-white">
              Get In Touch
            </button>
          </div>
          <div>
            <img src={image1} alt="" className="w-17 h-82" />
          </div>
        </div>
      </div>

      {/* section2 */}
      <div className="my-24 w-11/12 mx-auto container">
        <div className="my-14">
          <p className="text-sm">My Skills</p>
          <h1 className="py-7 text-4xl font-bold text-[ #282938]">
            My Expertise
          </h1>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row justify-between space-x-4 items-center ">
          <div className="bg-[#F5FCFF] align-middle p-2 rounded w-full">
            <span>
              {" "}
              <img src={phoneimage} alt="" className="" />
            </span>
            <div>
              <h2 className="text-lg font-bold mb-4">Responsive Design</h2>
              <p className="text-sm pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          <div className="bg-[#F5FCFF] p-2 rounded w-full">
            <span>
              <img src={logoimage} alt="" className="w-24" />
            </span>
            <h2 className="text-lg font-bold mb-4">Front-End Frameworks</h2>
            <p className="text-sm pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="bg-[#F5FCFF] p-2 rounded w-full">
            <span>
              {" "}
              <img src={webflowimage} alt="" className="w-24" />
            </span>
            <h2 className="text-lg font-bold mb-4">Testing and debugging</h2>
            <p className="text-sm pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="bg-[#F5FCFF] p-2 rounded w-full">
            <span>
              {" "}
              <img src={webflowimage} alt="" className="w-24" />
            </span>
            <h2 className="text-lg font-bold mb-4">Cloud services</h2>
            <p className="text-sm pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
      </div>

      {/* section3 */}
      <div className="flex md:flex flex-col lg:flex-row lg:flex gap-24 w-11/12 mx-auto container">
        <div>
          <img src={image2} alt="" />
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <p className="font-semibold">About</p>
          <h2 className="font-bold text-4xl">About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque.
          </p>
          <p>
            Sit turpis pretium eget maecenas. Vestibulum dolor mattis
            consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem
            mi a, euismod risus r.
          </p>
        </div>
      </div>

      {/* section4 */}
      <div className="w-11/12 mx-auto container">
        <div className="flex flex-col lg:flex-row justify-between my-14">
          <div className="">
            <p className="text-sm font-semibold">Recent Projects</p>
            <h2 className="text-4xl font-bold">My Portfolio</h2>
          </div>
          <div>
            <button className="btn flex bg-[#7E69D3] text-white">
              <span className="mt-1 mr-1">
                <FaGithub />
              </span>
              visit my github
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  gap-3 justify-center items-center px-6">
          <div className="">
            <img src={waterimage} alt="" className="w-full rounded-t" />
            <div className="w- rounded-b bg-slate-100 p-8 flex flex-col gap-2">
              <h4 className="text-2xl font-semibold">Ahuse</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <div className="flex gap-2 underline">
                <p className="text-sm font-bold">View website</p>
                <img src={vect} alt="" className="h-3 mt-2" />
              </div>
            </div>
          </div>
          <div>
            <img src={waterimage} alt="" className="w-full rounded-t" />
            <div className="w- rounded-b bg-slate-100 p-8 flex flex-col gap-2">
              <h4 className="text-2xl font-semibold">App Dashboard</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <div className="flex gap-2 underline">
                <p className="text-sm font-bold">View website</p>
                <img src={vect} alt="" className="h-3 mt-2" />
              </div>
            </div>
          </div>
          <div>
            <img src={waterimage} alt="" className="w-full rounded-t" />
            <div className="w- rounded-b bg-slate-100 p-8 flex flex-col gap-2">
              <h4 className="text-2xl font-semibold">Easy Rent</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <div className="flex gap-2 underline">
                <p className="text-sm font-bold">View website</p>
                <img src={vect} alt="" className="h-3 mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section5 */}
      <div className="my-14 bg-[#F5FCFF] ">
        <div className="w-11/12 mx-auto container py-5">
          <p className="text-sm">Clients Feedback</p>
          <h1 className="text-4xl font-bold my-6">Customer testimonials</h1>
          <div className="flex flex-col gap-5 lg:flex-row my-11 justify-between space-x-4 items-center ">
            <div className="border p-4 flex flex-col gap-4 w-full">
              <img src={Stars} alt="" className="w-24" />

              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra.
              </p>

              <div className="flex gap-2">
                <img src={avatar1} alt="" className="w-20" />
                <div className="flex flex-col justify-center">
                  <h6 className="font-semibold">Dianne Russell</h6>
                  <p className="">Starbucks</p>
                </div>
              </div>
            </div>
            <div className="border p-4  flex flex-col gap-4 w-full">
              <img src={Stars} alt="" className="w-24" />

              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra.
              </p>

              <div className="flex gap-2">
                <img src={avatar2} alt="" className="w-20" />
                <div className="flex flex-col justify-center">
                  <h6 className="font-semibold">Kristin Watson </h6>
                  <p>Louis vuitton</p>
                </div>
              </div>
            </div>
            <div className="border p-4 flex flex-col gap-4 w-full">
              <img src={Stars} alt="" className="w-24" />

              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra.
              </p>

              <div className="flex gap-2">
                <img src={avatar3} alt="" className="w-20" />
                <div className="flex flex-col justify-center">
                  <h6 className="font-semibold">Kathryn Murphy</h6>
                  <p>McDonalds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section6 */}
      <div>
        <div className="flex w-11/12 mx-auto flex-col justify-center items-center gap-2">
          <div>
            <div className="flex flex-col items-center gap-4">
              <p className=" font-semibold">Get in Touch</p>
              <h2 className="text-4xl font-bold">Contact Me</h2>
              <p className=" font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
            <form>
              <div className="flex flex-col lg:flex-row lg:gap-32 my-4">
                <div>
                  <label
                    form=""
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    id=""
                    type="text"
                    className="mt-1 block w-full lg:w-80 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder=""
                  ></input>
                </div>
                <div>
                  <label
                    form=""
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    id=""
                    type="text"
                    className="mt-1 block w-full lg:w-80 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder=""
                  ></input>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-32 mb-4">
                <div>
                  <label
                    form=""
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id=""
                    type="text"
                    className="mt-1 block w-full lg:w-80  p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder=""
                  ></input>
                </div>
                <div>
                  <label
                    form=""
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id=""
                    type="text"
                    className="mt-1 block w-full lg:w-80  p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder=""
                  ></input>
                </div>
              </div>
              <div className="mb-4">
                <label
                  form="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full h- p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Type your message..."
                ></textarea>
              </div>
              <div className="flex my-2 gap-2">
                <img src={Checkbox} alt="" />
                <p className="text-sm">I accept the terms</p>
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full bg-[#5E3BEE] text-white p-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
