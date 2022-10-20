import React, { useState } from "react";
import Image from "next/image";
export default function Index() {
  return (
    <>
      <body className="bg-gray-200 overflow-x-hidden">
        <div className="w-full py-4 bg-white">
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
        <div className="flex gap-6">
          <div className="w-80 bg-white h-screen">
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
                <h1 className="text-gray-600">Dashboard</h1>
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
          <div className="w-11/12 mt-5  ">
            <h1 className="text-2xl text-gray-800 font-bold">Dashboard</h1>
            <div className="flex  mt-6 gap-5">
              <div className="w-11/12 pt-4 pb-4 px-4 bg-white">
                <div className="flex ">
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
                <div className="flex mt-8">
                  <div className="">
                    <h1 className="text-xl text-gray-800 font-bold">$54,785</h1>
                    <h1 className="text-sm font-semibold mt-3">
                      <span className="text-orange-600 font-bold">20% +</span>{" "}
                      from previous month
                    </h1>
                  </div>
                  <div className="ml-auto">
                    <div className="flex gap">
                      <div className="w-2 ml-12 ">
                        <a className="relative group " href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 30.svg"
                            width={6}
                            height={96}
                          />
                          <div className="  ">
                            <div className="-mt-24 -ml-12  h-0 ">
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                <div className="flex ">
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
                <div className="flex mt-8">
                  <div className="">
                    <h1 className="text-xl text-gray-800 font-bold">$1629</h1>
                    <h1 className="text-sm font-semibold mt-3">
                      <span className="text-green-600 font-bold">5% +</span>{" "}
                      from previous month
                    </h1>
                  </div>
                  <div className="ml-auto">
                    <div className="flex gap">
                      <div className="w-2 ml-12 ">
                        <a className="relative group " href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 30 (1).svg"
                            width={6}
                            height={98}
                          />
                          <div className="  ">
                            <div className="-mt-24 -ml-12  h-0 ">
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                            src="/Rectangle 28 (1).svg"
                            width={6}
                            height={80}
                          />
                          <div className=" bg-red-700 ">
                            <div className="-mt-32 -mr-52   h-0 ">
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                <div className="flex ">
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
                <div className="flex mt-8">
                  <div className="">
                    <h1 className="text-xl text-gray-800 font-bold">$75,657</h1>
                    <h1 className="text-sm font-semibold mt-3">
                      <span className="text-orange-600 font-bold">10% +</span>{" "}
                      from previous month
                    </h1>
                  </div>
                  <div className="ml-auto">
                    <div className="flex gap">
                      <div className="w-2 ml-12 ">
                        <a className="relative group " href="#">
                          <Image
                            className="cursor-pointer"
                            src="/Rectangle 30.svg"
                            width={6}
                            height={96}
                          />
                          <div className="  ">
                            <div className="-mt-24 -ml-12  h-0 ">
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
                              <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="px-1">
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
            <div className="flex mt-12 gap-12">
              <div className="w-11/12 bg-white">
                <div className="flex px-4">
                  <div className="text-xl text-gray-800 font-bold">
                    Customers
                  </div>
                  <div className="ml-auto text-lg text-gray-800 font-semibold">
                    July 2022
                  </div>
                </div>
                <div className="flex justify-center items-center bg-white">
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
                          <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                            <div className="px-1">
                              <p className="text-xs  text-gray-800 font-bold">
                                Male
                              </p>
                              <p className="text-xs  font-semibold">25%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <div className="h-full mt-20 pt-2">
                      <a className="relative group" href="#">
                        <Image
                          className="cursor-pointer"
                          src="/Slice-2.svg"
                          width={120}
                          height={120}
                        />
                        <div className="  ">
                          <div className=" -mr-52  ">
                            <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                              <div className="px-1">
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
                  <div className="h-full ">
                    <a className="relative group" href="#">
                      <Image
                        className="cursor-pointer"
                        src="/Slice -50.svg"
                        width={122}
                        height={250}
                      />
                      <div className="  ">
                        <div className="-mt-2 -mr-52  ">
                          <div className="transition-all transform translate-y-8 w-12  ease-in-out transition duration-500   bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                            <div className="px-1">
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
              </div>
              <div className="w-11/12 bg-white">
                <div className="flex justify-center items-center mt-5">
                  <Image
                    className="cursor-pointer"
                    src="/World all.svg"
                    width={492}
                    height={275}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <style>
        {`         
         .gap{
            gap:3px;
         }
         .pt{
            padding-top:5.5px;
         }
                `}
      </style>
    </>
  );
}
