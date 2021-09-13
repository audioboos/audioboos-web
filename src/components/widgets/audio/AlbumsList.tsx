import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Album } from "../../../models";
import audioBoosService from "../../../services/api/audiosBooService";
import MiniActionButton from "../MiniActionButton";

interface IAlbumsListProps {
    artistName: string;
}

function AlbumsList({ artistName }: IAlbumsListProps) {
    const history = useHistory();
    const [albums, setAlbums] = useState<Album[] | undefined>();
    useEffect(() => {
        const loadArtists = async () => {
            const results = await audioBoosService.getAlbums(artistName);
            setAlbums(results);
        };
        loadArtists();
    }, [artistName]);
    return (
        <React.Fragment>
            <div className="container flex flex-col items-center justify-center w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="w-full h-16 text-sm leading-none text-gray-800">
                            <th className="pl-4 font-normal text-left">
                                Title
                            </th>
                            <th className="pl-12 font-normal text-left">
                                Release date
                            </th>
                            <th className="pl-12 font-normal text-left">
                                Play count
                            </th>
                            <th className="pl-16 font-normal text-left"></th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {albums?.map((a) => {
                            return (
                                <tr className="h-20 text-sm leading-none text-gray-800 bg-white border-t border-b border-gray-100 hover:bg-gray-100">
                                    <td className="pl-4 cursor-pointer">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10">
                                                <img
                                                    className="w-full h-full"
                                                    src={a.smallImage}
                                                    alt="Album"
                                                />
                                            </div>
                                            <div className="pl-4">
                                                <p className="font-medium">
                                                    {a.name}
                                                </p>
                                                <p className="pt-2 text-xs leading-3 text-gray-600">
                                                    {a.description}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="pl-12">
                                        <p className="text-sm font-medium leading-none text-gray-800">
                                            72%
                                        </p>
                                        <div className="w-24 h-3 mt-2 bg-gray-100 rounded-full">
                                            <div className="w-20 h-3 rounded-full bg-green-progress" />
                                        </div>
                                    </td>
                                    <td className="pl-12">
                                        <p className="font-medium">32/47</p>
                                        <p className="mt-2 text-xs leading-3 text-gray-600">
                                            5 tasks pending
                                        </p>
                                    </td>
                                    <td className="pl-16">
                                        <div className="flex items-center">
                                            <MiniActionButton
                                                tooltip="Refresh Album"
                                                onclick={() =>
                                                    alert("How refreshing")
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                    />
                                                </svg>
                                            </MiniActionButton>
                                            {/* <button className="mx-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="mx-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button> */}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

export default AlbumsList;
