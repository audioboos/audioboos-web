import React from "react";
import logo from "./../../assets/images/logo.svg";

const Logo = () => {
    const siteName = "AudioBoos";
    return (
        <React.Fragment>
            <img src={logo} alt="site logo" width={32} height={32} />
            <h1> {siteName}</h1>
        </React.Fragment>
    );
};

export default Logo;
