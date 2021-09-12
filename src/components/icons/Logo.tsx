// material-ui
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import logo from "./../../assets/images/logo.svg";

const useStyles = makeStyles((theme: any) => ({
    logoText: {
        marginLeft: "12px",
    },
}));

const Logo = () => {
    const theme = useTheme();
    const classes = useStyles();

    const siteName = "AudioBoos";
    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Berry" width="100" />
         *
         */
        <React.Fragment>
            <img src={logo} alt="site logo" width={32} height={32} />
            <h1 className={classes.logoText}> {siteName}</h1>
        </React.Fragment>
    );
};

export default Logo;
