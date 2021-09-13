import React from "react";
import logo from "./../../assets/images/logo.svg";

const Logo = () => {
    const siteName = "AudioBoos";
    return (
        <React.Fragment>
            <img className="h-10" src={logo} alt="Header logo" />
            <span className="ml-4 text-2xl font-bold text-gray-600 dark:text-gray-300">
                {siteName}
            </span>
        </React.Fragment>
    );
};

export default Logo;
