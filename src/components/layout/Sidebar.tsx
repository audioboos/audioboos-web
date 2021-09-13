import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../icons";
import { ArtistsList } from "../widgets";

interface ISidebarProps {
    // drawerOpen: boolean;
    // drawerToggle: () => void;
    // window: any;
}
const Sidebar = (/*{ drawerOpen, drawerToggle, window }: ISidebarProps*/) => {
    return (
        <aside className="flex justify-between w-64 h-screen bg-white border-r dark:border-primary-darker dark:bg-darker">
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
                <div className="">Footer</div>
            </div>
        </aside>
        // <aside className="flex-shrink-0 hidden w-64 bg-white border-r dark:border-primary-darker dark:bg-darker md:block">
        //     <div className="flex items-center justify-start mx-6 mt-5">
        //         <Logo />
        //     </div>
        //     <nav className="flex flex-col flex-grow px-6 mt-10">
        //         <a
        //             className="flex items-center justify-start p-2 my-6 text-gray-600 transition-colors duration-200 hover:text-gray-800 bg-gray-50 dark:bg-gray-600 dark:text-gray-400hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
        //             href="/"
        //         >
        //             <svg
        //                 width={20}
        //                 height={20}
        //                 fill="currentColor"
        //                 viewBox="0 0 2048 1792"
        //                 xmlns="http://www.w3.org/2000/svg"
        //             >
        //                 <path
        //                     fill="#5e72e4"
        //                     d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
        //                 ></path>
        //             </svg>
        //             <span className="mx-4 font-normal text-md">Dashboard</span>
        //         </a>
        //         <div className="overflow-y-scroll">
        //             <p className="w-full pb-2 mb-4 ml-2 font-normal text-gray-300 border-b-2 border-gray-100 text-md">
        //                 Artists
        //             </p>
        //             <ArtistsList />
        //         </div>
        //     </nav>
        //     <div className="flex-shrink-0 px-2 py-4 space-y-2">FARTS</div>
        // </aside>
    );
};

Sidebar.propTypes = {
    drawerOpen: PropTypes.bool,
    drawerToggle: PropTypes.func,
    window: PropTypes.object,
};

export default Sidebar;
