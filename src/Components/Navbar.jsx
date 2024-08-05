// // import React from 'react'
// import { useState } from "react";
// import "../Styles/navbar.css";
// import icon1 from "../assets/icon1.png";
// import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

// const Navbar = () => {
//   let Links = [
//     { name: "Home", link: "/" },
//     { name: "Portfolio", link: "/" },
//     { name: "About Me", link: "/" },
//     { name: "Testimonials", link: "/" },
//   ];

//   let [isOpen, setisOpen] = useState(false);
//   return (
    
//     <div className="shadow-md w-full fixed top-0 left-0 z-50">
//   <div className="md:px-10 py-4 px-7 flex justify-between items-center">
//     {/* logo here */}
//     <div className="flex text-2xl cursor-pointer items-center gap-2">
//       <img src={icon1} alt="" className="w-7 h-7" />
//       John Dev,
//     </div>

//     {/* Menu icon */}
//     <div
//       onClick={() => setisOpen(!isOpen)}
//       className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
//     >
//       {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
//     </div>

//     {/* link */}
//     <ul
//       className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white z-40 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? "top-12" : "top-[-490px]"} md:justify-center`}
//     >
//       {Links.map((link) => (
//         <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold">
//           <a
//             href={link.link}
//             className="text-gray-800 hover:text-blue-400 duration-500"
//           >
//             {link.name}
//           </a>
//         </li>
//       ))}
//       <li className="md:hidden my-7">
//         <button className="btn bg-black text-white py-1 px-3 rounded">
//           <a href="/">Contact Me</a>
//         </button>
//       </li>
//     </ul>

//     {/* Contact Me button for desktop */}
//     <div className="hidden md:block">
//       <button className="btn bg-black text-white py-1 px-3 rounded">
//         <a href="/">Contact Me</a>
//       </button>
//     </div>
//   </div>
// </div>

//   );
// };

// export default Navbar;


// // import {
// //   Disclosure,
// //   DisclosureButton,
// //   DisclosurePanel,
// //   Menu,
// //   MenuButton,
// //   MenuItem,
// //   MenuItems,
// // } from "@headlessui/react";
// // import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

// // const navigation = [
// //   { name: "Dashboard", href: "#", current: true },
// //   { name: "Team", href: "#", current: false },
// //   { name: "Projects", href: "#", current: false },
// //   { name: "Calendar", href: "#", current: false },
// // ];

// // function classNames(...classes) {
// //   return classes.filter(Boolean).join(" ");
// // }

// // export default function Navbar() {
// //   return (
// //     <Disclosure as="nav" className="bg-gray-800">
// //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
// //         <div className="relative flex h-16 items-center justify-between">
// //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
// //             {/* Mobile menu button*/}
// //             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
// //               <span className="absolute -inset-0.5" />
// //               <span className="sr-only">Open main menu</span>
// //               <Bars3Icon
// //                 aria-hidden="true"
// //                 className="block h-6 w-6 group-data-[open]:hidden"
// //               />
// //               <XMarkIcon
// //                 aria-hidden="true"
// //                 className="hidden h-6 w-6 group-data-[open]:block"
// //               />
// //             </DisclosureButton>
// //           </div>
// //           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
// //             <div className="flex flex-shrink-0 items-center">
// //               <img
// //                 alt="Your Company"
// //                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
// //                 className="h-8 w-auto"
// //               />
// //             </div>
// //             <div className="hidden sm:ml-6 sm:block">
// //               <div className="flex space-x-4">
// //                 {navigation.map((item) => (
// //                   <a
// //                     key={item.name}
// //                     href={item.href}
// //                     aria-current={item.current ? "page" : undefined}
// //                     className={classNames(
// //                       item.current
// //                         ? "bg-gray-900 text-white"
// //                         : "text-gray-300 hover:bg-gray-700 hover:text-white",
// //                       "rounded-md px-3 py-2 text-sm font-medium"
// //                     )}
// //                   >
// //                     {item.name}
// //                   </a>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
// //             <button
// //               type="button"
// //               className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
// //             >
// //               <span className="absolute -inset-1.5" />
// //               <span className="sr-only">View notifications</span>
// //               <BellIcon aria-hidden="true" className="h-6 w-6" />
// //             </button>

// //             {/* Profile dropdown */}
// //             <Menu as="div" className="relative ml-3">
// //               <div>
// //                 <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
// //                   <span className="absolute -inset-1.5" />
// //                   <span className="sr-only">Open user menu</span>
// //                   <img
// //                     alt=""
// //                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
// //                     className="h-8 w-8 rounded-full"
// //                   />
// //                 </MenuButton>
// //               </div>
// //               <MenuItems
// //                 transition
// //                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
// //               >
// //                 <MenuItem>
// //                   <a
// //                     href="#"
// //                     className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
// //                   >
// //                     Your Profile
// //                   </a>
// //                 </MenuItem>
// //                 <MenuItem>
// //                   <a
// //                     href="#"
// //                     className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
// //                   >
// //                     Settings
// //                   </a>
// //                 </MenuItem>
// //                 <MenuItem>
// //                   <a
// //                     href="#"
// //                     className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
// //                   >
// //                     Sign out
// //                   </a>
// //                 </MenuItem>
// //               </MenuItems>
// //             </Menu>
// //           </div>
// //         </div>
// //       </div>

// //       <DisclosurePanel className="sm:hidden">
// //         <div className="space-y-1 px-2 pb-3 pt-2">
// //           {navigation.map((item) => (
// //             <DisclosureButton
// //               key={item.name}
// //               as="a"
// //               href={item.href}
// //               aria-current={item.current ? "page" : undefined}
// //               className={classNames(
// //                 item.current
// //                   ? "bg-gray-900 text-white"
// //                   : "text-gray-300 hover:bg-gray-700 hover:text-white",
// //                 "block rounded-md px-3 py-2 text-base font-medium"
// //               )}
// //             >
// //               {item.name}
// //             </DisclosureButton>
// //           ))}
// //         </div>
// //       </DisclosurePanel>
// //     </Disclosure>
// //   );
// // }



import{ useState } from "react";
import icon1 from "../assets/icon1.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container w-11/12 mx-auto flex px-0 justify-between items-center">
        <div className="flex">
          <img src={icon1} alt="" />
          <h1 className="text-2xl font-semibold">John Dev,</h1>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "absolute bg-white top-16 left-0 right-0" : "hidden lg:block"}`}
        >
          <ul
            className={`flex flex-col lg:flex-row lg:items-center pb-3 lg:space-x-4 ${isOpen ? "py-4 pl-9" : " items-center"}`}
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
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        <button className="border p-3 rounded-md border-purple-800  hidden lg:block">
          Contact Me
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
