import React from "react";
import { useParams } from "react-router-dom";
import { AlbumsList } from "../components/widgets";

interface ParamTypes {
    artistName: string;
}

const ArtistPage = () => {
    const { artistName } = useParams<ParamTypes>();
    return (
        <React.Fragment>
            <div>
                <div className="container flex flex-col items-start justify-between px-6 pb-4 mx-auto my-6 border-b border-gray-300 lg:my-12 lg:flex-row lg:items-center">
                    <div>
                        <h4 className="text-2xl font-bold leading-tight text-gray-800">
                            {artistName}
                        </h4>
                        <ul className="flex flex-col items-start mt-3 text-sm text-gray-600 md:flex-row md:items-center">
                            <li className="flex items-center mt-3 mr-3 md:mt-0">
                                <span className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-paperclip"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5" />
                                    </svg>
                                </span>
                                <span>Active</span>
                            </li>
                            <li className="flex items-center mt-3 mr-3 md:mt-0">
                                <span className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-trending-up"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="3 17 9 11 13 15 21 7" />
                                        <polyline points="14 7 21 7 21 14" />
                                    </svg>
                                </span>
                                <span> Trending</span>
                            </li>
                            <li className="flex items-center mt-3 md:mt-0">
                                <span className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-plane-departure"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path
                                            d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z"
                                            transform="rotate(-15 12 12) translate(0 -1)"
                                        />
                                        <line x1={3} y1={21} x2={21} y2={21} />
                                    </svg>
                                </span>
                                <span>Started on 29 Jan 2020</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <button className="px-6 py-2 mx-2 my-2 text-sm text-indigo-700 transition duration-150 ease-in-out bg-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white hover:bg-gray-100">
                            Back
                        </button>
                        <button className="px-8 py-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 border rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
                            Edit Profile
                        </button>
                    </div>
                </div>
                {/* Page title ends */}
                <div className="container px-6 mx-auto">
                    {/* Remove class [ h-64 ] when adding a card block */}
                    {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                    <div className="w-full h-64 border-2 border-gray-300 border-dashed rounded">
                        <AlbumsList artistName={artistName} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default ArtistPage;
