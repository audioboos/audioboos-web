import React from "react";
import logo from "./../../assets/images/logo.svg";

const Logo = () => {
    const siteName = "AudioBoos";
    return (
        <React.Fragment>
            <img className="h-10" src={logo} alt="Header logo" />
        </React.Fragment>
    );
};

export default Logo;
