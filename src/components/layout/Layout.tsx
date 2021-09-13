import React from "react";
import { useRecoilState } from "recoil";
import { siteConfig } from "../../store";
import { Navbar } from "./Navbar";
import Sidebar from "./Sidebar";

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
    const [settings, setSettings] = useRecoilState(siteConfig);

    const handleLeftDrawerToggle = () => {
        alert("Do something here!!");
    };

    return (
        <div>
            <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
                <Sidebar />
                <div className="flex-1 h-full overflow-x-hidden overflow-y-auto">
                    <Navbar />
                    <main>{children}</main>
                </div>
            </div>
        </div>

        // <div className="absolute w-full h-full">
        //     <Navbar />
        //     <div className="flex flex-no-wrap">
        //         <Sidebar />
        //         <div className="container w-11/12 h-64 px-6 py-10 mx-auto md:w-4/5">
        //             {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        //             <div className="w-full h-full border-2 border-gray-300 border-dashed rounded">
        //                 {/* Place your content here */}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};
export default Layout;
