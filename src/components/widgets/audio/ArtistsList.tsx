import React from "react";
import { NavLink } from "react-router-dom";
import { Artist } from "../../../models";
import { useArtistsQuery } from "../../../store/redux/api";

function ArtistsList() {
    const queryResult = useArtistsQuery();
    const _renderArtists = (artists: Artist[]) => {
        return artists.map((a) => {
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
                    <span className="mx-4 font-normal text-md">{a.name}</span>
                </NavLink>
            );
        });
    };
    const _renderLoading = () => <div>Loading.....</div>;
    const _renderError = () => <div>Error loading.....</div>;

    return (
        <div className="overflow-y-auto">
            {queryResult.isLoading && _renderLoading()}
            {queryResult.isError && _renderError()}
            {queryResult.isSuccess && _renderArtists(queryResult.data || [])}
        </div>
    );
}

export default ArtistsList;
