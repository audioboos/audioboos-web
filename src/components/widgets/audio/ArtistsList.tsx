import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArtists, selectArtists } from "../../../store/redux/artists";

function ArtistsList() {
    const state = useSelector(selectArtists);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getArtists());
    }, [dispatch]);
    const renderSection = () => {
        console.log("ArtistsList", "renderSection", state);
        switch (state.status) {
            case "idle":
                return <div>Idle.....</div>;
            case "loading":
                return <div>Loading.....</div>;
            case "error":
                return <div>Bollix.....</div>;
            case "success":
                return state.list.map((a) => {
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
                });
            default:
                return <div>Loading.....</div>;
        }
    };
    return <React.Fragment>{renderSection()}</React.Fragment>;
}

export default ArtistsList;
