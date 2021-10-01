import { HomeIcon, RssIcon } from "@heroicons/react/outline";
import React from "react";
import Authentication from "./Authentication";
import RefreshLibraryButton from "./RefreshLibraryButton";

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="bg-white shadow dark:bg-gray-800 ">
                <div className="px-8 mx-auto max-w-7xl">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center w-full">
                                <a
                                    href="/"
                                    className="flex items-center px-5 py-6 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                >
                                    <span className="mr-2">
                                        <HomeIcon className="w-8 h-6" />
                                    </span>
                                    Dashboard
                                </a>
                                <a
                                    href="/podcasts"
                                    className="flex items-center px-5 py-6 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                >
                                    <span className="mr-2">
                                        <RssIcon className="w-8 h-6" />
                                    </span>
                                    Podcasts
                                </a>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex items-baseline ml-10 space-x-4">
                                    <div className="items-center hidden space-x-5 xl:flex">
                                        <RefreshLibraryButton />
                                        <Authentication />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="flex items-center ml-4 md:ml-6"></div>
                        </div>
                        <div className="flex -mr-2 md:hidden">
                            <button className="inline-flex items-center justify-center p-2 text-gray-800 rounded-md dark:text-white hover:text-gray-300 focus:outline-none">
                                <svg
                                    width={20}
                                    height={20}
                                    fill="currentColor"
                                    className="w-8 h-8"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
