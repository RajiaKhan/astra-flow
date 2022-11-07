import Image from "next/image";
import { useState } from "react";
import React, { useEffect } from "react";
import Head from "next/head";
export default function Index() {
  const [sideBar, setsideBar] = useState();
  useEffect(() => {
    let line_chart = new Chart(document.getElementById("line_chart"), {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            data: [12, 43, 32, 35, 46, 25, 26],
            borderColor: ["#60a5fa"],
            fill: true,
            backgroundColor: "#dbeafe",
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
              },

              ticks: {
                beginAtZero: true,
                max: 55,
                min: 10,
              },
            },
          ],
        },
      },
    });
  });
  return (
    <>
      <Head>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"
        ></script>
      </Head>
      <div className="block  lg:hidden xl:hidden 2xl:hidden md:hidden">
        <div className="relative px-4 py-5 flex justify-between w-full">
          {sideBar ? (
            <button
              onClick={() => setsideBar(!sideBar)}
              aria-label="close nav bar"
              role="button"
              tabIndex={0}
              onkeypress="{sidebarHandler(false)}"
              className="right-0 mr-4 mt-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 absolute"
              id="cross"
              onclick="sidebarHandler(false)"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setsideBar(!sideBar)}
              aria-label="open nav bar"
              role="button"
              className="right-0 mr-4 mt-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 absolute "
              id="menu"
              onclick="sidebarHandler(true)"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10H3"
                  stroke="#1F2937"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 6H3"
                  stroke="#1F2937"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 14H3"
                  stroke="#1F2937"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 18H3"
                  stroke="#1F2937"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          <div className=" cursor-pointer">
            <div className=" ml-2">
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
                  className=" placeholder:text-slate-400 block bg-white  border border-slate-300 py-2 pl-9  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xs"
                  placeholder="Search for anything..."
                  type="text"
                  name="search"
                />
              </label>
            </div>
          </div>
        </div>
        <div
          className={
            sideBar
              ? "border-r border-gray-200 bg-white  h-full z-20 sm:block px-4 transition duration-150 ease-in-out absolute w-full top-30 transform translate-x-0"
              : "border-r border-gray-200 bg-white  h-full z-20 sm:block px-4 transition duration-150 ease-in-out absolute w-full top-30 transform -translate-x-full"
          }
        >
          <div>
            <button className="flex bg-white hover:bg-sky-50 cursor-pointer focus:bg-sky-50 ease-in-out transition duration-500 py-3 mt-5 w-full pl-8 gap-5">
              <div className="">
                <Image
                  className="cursor-pointer"
                  src="/home-sharp.svg"
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
        <div className="w-full p-6" />
      </div>
      <div className="bg-gray-100 overflow-x-hidden  overflow-y-hidden">
        <div className="w-full py-4 bg-white  hidden lg:block xl:block 2xl:block md:block ">
          <div className="flex">
            <div className="px-7">
              <Image
                className="cursor-pointer"
                src="/Group 27.svg"
                width={189}
                height={32}
              />
            </div>
            <div className="ml-auto bg-white">
              <div className="flex gap-6 px-5">
                <div className="">
                  <label className="relative block ">
                    <span className="sr-only">Search</span>
                    <span className="absolute pl-2 inset-y-0 left-0 flex items-center">
                      <Image
                        className="cursor-pointer"
                        src="/Frame (10).svg"
                        width={24}
                        height={24}
                      />
                    </span>
                    <input
                      className=" placeholder:text-slate-400 block bg-white  border border-slate-300  py-2 pl-9 pr-20 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xs"
                      placeholder="Search for anything..."
                      type="text"
                      name="search"
                    />
                  </label>
                </div>
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
            </div>
          </div>
        </div>
        <div className="flex gap-6  ">
          <div className="w-80 hidden md:block lg:block xl:block 2xl:block bg-white h-11/12">
            <button className="flex bg-white hover:bg-sky-50 cursor-pointer focus:bg-sky-50 ease-in-out transition duration-500 py-3 mt-5 w-full pl-8 gap-5">
              <div className="">
                <Image
                  className="cursor-pointer"
                  src="/home-sharp.svg"
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
                <h1 className="text-gray-600">Help</h1>
              </div>
            </button>
          </div>
          <div className=" w-full md:w-8/12 2xl:w-9/12 xl:w-10/12 lg:w-10/12 mt-5 lg:px-1 xl:px-1 2xl:px-5 px-0 ">
            <h1 className="text-2xl text-gray-800 font-bold px-2">Dashboard</h1>
            <div className="flex flex-col lg:flex-row  xl:flex-row 2xl:flex-row  justify-center items-center mt-6 gap-5">
              <div className="w-11/12 pt-4 pb-4 px-4 bg-white">
                <div className="flex justify-center items-center py-4 ">
                  <div className="text-xl text-gray-800 font-bold">
                    Monthly Earning
                  </div>
                  <div className="ml-auto">
                    <Image
                      className="cursor-pointer"
                      src="/ellipsis-horizontal-sharp.svg"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row md:flex-row justify-center items-center  lg:justify-start lg:items-start   xl:justify-start xl:items-start md:justify-start md:items-start  2xl:justify-start 2xl:items-start lg:mt-8 xl:mt-8 2xl:mt-8 md:mt-8 mt-3">
                  <div className="">
                    <h1 className="text-xl text-gray-800 font-bold text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                      $54,785
                    </h1>
                    <h1 className="lg:text-xs xl:text-xs 2xl:text-sm text-sm  font-semibold mt-3  text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                      <span className="text-orange-600 font-bold">20% +</span>{" "}
                      from previous month
                    </h1>
                  </div>
                  <div className="lg:ml-auto xl:ml-auto md:ml-auto my-5 lg:my-0 xl:my-0 2xl:my-0 md:my-0 ml-0 my-5 lg:my-0 xl:my-0 2xl:my-0 md:my-0">
                    <div className="flex gap lg:pb-0 xl:pb-0 2xl:pb-0 md:pb-0 pb-16">
                      <div className="w-2 lg:ml-12 xl:ml-12 2xl:ml-12 md:ml-12 ml-3">
                        <a className="relative group " href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 30.svg"
                            width={6}
                            height={96}
                          />
                          <div className="  ">
                            <div className="-mt-24 -ml-12  h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Jan
                                  </p>
                                  <p className="text-xs  font-semibold">10</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 29 (1).svg"
                            width={6}
                            height={60}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Feb
                                  </p>
                                  <p className="text-xs  font-semibold">60</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 28.svg"
                            width={6}
                            height={76}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Mar
                                  </p>
                                  <p className="text-xs  font-semibold">40</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 27.svg"
                            width={6}
                            height={92}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Apr
                                  </p>
                                  <p className="text-xs  font-semibold">30</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 32.svg"
                            width={6}
                            height={85}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    May
                                  </p>
                                  <p className="text-xs  font-semibold">45</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 34.svg"
                            width={6}
                            height={70}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    jun
                                  </p>
                                  <p className="text-xs  font-semibold">55</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 33.svg"
                            width={6}
                            height={95}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Jul
                                  </p>
                                  <p className="text-xs  font-semibold">25</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 31.svg"
                            width={6}
                            height={60}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Aug
                                  </p>
                                  <p className="text-xs  font-semibold">62</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 35.svg"
                            width={6}
                            height={92}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Sep
                                  </p>
                                  <p className="text-xs  font-semibold">28</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 36.svg"
                            width={6}
                            height={95}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Oct
                                  </p>
                                  <p className="text-xs  font-semibold">10</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 38.svg"
                            width={6}
                            height={75}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Nov
                                  </p>
                                  <p className="text-xs  font-semibold">40</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 37.svg"
                            width={6}
                            height={83}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Dec
                                  </p>
                                  <p className="text-xs  font-semibold">35</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-11/12 pt-4 pb-4 px-4 bg-white">
                <div className="flex  py-4">
                  <div className="text-xl text-gray-800 font-bold">Orders</div>
                  <div className="ml-auto">
                    <Image
                      className="cursor-pointer"
                      src="/ellipsis-horizontal-sharp.svg"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row md:flex-row justify-center items-center  lg:justify-start lg:items-start   xl:justify-start xl:items-start md:justify-start md:items-start  2xl:justify-start 2xl:items-start lg:mt-8 xl:mt-8 2xl:mt-8 md:mt-8 mt-3">
                  <div className="">
                    <h1 className="text-xl text-gray-800 font-bold text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                      $1629
                    </h1>
                    <h1 className="lg:text-xs xl:text-xs 2xl:text-sm text-sm font-semibold mt-3">
                      <span className="text-green-600 font-bold">5% +</span>{" "}
                      from previous month
                    </h1>
                  </div>
                  <div className="lg:ml-auto xl:ml-auto md:ml-auto my-5 lg:my-0 xl:my-0 2xl:my-0 md:my-0 ml-0">
                    <div className="flex gap flex gap lg:pb-0 xl:pb-0 2xl:pb-0 md:pb-0 pb-16">
                      <div className="w-2 lg:ml-12 xl:ml-12 2xl:ml-12 md:ml-12 ml-3">
                        <a className="relative group " href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 30 (1).svg"
                            width={6}
                            height={98}
                          />
                          <div className="  ">
                            <div className="-mt-24 -ml-12  h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Jan
                                  </p>
                                  <p className="text-xs  font-semibold">10</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 29 (2).svg"
                            width={6}
                            height={68}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Feb
                                  </p>
                                  <p className="text-xs  font-semibold">60</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className=" w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 28 (1).svg"
                            width={6}
                            height={80}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Mar
                                  </p>
                                  <p className="text-xs  font-semibold">40</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 27 (1).svg"
                            width={6}
                            height={70}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Apr
                                  </p>
                                  <p className="text-xs  font-semibold">30</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 32 (1).svg"
                            width={6}
                            height={95}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    May
                                  </p>
                                  <p className="text-xs  font-semibold">45</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 34 (1).svg"
                            width={6}
                            height={61}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    jun
                                  </p>
                                  <p className="text-xs  font-semibold">55</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 33 (1).svg"
                            width={6}
                            height={66}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Jul
                                  </p>
                                  <p className="text-xs  font-semibold">25</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 31 (1).svg"
                            width={6}
                            height={79}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Aug
                                  </p>
                                  <p className="text-xs  font-semibold">62</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 35 (1).svg"
                            width={6}
                            height={64}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Sep
                                  </p>
                                  <p className="text-xs  font-semibold">28</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 36 (1).svg"
                            width={6}
                            height={87}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Oct
                                  </p>
                                  <p className="text-xs  font-semibold">10</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 38 (1).svg"
                            width={6}
                            height={95}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Nov
                                  </p>
                                  <p className="text-xs  font-semibold">40</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 37 (1).svg"
                            width={6}
                            height={70}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Dec
                                  </p>
                                  <p className="text-xs  font-semibold">35</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-11/12 pt-8 pb-8 px-4 bg-white">
                <div className="flex  ">
                  <div className="text-xl text-gray-800 font-bold">Revenue</div>
                  <div className="ml-auto">
                    <Image
                      className="cursor-pointer"
                      src="/ellipsis-horizontal-sharp.svg"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row md:flex-row justify-center items-center  lg:justify-start lg:items-start   xl:justify-start xl:items-start md:justify-start md:items-start  2xl:justify-start 2xl:items-start lg:mt-8 xl:mt-8 2xl:mt-8 md:mt-8 mt-3">
                  <div className="">
                    <h1 className=" text-xl text-gray-800 font-bold text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                      $75,657
                    </h1>
                    <h1 className="lg:text-xs xl:text-xs 2xl:text-sm text-sm font-semibold mt-3">
                      <span className="text-orange-600 font-bold">10% +</span>{" "}
                      from previous month
                    </h1>
                  </div>
                  <div className="lg:ml-auto xl:ml-auto md:ml-auto my-5 lg:my-0 xl:my-0 2xl:my-0 md:my-0 ml-0 ">
                    <div className="flex gap flex gap lg:pb-0 xl:pb-0 2xl:pb-0 md:pb-0 pb-16">
                      <div className="w-2 lg:ml-12 xl:ml-12 2xl:ml-12 md:ml-12 ml-3">
                        <a className="relative group " href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 30.svg"
                            width={6}
                            height={96}
                          />
                          <div className="  ">
                            <div className="-mt-24 -ml-12  h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Jan
                                  </p>
                                  <p className="text-xs  font-semibold">10</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 29 (1).svg"
                            width={6}
                            height={60}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Feb
                                  </p>
                                  <p className="text-xs  font-semibold">60</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 28.svg"
                            width={6}
                            height={76}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Mar
                                  </p>
                                  <p className="text-xs  font-semibold">40</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 27.svg"
                            width={6}
                            height={92}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Apr
                                  </p>
                                  <p className="text-xs  font-semibold">30</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 32.svg"
                            width={6}
                            height={85}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    May
                                  </p>
                                  <p className="text-xs  font-semibold">45</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 34.svg"
                            width={6}
                            height={70}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    jun
                                  </p>
                                  <p className="text-xs  font-semibold">55</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 33.svg"
                            width={6}
                            height={95}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Jul
                                  </p>
                                  <p className="text-xs  font-semibold">25</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 31.svg"
                            width={6}
                            height={60}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Aug
                                  </p>
                                  <p className="text-xs  font-semibold">62</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 35.svg"
                            width={6}
                            height={92}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Sep
                                  </p>
                                  <p className="text-xs  font-semibold">28</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 36.svg"
                            width={6}
                            height={95}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Oct
                                  </p>
                                  <p className="text-xs  font-semibold">10</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 38.svg"
                            width={6}
                            height={75}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Nov
                                  </p>
                                  <p className="text-xs  font-semibold">40</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="  w-2 ">
                        <a className="relative group" href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 37.svg"
                            width={6}
                            height={83}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-2 ">
                                  <p className="text-xs  text-gray-800 font-bold">
                                    Dec
                                  </p>
                                  <p className="text-xs  font-semibold">35</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  flex-col lg:flex-row  xl:flex-row 2xl:flex-row  justify-center items-center  mt-12 gap-12">
              <div className="w-11/12 bg-white">
                <div className="flex px-4 mt-4">
                  <div className="text-xl text-gray-800 font-bold">
                    Customers
                  </div>
                  <div className="ml-auto text-lg text-gray-600 font-semibold">
                    <select
                      id="countries"
                      class="cursor-pointer bg-white border border-gray-300 text-gray-600 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>July 2022</option>
                      <option value="US">Aug 2022</option>
                      <option value="CA">Sep 2022</option>
                      <option value="FR">Oct 2022</option>
                      <option value="DE">Nov 2022</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-center items-center bg-white lg:mt-0 xl:mt-20 2xl:mt-32 mt-0   py-6">
                  <div className="  h-full pt ">
                    <a className="relative group " href="#">
                      <Image
                        className="cursor-pointer"
                        src="/Slice.svg"
                        width={120}
                        height={120}
                      />
                      <div className="  ">
                        <div className="-mt-32 -mr-52  ">
                          <div className="transition-all rounded-md transform translate-y-8 w-20 px-2 ease-in-out transition duration-500 rounded-lg  bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                            <div className="gap-2 py-2 flex just fy-center items-center ">
                              <p className="text-xs  text-gray-800 font-bold">
                                Male
                              </p>
                              <p className="text-xs text-gray-800  font-semibold">
                                25%
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <div className="h-full mt-20 Pt">
                      <a className="relative group " href="#">
                        <Image
                          className="cursor-pointer"
                          src="/Slice-2.svg"
                          width={120}
                          height={120}
                        />
                        <div className="  ">
                          <div className=" -mr-52  ">
                            <div className=" transition-all rounded-md transform translate-y-8 w-20 px-2 ease-in-out transition duration-500  rounded-lg  bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                              <div className="gap-2 py-2  flex just fy-center items-center">
                                <p className="text-xs  text-gray-800 font-bold">
                                  Others
                                </p>
                                <p className="text-xs  font-semibold">25%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="h-full w-auto ">
                    <a className="relative group" href="#">
                      <Image
                        className="cursor-pointer"
                        src="/Slice -50.svg"
                        width={122}
                        height={250}
                      />
                      <div className=" flex justify-center items-center ">
                        <div className=" -mr-44 ">
                          <div className="transition-all rounded-md -mt-32 transform translate-y-8 w-20  rounded-lg ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                            <div className="px-1 flex py-2 gap-2 justify-center items-center">
                              <p className="text-xs  text-gray-800 font-bold">
                                Female
                              </p>
                              <p className="text-xs  font-semibold">50%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="flex px-4 lg:mt-22 xl:mt-20 2xl:mt-20 mt-20">
                  <div className="flex gap-2">
                    <div className="">
                      <Image
                        className="cursor-pointer"
                        src="/Ellipse 1.svg"
                        width={14}
                        height={14}
                      />
                    </div>
                    <div className="mt-1">
                      <h1 className="text-gray-600 text-xs">Female</h1>
                    </div>
                  </div>
                  <div className="ml-auto text-gray-600 text-xs">50%</div>
                </div>
                <div className="flex px-4 mt-2">
                  <div className="flex gap-2">
                    <div className="">
                      <Image
                        className="cursor-pointer"
                        src="/Ellipse 1 (1).svg"
                        width={14}
                        height={14}
                      />
                    </div>
                    <div className="mt-1">
                      <h1 className="text-gray-600 text-xs">Male</h1>
                    </div>
                  </div>
                  <div className="ml-auto text-gray-600 text-xs">25%</div>
                </div>
                <div className="flex px-4 mt-2">
                  <div className="flex gap-2">
                    <div className="">
                      <Image
                        className="cursor-pointer"
                        src="/Ellipse 1 (2).svg"
                        width={14}
                        height={14}
                      />
                    </div>
                    <div className="mt-1">
                      <h1 className="text-gray-600 text-xs">Others</h1>
                    </div>
                  </div>
                  <div className="ml-auto text-gray-600 text-xs">25%</div>
                </div>
              </div>
              <div className="w-11/12 bg-white px-2">
                <h1 className="text-xl text-gray-800 font-bold px-3 mt-5">
                  Top Countries
                </h1>
                <div className="block lg:hidden xl:hidden 2xl:hidden ">
                  <Image
                    className="mt-5"
                    src="/world all (2).svg"
                    width={592}
                    height={475}
                  />
                </div>
                <div className=" container mx-auto ">
                  <div className="hidden lg:block xl:block 2xl:block ">
                    <div className="relative flex justify-center items-center  mt-5">
                      <Image
                        className=""
                        src="/world all (1).svg"
                        width={592}
                        height={475}
                      />
                      <div className=" absolute  top-1/4 left-1/2 transform -translate-x-3/4 -translate-y-1/4 ">
                        <div className=" pr-64 pt-2">
                          <a className="relative group pr-12" href="#">
                            <Image
                              className=""
                              src="/location.svg"
                              width={30}
                              height={30}
                            />
                            <div className="  ">
                              <div className="-mt-24 -ml-5  ">
                                <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                  <div className="px-2 ">
                                    <p className="text-xs  text-gray-800 font-bold">
                                      United States
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className=" absolute  top-1/4 left-1/2 transform -translate-x-3/4 -translate-y-1/4 ">
                        <div className=" pr-16 mt-36">
                          <a className="relative group pr-32" href="#">
                            <Image
                              className=""
                              src="/location1.svg"
                              width={30}
                              height={30}
                            />
                            <div className="  ">
                              <div className="-mt-4 -ml-12  h-0 ">
                                <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                  <div className="px-2 ">
                                    <p className="text-xs  text-gray-800 font-bold">
                                      Feb
                                    </p>
                                    <p className="text-xs  font-semibold">10</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className=" absolute  top-20 left-1/2 transform -translate-x-3/4 -translate-y-1/4 ">
                        <div className=" pr-7 mt-2">
                          <a className="relative group pr-24" href="#">
                            <Image
                              className=""
                              src="/location2.svg"
                              width={30}
                              height={30}
                            />
                            <div className="  ">
                              <div className="-mt-16 -ml-5 h-0 ">
                                <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                  <div className="px-2 ">
                                    <p className="text-xs  text-gray-800 font-bold">
                                      Jan
                                    </p>
                                    <p className="text-xs  font-semibold">10</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className=" absolute  top-1/4 left-1/2 transform -translate-x-3/4 -translate-y-1/4 ">
                        <div className="pl-12  mt-24">
                          <a className="relative group " href="#">
                            <Image
                              className=""
                              src="/location3.svg"
                              width={30}
                              height={30}
                            />
                            <div className="  ">
                              <div className="-mt-16 -ml-5 h-0 ">
                                <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                  <div className="px-2 ">
                                    <p className="text-xs  text-gray-800 font-bold">
                                      Jan
                                    </p>
                                    <p className="text-xs  font-semibold">10</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className=" absolute  top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/4 ">
                        <div className="pl-32 ml-12 mt-5 ">
                          <a className="relative group " href="#">
                            <Image
                              className=""
                              src="/location6.svg"
                              width={30}
                              height={30}
                            />
                            <div className="  ">
                              <div className="-mt-2 -ml-5 h-0 ">
                                <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                  <div className="px-2 ">
                                    <p className="text-xs  text-gray-800 font-bold">
                                      Jan
                                    </p>
                                    <p className="text-xs  font-semibold">10</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className=" absolute  top-1/4 left-1/2 transform -translate-x-3/4 -translate-y-1/4 ">
                        <div className=" pl-64 pt-2">
                          <a className="relative group " href="#">
                            <Image
                              className=""
                              src="/location7.svg"
                              width={30}
                              height={30}
                            />
                            <div className="  ">
                              <div className="-mt-20 -ml-5  h-0 ">
                                <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                  <div className="px-2 ">
                                    <p className="text-xs  text-gray-800 font-bold">
                                      Jan
                                    </p>
                                    <p className="text-xs  font-semibold">10</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className=" absolute  top-1/4 left-1/2 transform -translate-x-3/4 -translate-y-1/4 ">
                        <div className=" ml-48 pl-96">
                          <a className="relative group " href="#">
                            <Image
                              className=""
                              src="/location8.svg"
                              width={30}
                              height={30}
                            />
                            <div className="  ">
                              <div className="-mt-20 -ml-5  h-0 ">
                                <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                  <div className="px-2 ">
                                    <p className="text-xs  text-gray-800 font-bold">
                                      Jan
                                    </p>
                                    <p className="text-xs  font-semibold">10</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className=" absolute  top-1/4 left-1/2 transform -translate-x-3/4 -translate-y-1/4 ">
                        <div className=" ml-80 pl-96 mt-20">
                          <a className="relative group " href="#">
                            <Image
                              className=""
                              src="/location9.svg"
                              width={30}
                              height={30}
                            />
                            <div className="  ">
                              <div className="-mt-20 -ml-5  h-0 ">
                                <div className="transition-all rounded-md transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                  <div className="px-2 ">
                                    <p className="text-xs  text-gray-800 font-bold">
                                      Jan
                                    </p>
                                    <p className="text-xs  font-semibold">10</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-16 mb-12 px-3">
                    <div className="w-11/12">
                      <div className=" flex ">
                        <div className="flex">
                          <div className="">
                            <Image
                              className=""
                              src="/Ellipse 1 (3).svg"
                              width={16}
                              height={16}
                            />
                          </div>
                          <div className="px-3 text-sm font-semibold">
                            United States
                          </div>
                        </div>
                        <div className="ml-auto text-gray-800 font-bold">
                          $2300
                        </div>
                      </div>
                      <div className=" flex mt-1">
                        <div className="flex">
                          <div className="">
                            <Image
                              className=""
                              src="/Ellipse 1 (4).svg"
                              width={16}
                              height={16}
                            />
                          </div>
                          <div className="px-3 text-sm font-semibold">
                            China
                          </div>
                        </div>
                        <div className="ml-auto text-gray-800 font-bold ">
                          $4300
                        </div>
                      </div>
                      <div className=" flex mt-1">
                        <div className="flex">
                          <div className="">
                            <Image
                              className=""
                              src="/Ellipse 1 (5).svg"
                              width={16}
                              height={16}
                            />
                          </div>
                          <div className="px-3 text-sm font-semibold">
                            Russia
                          </div>
                        </div>
                        <div className="ml-auto text-gray-800 font-bold ">
                          $1300
                        </div>
                      </div>
                      <div className=" flex mt-1">
                        <div className="flex">
                          <div className="">
                            <Image
                              className=""
                              src="/Ellipse 1 (6).svg"
                              width={16}
                              height={16}
                            />
                          </div>
                          <div className="px-3 text-sm font-semibold">
                            Canada
                          </div>
                        </div>
                        <div className="ml-auto text-gray-800 font-bold ">
                          $6300
                        </div>
                      </div>
                    </div>

                    <div className="w-11/12 ">
                      <div className=" flex  ">
                        <div className="flex">
                          <div className="">
                            <Image
                              className=""
                              src="/Ellipse 1 (3).svg"
                              width={16}
                              height={16}
                            />
                          </div>
                          <div className="px-3 text-sm font-semibold">
                            United States
                          </div>
                        </div>
                        <div className="ml-auto text-gray-800 font-bold">
                          $2300
                        </div>
                      </div>
                      <div className=" flex mt-1">
                        <div className="flex">
                          <div className="">
                            <Image
                              className=""
                              src="/Ellipse 1 (4).svg"
                              width={16}
                              height={16}
                            />
                          </div>
                          <div className="px-3 text-sm font-semibold">
                            China
                          </div>
                        </div>
                        <div className="ml-auto text-gray-800 font-bold ">
                          $4300
                        </div>
                      </div>
                      <div className=" flex mt-1">
                        <div className="flex">
                          <div className="">
                            <Image
                              className=""
                              src="/Ellipse 1 (5).svg"
                              width={16}
                              height={16}
                            />
                          </div>
                          <div className="px-3 text-sm font-semibold">
                            Russia
                          </div>
                        </div>
                        <div className="ml-auto text-gray-800 font-bold ">
                          $1300
                        </div>
                      </div>
                      <div className=" flex mt-1">
                        <div className="flex">
                          <div className="">
                            <Image
                              className=""
                              src="/Ellipse 1 (6).svg"
                              width={16}
                              height={16}
                            />
                          </div>
                          <div className="px-3 text-sm font-semibold">
                            Canada
                          </div>
                        </div>
                        <div className="ml-auto text-gray-800 font-bold ">
                          $6300
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="bg-white mt-12 pb-12 px-5">
                <h1 className="text-gray-800 2xl:text-xl lg:text-xl xl:text-xl md:text-xl text-md font-bold lg:px-12 xl:px-12 2xl:px-12 md:px-12 px-2 pt-12">
                  Social Media Orders Analytical Report
                </h1>
                <div className="block lg:hidden xl:hidden 2xl:hidden  mt-5">
                  <div className="flex justify-center items-center">
                    <div className="w-11/12 border-l mt-5  px-3">
                      <div className="text-gray-600 text-sm mb-2">Facebook</div>
                      <div className="font-bold text-2xl">249</div>
                      <div className="text-gray-600 text-sm mt-2">
                        In last 10 days
                      </div>
                    </div>
                    <div className="w-11/12 border-l mt-5  px-3">
                      <div className="text-gray-600 text-sm mb-2">
                        Instragram
                      </div>
                      <div className="font-bold text-2xl">4334</div>
                      <div className="text-gray-600 text-sm mt-2">
                        In last 10 days
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-5">
                    <div className="w-11/12 border-l mt-5  px-3">
                      <div className="text-gray-600 text-sm mb-2">Youtube</div>
                      <div className="font-bold text-2xl">6872</div>
                      <div className="text-gray-600 text-sm mt-2">
                        In last 10 days
                      </div>
                    </div>
                    <div className="w-11/12 border-l mt-5  px-3">
                      <div className="text-gray-600 text-sm mb-2">
                        Total Orders
                      </div>
                      <div className="font-bold text-2xl">4655</div>
                      <div className="text-gray-600 text-sm mt-2">
                        In last 10 days
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block xl:block 2xl:block">
                  <div className=" flex  justify-center items-center mt-12 ">
                    <div className="w-11/12 border-l mt-5 ml-12 px-5">
                      <div className="text-gray-600 text-sm mb-2">Facebook</div>
                      <div className="font-bold text-2xl">249</div>
                      <div className="text-gray-600 text-sm mt-2">
                        In last 10 days
                      </div>
                    </div>
                    <div className="w-11/12 border-l mt-5 ml-12 px-5">
                      <div className="text-gray-600 text-sm mb-2">
                        Instragram
                      </div>
                      <div className="font-bold text-2xl">4334</div>
                      <div className="text-gray-600 text-sm mt-2">
                        In last 10 days
                      </div>
                    </div>
                    <div className="w-11/12 border-l mt-5 ml-12 px-5">
                      <div className="text-gray-600 text-sm mb-2">Youtube</div>
                      <div className="font-bold text-2xl">6872</div>
                      <div className="text-gray-600 text-sm mt-2">
                        In last 10 days
                      </div>
                    </div>
                    <div className="w-11/12 border-l mt-5 ml-12 px-5">
                      <div className="text-gray-600 text-sm mb-2">
                        Total Orders
                      </div>
                      <div className="font-bold text-2xl">4655</div>
                      <div className="text-gray-600 text-sm mt-2">
                        In last 10 days
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full bg-white md:p-10 lg:p-4 xl:p-4 2xl:p-4 p-0  ">
                  <div className="lg:flex justify-between w-full items-center">
                    <div className="flex items-center mt-4 lg:mt-0"></div>
                  </div>
                  <div className="mt-8">
                    <div className="chartjs-size-monitor">
                      <div className="chartjs-size-monitor-expand">
                        <div className />
                      </div>
                      <div className="chartjs-size-monitor-shrink">
                        <div className />
                      </div>
                    </div>
                    <canvas
                      id="line_chart"
                      height={520}
                      width={1068}
                      className="chartjs-render-monitor"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="bg-white mt-12 pb-12 px-3 ">
                <h1 className="text-xl px-4 pt-5">Latest Transaction</h1>
                <div className=" hidden lg:block xl:block 2xl:block ">
                  <div className="flex gap-4 justify-center items-center mt-12 py-8 bg-gray-100">
                    <div className="  w-11/12 flex justify-center items-center">
                      <input
                        className="w-6 h-6 "
                        type="checkbox"
                        id="Large"
                        name="Large"
                        value="Large"
                      />
                      <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                          <label
                            className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                            for=""
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div className=" w-11/12 bg-gray-100">
                      <h1 className="text-center font-bold text-lg text-gray-800">
                        Order ID
                      </h1>
                    </div>
                    <div className=" w-11/12 bg-gray-100">
                      <h1 className="text-center font-bold text-lg text-gray-800">
                        Customer Name
                      </h1>
                    </div>
                    <div className=" w-11/12 bg-gray-100">
                      <h1 className="text-center font-bold text-lg text-gray-800">
                        Date
                      </h1>
                    </div>
                    <div className=" w-11/12 bg-gray-100">
                      <h1 className="text-center font-bold text-lg text-gray-800">
                        Total
                      </h1>
                    </div>
                    <div className=" w-11/12 bg-gray-100">
                      <h1 className="text-center font-bold text-lg text-gray-800">
                        Payment Status
                      </h1>
                    </div>
                    <div className=" w-11/12 bg-gray-100">
                      <h1 className="text-center font-bold text-lg text-gray-800">
                        Payment Method
                      </h1>
                    </div>
                    <div className=" w-11/12 bg-gray-100">
                      <h1 className="text-center font-bold text-lg text-gray-800">
                        Details
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-center items-center mt-8 py-8">
                    <div className="w-11/12 flex justify-center items-center">
                      <input
                        className="w-6 h-6 "
                        type="checkbox"
                        id="Large"
                        name="Large"
                        value="Large"
                      />
                      <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                          <label
                            className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                            for=""
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        #SK25480
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        Winston Bosco
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        2022-07-01
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        $6450
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <div className="text-center font-semibold text-md ">
                        <div className=" justify-center items-center flex">
                          <div className="bg-yellow-50 hover:bg-yellow-100 cursor-pointer text-yellow-500 rounded-full w-24 py-2 ">
                            Pending
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" w-11/12 ">
                      <div className="flex justify-center items-center">
                        <Image
                          className="cursor-pointer"
                          src="/visa.svg"
                          width={60}
                          height={20}
                        />
                      </div>
                    </div>
                    <div className=" w-11/12 ">
                      <div className="flex justify-center items-center">
                        <Image
                          className="cursor-pointer"
                          src="/menu.svg"
                          width={22}
                          height={22}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-center items-center mt-8 py-8">
                    <div className="w-11/12 flex justify-center items-center">
                      <input
                        className="w-6 h-6 "
                        type="checkbox"
                        id="Large"
                        name="Large"
                        value="Large"
                      />
                      <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                          <label
                            className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                            for=""
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        #SK25481
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        Fredrick Gulgowski
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        2022-07-02
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        $6450
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <div className="text-center font-semibold text-md ">
                        <div className=" justify-center items-center flex">
                          <div className="bg-green-50 hover:bg-green-100 cursor-pointer text-green-500 rounded-full w-20 py-2 ">
                            Paid
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" w-11/12 ">
                      <div className="flex justify-center items-center">
                        <Image
                          className="cursor-pointer"
                          src="/master card.svg"
                          width={70}
                          height={25}
                        />
                      </div>
                    </div>
                    <div className=" w-11/12 ">
                      <div className="flex justify-center items-center">
                        <Image
                          className="cursor-pointer"
                          src="/menu.svg"
                          width={22}
                          height={22}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-center items-center mt-8 py-8">
                    <div className="w-11/12 flex justify-center items-center">
                      <input
                        className="w-6 h-6 "
                        type="checkbox"
                        id="Large"
                        name="Large"
                        value="Large"
                      />
                      <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                          <label
                            className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                            for=""
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        #SK25482
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        Joran Homenick Jr.
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        2022-07-02
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        $7450
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <div className="text-center font-bold text-lg ">
                        <div className=" justify-center items-center flex">
                          <div className="bg-blue-50 hover:bg-blue-100 cursor-pointer text-blue-500 rounded-full w-24 py-2 ">
                            Refund
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" w-11/12 ">
                      <div className="flex justify-center items-center">
                        <Image
                          className="cursor-pointer"
                          src="/master card.svg"
                          width={70}
                          height={25}
                        />
                      </div>
                    </div>
                    <div className=" w-11/12 ">
                      <div className="flex justify-center items-center">
                        <Image
                          className="cursor-pointer"
                          src="/menu.svg"
                          width={22}
                          height={22}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex  gap-4 justify-center items-center mt-8 py-8">
                    <div className="w-11/12 flex  justify-center items-center">
                      <input
                        className="w-6 h-6 "
                        type="checkbox"
                        id="Large"
                        name="Large"
                        value="Large"
                      />
                      <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                          <label
                            className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                            for=""
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        #SK25483
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        Mikael Jordan
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        2022-07-02
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        $74500
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <div className="text-center font-semibold text-md ">
                        <div className=" justify-center items-center flex">
                          <div className="bg-yellow-50 hover:bg-yellow-100 cursor-pointer text-yellow-500 rounded-full w-24 py-2 ">
                            Pending
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" w-11/12 ">
                      <div className="flex justify-center items-center">
                        <Image
                          className="cursor-pointer"
                          src="/XMLID 4.svg"
                          width={75}
                          height={30}
                        />
                      </div>
                    </div>
                    <div className=" w-11/12 ">
                      <div className="flex justify-center items-center">
                        <Image
                          className="cursor-pointer"
                          src="/menu.svg"
                          width={22}
                          height={22}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-center items-center mt-8 py-8 ">
                    <div className="w-11/12 flex justify-center items-center">
                      <input
                        className="w-6 h-6 "
                        type="checkbox"
                        id="Large"
                        name="Large"
                        value="Large"
                      />
                      <div className="inline-block">
                        <div className="flex space-x-6 justify-center items-center">
                          <label
                            className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                            for=""
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        #SK25484
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        Mikael Jordan
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        2022-07-02
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <h1 className="text-center font-semibold text-md text-gray-800">
                        $9475
                      </h1>
                    </div>
                    <div className=" w-11/12 ">
                      <div className="text-center font-semibold text-md ">
                        <div className=" justify-center items-center flex">
                          <div className="bg-green-50 hover:bg-green-100 cursor-pointer text-green-500 rounded-full w-20 py-2 ">
                            Paid
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" w-11/12 ">
                      <div className="flex justify-center items-center">
                        <Image
                          className="cursor-pointer"
                          src="/visa.svg"
                          width={60}
                          height={20}
                        />
                      </div>
                    </div>
                    <div className=" w-11/12 ">
                      <div className="flex justify-center items-center">
                        <Image
                          className="cursor-pointer"
                          src="/menu.svg"
                          width={22}
                          height={22}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block lg:hidden xl:hidden 2xl:hidden  mt-12">
                  <div className="flex overflow-x-scroll  ">
                    <div className="w-11/12  ">
                      <div className="bg-gray-100 py-7  w-full ">
                        <div className="px-8 pb-1">
                          <input
                            className="w-4 h-4"
                            type="checkbox"
                            id="Large"
                            name="Large"
                            value="Large"
                          />
                          <div className="inline-block">
                            <div className="flex space-x-6 justify-center items-center">
                              <label
                                className=" text-sm leading-3 font-normal text-gray-600 dark:text-white"
                                for=""
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="ml-8">
                          <input
                            className="w-4 h-4 mt-12"
                            type="checkbox"
                            id="Large"
                            name="Large"
                            value="Large"
                          />
                          <div className="inline-block">
                            <div className="flex space-x-6 justify-center items-center">
                              <label
                                className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                                for=""
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="ml-8">
                          <input
                            className="w-4 h-4 mt-12"
                            type="checkbox"
                            id="Large"
                            name="Large"
                            value="Large"
                          />
                          <div className="inline-block">
                            <div className="flex space-x-6 justify-center items-center">
                              <label
                                className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                                for=""
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="ml-8">
                          <input
                            className="w-4 h-4 mt-12"
                            type="checkbox"
                            id="Large"
                            name="Large"
                            value="Large"
                          />
                          <div className="inline-block">
                            <div className="flex space-x-6 justify-center items-center">
                              <label
                                className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                                for=""
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="ml-8">
                          <input
                            className="w-4 h-4 mt-12"
                            type="checkbox"
                            id="Large"
                            name="Large"
                            value="Large"
                          />
                          <div className="inline-block">
                            <div className="flex space-x-6 justify-center items-center">
                              <label
                                className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                                for=""
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="ml-8">
                          <input
                            className="w-4 h-4 mt-12"
                            type="checkbox"
                            id="Large"
                            name="Large"
                            value="Large"
                          />
                          <div className="inline-block">
                            <div className="flex space-x-6 justify-center items-center">
                              <label
                                className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-white"
                                for=""
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-11/12 ">
                      <div className="bg-gray-100 py-8">
                        <h1 className="text-gray-800 font-semibold text-sm w-11/12 ml-8">
                          Order id
                        </h1>
                      </div>
                      <div className="text-gray-600 font-normal text-xs mt-12 px-8">
                        #SK25484
                      </div>
                      <div className="text-gray-600 font-normal text-xs mt-12 px-8">
                        #SK25484
                      </div>
                      <div className="text-gray-600 font-normal text-xs mt-12 px-8">
                        #SK25484
                      </div>
                      <div className="text-gray-600 font-normal text-xs mt-12 px-8">
                        #SK25484
                      </div>
                      <div className="text-gray-600 font-normal text-xs mt-12 px-8">
                        #SK25484
                      </div>
                    </div>
                    <div className="w-11/12 ">
                      <div className="py-8 bg-gray-100 w-full flex">
                        <h1 className="text-gray-800 ml-4 font-semibold text-sm ">
                          Customer
                        </h1>
                        <h1 className="text-gray-800  font-semibold text-sm ml-1 ">
                          Name
                        </h1>
                      </div>
                      <div className="flex mt-12">
                        <h1 className="text-gray-600 ml-4 font-normal text-xs ">
                          Winston
                        </h1>
                        <h1 className="text-gray-600  font-normal text-xs ml-1 ">
                          Bosco
                        </h1>
                      </div>
                      <div className="flex mt-12">
                        <h1 className="text-gray-600 ml-4 font-normal text-xs ">
                          Winston
                        </h1>
                        <h1 className="text-gray-600  font-normal text-xs ml-1 ">
                          Bosco
                        </h1>
                      </div>
                      <div className="flex mt-12">
                        <h1 className="text-gray-600 ml-4 font-normal text-xs ">
                          Winston
                        </h1>
                        <h1 className="text-gray-600  font-normal text-xs ml-1 ">
                          Bosco
                        </h1>
                      </div>
                      <div className="flex mt-12">
                        <h1 className="text-gray-600 ml-4 font-normal text-xs ">
                          Winston
                        </h1>
                        <h1 className="text-gray-600  font-normal text-xs ml-1 ">
                          Bosco
                        </h1>
                      </div>
                      <div className="flex mt-12">
                        <h1 className="text-gray-600 ml-4 font-normal text-xs ">
                          Winston
                        </h1>
                        <h1 className="text-gray-600  font-normal text-xs ml-1 ">
                          Bosco
                        </h1>
                      </div>
                    </div>
                    <div className="w-11/12 ">
                      <div className="py-8 bg-gray-100 w-full ">
                        <h1 className="text-gray-800 ml-8 font-semibold text-sm ">
                          Date
                        </h1>
                      </div>
                      <div className="flex mt-12 px-5 ">
                        <h1 className="text-gray-600  font-normal text-xs flex ">
                          2022-
                        </h1>
                        <h1 className="text-gray-600  font-normal text-xs  ">
                          07
                        </h1>
                        <h1 className="text-gray-600  font-normal text-xs  ">
                          -01
                        </h1>
                      </div>
                      <div className="flex mt-12 px-5 ">
                        <h1 className="text-gray-600  font-normal text-xs flex ">
                          2022-
                        </h1>
                        <h1 className="text-gray-600  font-normal text-xs  ">
                          07
                        </h1>
                        <h1 className="text-gray-600  font-normal text-xs  ">
                          -01
                        </h1>
                      </div>
                      <div className="flex mt-12 px-5 ">
                        <h1 className="text-gray-600  font-normal text-xs flex ">
                          2022-
                        </h1>
                        <h1 className="text-gray-600  font-normal text-xs  ">
                          07
                        </h1>
                        <h1 className="text-gray-600  font-normal text-xs  ">
                          -01
                        </h1>
                      </div>
                      <div className="flex mt-12 px-5 ">
                        <h1 className="text-gray-600  font-normal text-xs flex ">
                          2022-
                        </h1>
                        <h1 className="text-gray-600  font-normal text-xs  ">
                          07
                        </h1>
                        <h1 className="text-gray-600  font-normal text-xs  ">
                          -01
                        </h1>
                      </div>
                      <div className="flex mt-12 px-5 ">
                        <h1 className="text-gray-600  font-normal text-xs flex ">
                          2022-
                        </h1>
                        <h1 className="text-gray-600  font-normal text-xs  ">
                          07
                        </h1>
                        <h1 className="text-gray-600  font-normal text-xs  ">
                          -01
                        </h1>
                      </div>
                    </div>

                    <div className="w-11/12">
                      <div className="bg-gray-100 py-8">
                        <h1 className="text-gray-800 font-semibold text-sm w-11/12 ml-8">
                          Total
                        </h1>
                      </div>
                      <div className="text-gray-600 font-normal text-xs mt-12 px-8">
                        $6450
                      </div>
                      <div className="text-gray-600 font-normal text-xs mt-12 px-8">
                        $7450
                      </div>
                      <div className="text-gray-600 font-normal text-xs mt-12 px-8">
                        $74500
                      </div>
                      <div className="text-gray-600 font-normal text-xs mt-12 px-8">
                        $9475
                      </div>
                      <div className="text-gray-600 font-normal text-xs mt-12 px-8">
                        $5475
                      </div>
                    </div>
                    <div className="w-11/12 ">
                      <div className="bg-gray-100 py-8 px-5 flex">
                        <h1 className="text-gray-800 font-semibold text-sm ">
                          Payment
                        </h1>
                        <h1 className="text-gray-800 font-semibold text-sm ml-1">
                          Status
                        </h1>
                      </div>
                      <div className="text-center font-semibold text-xs mt-10 ">
                        <div className=" justify-center items-center flex">
                          <div className="bg-yellow-50 hover:bg-yellow-100 cursor-pointer text-yellow-500 rounded-full w-16 py-2 ">
                            Pending
                          </div>
                        </div>
                      </div>
                      <div className="text-center font-semibold text-xs mt-8 ">
                        <div className=" justify-center items-center flex">
                          <div className="bg-green-50 hover:bg-green-100 cursor-pointer text-green-500 rounded-full w-16 py-2 ">
                            Paid
                          </div>
                        </div>
                      </div>
                      <div className="text-center font-semibold text-xs mt-8 ">
                        <div className=" justify-center items-center flex">
                          <div className="bg-blue-50 hover:bg-blue-100 cursor-pointer text-blue-500 rounded-full w-16 py-2 ">
                            Refund
                          </div>
                        </div>
                      </div>
                      <div className="text-center font-semibold text-xs mt-8 ">
                        <div className=" justify-center items-center flex">
                          <div className="bg-yellow-50 hover:bg-yellow-100 cursor-pointer text-yellow-500 rounded-full w-16 py-2 ">
                            Pending
                          </div>
                        </div>
                      </div>
                      <div className="text-center font-semibold text-xs mt-8 ">
                        <div className=" justify-center items-center flex">
                          <div className="bg-green-50 hover:bg-green-100 cursor-pointer text-green-500 rounded-full w-16 py-2 ">
                            Paid
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-11/12">
                      <div className="bg-gray-100 py-8 px-5 flex">
                        <h1 className="text-gray-800 font-semibold text-sm ">
                          Payment
                        </h1>
                        <h1 className="text-gray-800 font-semibold text-sm ml-1">
                          Method
                        </h1>
                      </div>
                      <div className="flex justify-center items-center mt-12">
                        <Image
                          className="cursor-pointer"
                          src="/visa.svg"
                          width={40}
                          height={20}
                        />
                      </div>
                      <div className="flex justify-center items-center mt-10">
                        <Image
                          className="cursor-pointer"
                          src="/master card.svg"
                          width={40}
                          height={20}
                        />
                      </div>
                      <div className="flex justify-center items-center mt-12">
                        <Image
                          className="cursor-pointer"
                          src="/master card.svg"
                          width={40}
                          height={20}
                        />
                      </div>
                      <div className="flex justify-center items-center mt-12">
                        <Image
                          className="cursor-pointer"
                          src="/XMLID 4.svg"
                          width={55}
                          height={20}
                        />
                      </div>
                      <div className="flex justify-center items-center mt-10">
                        <Image
                          className="cursor-pointer"
                          src="/visa.svg"
                          width={40}
                          height={20}
                        />
                      </div>
                    </div>
                    <div className="w-11/12">
                      <div className="bg-gray-100 py-8 px-5 ">
                        <h1 className="text-gray-800 font-semibold text-sm ">
                          Details
                        </h1>
                      </div>
                      <div className="mt-12">
                        <div className="flex justify-center items-center">
                          <Image
                            className="cursor-pointer"
                            src="/menu.svg"
                            width={22}
                            height={22}
                          />
                        </div>
                      </div>
                      <div className="mt-8">
                        <div className="flex justify-center items-center">
                          <Image
                            className="cursor-pointer"
                            src="/menu.svg"
                            width={22}
                            height={22}
                          />
                        </div>
                      </div>
                      <div className="mt-12">
                        <div className="flex justify-center items-center">
                          <Image
                            className="cursor-pointer"
                            src="/menu.svg"
                            width={22}
                            height={22}
                          />
                        </div>
                      </div>
                      <div className="mt-12">
                        <div className="flex justify-center items-center">
                          <Image
                            className="cursor-pointer"
                            src="/menu.svg"
                            width={22}
                            height={22}
                          />
                        </div>
                      </div>
                      <div className="px-5 mt-10">
                        <div className="flex justify-center items-center">
                          <Image
                            className="cursor-pointer"
                            src="/menu.svg"
                            width={22}
                            height={22}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`         
         .gap{
            gap:3px;
         }
         .pt{
            margin-top:30.8px;
         }
         .Pt{
            padding-top:9.5px;
         }
                `}
      </style>
    </>
  );
}
