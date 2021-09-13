import React from "react";
import Authentication from "./Authentication";
import RefreshLibraryButton from "./RefreshLibraryButton";

interface INavbarProps {
    // handleLeftDrawerToggle: () => void;
}

const Navbar = (/*{ handleLeftDrawerToggle }: INavbarProps*/) => {
    const [show, setShow] = React.useState(false);
    const [profile, setProfile] = React.useState(false);
    const [product, setProduct] = React.useState(false);
    const [deliverables, setDeliverables] = React.useState(false);
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
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-grid"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                            />
                                            <rect
                                                x={4}
                                                y={4}
                                                width={6}
                                                height={6}
                                                rx={1}
                                            />
                                            <rect
                                                x={14}
                                                y={4}
                                                width={6}
                                                height={6}
                                                rx={1}
                                            />
                                            <rect
                                                x={4}
                                                y={14}
                                                width={6}
                                                height={6}
                                                rx={1}
                                            />
                                            <rect
                                                x={14}
                                                y={14}
                                                width={6}
                                                height={6}
                                                rx={1}
                                            />
                                        </svg>
                                    </span>
                                    Dashboard
                                </a>
                                <a
                                    href="/products"
                                    className="flex items-center px-5 py-6 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                >
                                    <span className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-puzzle"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                            />
                                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                        </svg>
                                    </span>
                                    Products
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
