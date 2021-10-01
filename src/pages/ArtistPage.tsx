import React, { useEffect } from "react";
import { AlbumsList, ArtistCard } from "../components/widgets";
import { Artist } from "../models";
import audioBoosService from "../services/api/audiosBooService";

interface IArtistPageParams {
    artistName: string;
}

const ArtistPage = ({ artistName }: IArtistPageParams) => {
    const [artist, setArtist] = React.useState<Artist>();
    useEffect(() => {
        const loadArtist = async () => {
            const results = await audioBoosService.getArtist(artistName);
            setArtist(results);
        };
        loadArtist();
        return () => audioBoosService.cancel();
    }, [artistName]);
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
                        <button className="flex flex-row px-8 py-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 border rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                            </svg>
                            Edit
                        </button>
                    </div>
                </div>
                {/* Page title ends */}
                <div className="container px-6 mx-auto">
                    <div className="w-full">
                        <div className="flex flex-col space-x-3 md:flex-row">
                            <div className="container flex flex-col items-center w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
                                <AlbumsList artistName={artistName} />
                            </div>
                            <div className="hidden md:block">
                                <ArtistCard artist={artist} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default ArtistPage;
