import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}
function Nav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-11/12 bg-white 0  w-screen z-30 transform ${
        open ? "-translate-x-0" : "-translate-x-full "
      } transition-transform duration-300 ease-in-out  `}
    >
      <div className="flex z-30 bg-white   h-20 block ">
        {" "}
        {/*logo container*/}
        <div className="flex gap-5 px-2 ">
          <div className="mt-4">
            <Image className=" " src="/Group 27.svg" width={200} height={40} />
          </div>
          <div className="ml-auto">
            <h1 className="text-3xl text-white font-semibold px-5 "></h1>
          </div>
        </div>
      </div>
      <div className="pb-32">
        <div className="flex px-8 gap-4 border-b pb-4">
          <div className="mt-1">
            <Image
              className="cursor-pointer"
              src="/chatbubbles-sharp.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="mt-1">
            <Image
              className=""
              src="/notifications-sharp.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="mt-1">
            <Image
              className="cursor-pointer"
              src="/profile.svg"
              width={24}
              height={24}
            />
          </div>
        </div>
        <button className="flex bg-white hover:bg-sky-50 cursor-pointer focus:bg-sky-50 ease-in-out transition duration-500 py-3 mt-5 w-full pl-8 gap-5">
          <div className="">
            <Image
              className="cursor-pointer"
              src="/Home-sharp.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="">
            <h1 className="text-gray-600">Home</h1>
          </div>
        </button>
        <button className="flex bg-white hover:bg-sky-50 cursor-pointer focus:bg-sky-50 ease-in-out transition duration-500 py-3 mt-3 w-full pl-8 gap-5">
          <div className="">
            <Image
              className="cursor-pointer"
              src="/stats-chart-sharp.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="">
            <h1 className="text-gray-600 ">Dashboard</h1>
          </div>
        </button>
        <button className="flex bg-white hover:bg-sky-50 cursor-pointer focus:bg-sky-50 ease-in-out transition duration-500 py-3 mt-3 w-full pl-8 gap-5">
          <div className="">
            <Image
              className="cursor-pointer"
              src="/inbox.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="">
            <h1 className="text-gray-600">Inbox</h1>
          </div>
        </button>
        <button className="flex bg-white hover:bg-sky-50 cursor-pointer focus:bg-sky-50 ease-in-out transition duration-500 py-3 mt-3 w-full pl-8 gap-5">
          <div className="">
            <Image
              className="cursor-pointer"
              src="/document-text-sharp.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="">
            <h1 className="text-gray-600">Invoices</h1>
          </div>
        </button>
        <button className="flex bg-white hover:bg-sky-50 cursor-pointer focus:bg-sky-50 ease-in-out transition duration-500 py-3 mt-3 w-full pl-8 gap-5">
          <div className="">
            <Image
              className="cursor-pointer"
              src="/chatbubbles-sharp.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="">
            <h1 className="text-gray-600">Chatroom</h1>
          </div>
        </button>
        <button className="flex bg-white hover:bg-sky-50 cursor-pointer focus:bg-sky-50 ease-in-out transition duration-500 py-3 mt-3 w-full pl-8 gap-5">
          <div className="">
            <Image
              className="cursor-pointer"
              src="/checkmark-done-sharp.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="">
            <h1 className="text-gray-600">Tasks</h1>
          </div>
        </button>
        <button className="flex bg-white hover:bg-sky-50 cursor-pointer focus:bg-sky-50 ease-in-out transition duration-500 py-3 mt-3 w-full pl-8 gap-5">
          <div className="">
            <Image
              className="cursor-pointer"
              src="/Q-mark.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="">
            <h1 className="text-gray-600 ">Help</h1>
          </div>
        </button>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex block lg:hidden xl:hidden 2xl:hidden md:hidden">
      <div className="bg-white w-11/12">
        <div className="mt-5 ml-2">
          <label className="relative block ">
            <span className="sr-only">Search</span>
            <span className="absolute  inset-y-0 px-2 flex items-center">
              <Image
                className="cursor-pointer "
                src="/Frame (10).svg"
                width={24}
                height={24}
              />
            </span>
            <input
              className=" placeholder:text-slate-400 block bg-white  border border-slate-300  py-2 pl-9  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xs"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
        </div>
        <Nav open={open} setOpen={setOpen} />
      </div>
      <div className="w-11/12 bg-white flex justify-end items-center  p-5">
        <div
          className="z-50 cursor-pointer flex relative w-8 h-8 flex-col justify-between items-center md:hidden "
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={` cursor-pointer h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out   ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={` cursor-pointer h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out  ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={` cursor-pointer h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out  ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
