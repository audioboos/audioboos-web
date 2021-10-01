import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <React.Fragment>
            <main className="relative h-screen overflow-hidden font-mono bg-white dark:bg-gray-800">
                <div className="absolute hidden md:block -bottom-32 -left-32 w-96 h-96">
                    <div className="absolute z-20 text-xl text-extrabold right-12 text-start top-1/4">
                        <span className="text-7xl">🎨</span>
                        <p>Got a project ?</p>
                        <a href="/" className="underline">
                            Let's talk
                        </a>
                    </div>
                    <svg
                        viewBox="0 0 200 200"
                        className="absolute w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#FFDBB9"
                            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72,58.7,-79.8,45.9C-87.7,33,-89.5,16.5,-88.9,0.3C-88.4,-15.9,-85.4,-31.7,-78.1,-45.4C-70.8,-59.1,-59.1,-70.6,-45.3,-77.9C-31.6,-85.3,-15.8,-88.5,-0.3,-88.1C15.3,-87.6,30.5,-83.5,44.7,-76.4Z"
                            transform="translate(100 100)"
                        ></path>
                    </svg>
                </div>
                <header className="z-30 flex items-center w-full h-24 sm:h-32">
                    <div className="container flex items-center justify-between px-6 mx-auto">
                        <div className="flex items-center text-3xl font-black text-gray-800 uppercase dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 511.271 511.271"
                                xmlSpace="preserve"
                                className="w-8 h-8"
                            >
                                <path
                                    d="M508.342,94.243c-2.603-2.603-6.942-3.471-10.414-2.603l-17.356,6.075c10.414-12.149,17.356-25.166,21.695-37.315
			c1.736-4.339,0.868-7.81-1.736-10.414c-2.603-2.603-6.942-3.471-10.414-1.736c-24.298,10.414-45.125,19.092-62.481,24.298
			c0,0.868-0.868,0-1.736,0c-13.885-7.81-47.729-25.166-72.027-25.166c-61.614,0.868-111.078,52.936-111.078,116.285v3.471
			c-90.251-17.356-139.715-43.39-193.519-99.797L40.6,58.663l-5.207,10.414c-29.505,56.407-8.678,107.607,25.166,142.319
			c-15.62-2.603-26.034-7.81-35.58-15.62c-3.471-2.603-7.81-3.471-12.149-0.868c-3.471,1.736-5.207,6.942-4.339,11.281
			c12.149,40.786,42.522,73.763,75.498,93.722c-15.62,0-28.637-1.736-41.654-10.414c-3.471-1.736-8.678-1.736-12.149,0.868
			s-5.207,6.942-3.471,11.281c15.62,44.258,45.993,67.688,94.59,73.763c-25.166,14.753-58.142,26.902-109.342,27.77
			c-5.207,0-9.546,3.471-11.281,7.81c-1.736,5.207,0,9.546,3.471,13.017c31.241,25.166,100.664,39.919,186.576,39.919
			c152.732,0,277.695-136.244,277.695-303.729v-2.603c19.092-9.546,34.712-27.77,42.522-52.936
			C511.813,101.185,510.945,96.846,508.342,94.243z M456.274,143.707l-5.207,1.736v14.753
			c0,157.939-117.153,286.373-260.339,286.373c-78.97,0-131.905-13.017-160.542-26.902c59.878-4.339,94.59-23.431,121.492-44.258
			l21.695-15.62h-26.034c-49.464,0-79.837-13.885-97.193-46.861c15.62,5.207,32.108,5.207,50.332,4.339
			c6.942-0.868,13.885-0.868,20.827-0.868l2.603-17.356c-32.976-9.546-72.027-39.051-91.119-78.969
			c17.356,7.81,36.447,9.546,53.803,9.546h26.902L91.8,213.999c-18.224-13.017-72.027-59.01-45.993-124.963
			c55.539,54.671,108.475,79.837,203.932,97.193l10.414,1.736v-24.298c0-53.803,41.654-98.061,93.722-98.929
			c19.959-0.868,52.936,17.356,62.481,22.563c5.207,2.603,10.414,3.471,15.62,1.736c13.017-4.339,28.637-10.414,45.993-17.356
			c-7.81,13.017-18.224,25.166-32.108,36.448c-3.471,2.603-4.339,7.81-2.603,12.149c1.736,4.339,6.942,6.075,11.281,4.339
			l33.844-11.281C482.308,124.616,472.762,137.633,456.274,143.707z"
                                />
                            </svg>
                            <a href="https://twitter.com/audioboos">
                                <span className="mt-1 ml-3 text-xs">
                                    @AUDIOBOOS
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                                <a
                                    href="/"
                                    className="flex px-6 py-2 hover:text-black"
                                >
                                    Works
                                </a>
                                <a
                                    href="/"
                                    className="flex px-6 py-2 hover:text-black"
                                >
                                    Resume
                                </a>
                                <a
                                    href="/"
                                    className="flex px-6 py-2 hover:text-black"
                                >
                                    Services
                                </a>
                                <a
                                    href="/"
                                    className="flex px-6 py-2 hover:text-black"
                                >
                                    Contact
                                </a>
                            </nav>
                            <button className="flex flex-col ml-4 lg:hidden">
                                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                            </button>
                        </div>
                    </div>
                </header>
                <div className="relative z-20 flex items-center">
                    <div className="container relative flex flex-col items-center justify-between px-6 py-4 mx-auto">
                        <div className="flex flex-col">
                            <img
                                src="/img/logo.svg"
                                className="mx-auto rounded-full w-28"
                                alt="Landing"
                            />
                            <p className="my-6 text-3xl text-center dark:text-white">
                                Audio Boos
                            </p>
                            <h2 className="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-gray-800 md:text-6xl dark:text-white">
                                Robot Powered Audio
                            </h2>
                            <div className="flex items-center justify-center mt-4">
                                <Link
                                    to="/login"
                                    className="px-4 py-2 my-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 md:mt-16 dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 dark:text-white hover:bg-gray-800 hover:text-white text-md"
                                >
                                    Let's Go 🤘
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
};
export default HomePage;
