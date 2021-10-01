import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Artist } from "../../../models";
import audioBoosService from "../../../services/api/audiosBooService";

function ArtistsList() {

    const [artists, setArtists] = useState<Artist[] | undefined>();

    useEffect(() => {
        const loadArtists = async () => {
            const results = await audioBoosService.getArtists();
            setArtists(results);
        };
        loadArtists();
    }, []);

    return (
        <React.Fragment>
            {artists?.map((a) => {
                return (
                    <NavLink
                        key={a.id}
                        activeClassName="bg-gray-200"
                        className="flex items-center justify-start p-2 my-2 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                        to={`/artist/${a.name}`}
                    >
                        <span className="text-left">
                            <img
                                src={a.smallImage}
                                alt=""
                                className="object-cover w-10 h-10 mx-auto rounded-full "
                            />
                        </span>
                        <span className="mx-4 font-normal text-md">
                            {a.name}
                        </span>
                    </NavLink>
                );
            })}
        </React.Fragment>
    );
}

export default ArtistsList;
