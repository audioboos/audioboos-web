import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../icons";
import { ArtistsList } from "../widgets";
import EventReceiver from "../widgets/EventReceiver";
const Sidebar = () => {
    return (
        <aside className="flex justify-between h-screen bg-white border-r w-80 dark:border-primary-darker dark:bg-darker">
            <div className="flex flex-col">
                <div className="flex items-center justify-start mx-6 mt-5 bg-white">
                    <Logo />
                </div>
                <div className="mb-auto overflow-y-auto">
                    <nav className="flex flex-col flex-grow px-6 mt-10">
                        <p className="w-full pb-2 mb-4 ml-2 font-normal text-gray-300 border-b-2 border-gray-100 text-md">
                            Artists
                        </p>
                        <ArtistsList />
                    </nav>
                </div>
                <div className="">
                    <EventReceiver />
                </div>
            </div>
        </aside>
    );
};

Sidebar.propTypes = {
    drawerOpen: PropTypes.bool,
    drawerToggle: PropTypes.func,
    window: PropTypes.object,
};

export default Sidebar;
