import { Avatar, ButtonBase } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/system";
import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { siteConfig } from "../../../store";
import { Logo } from "../../icons";
import Authentication from "./Authentication";
import RefreshLibraryButton from "./RefreshLibraryButton";
import Search from "./Search";

interface INavbarProps {
    handleLeftDrawerToggle: () => void;
}

const useStyles = makeStyles((theme: any) => ({
    grow: {
        flexGrow: 1,
    },
    headerAvatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        transition: "all .2s ease-in-out",
        background: theme.palette.secondary.light,
        color: theme.palette.secondary.dark,
        "&:hover": {
            background: theme.palette.secondary.dark,
            color: theme.palette.secondary.light,
        },
    },
    boxContainer: {
        width: "228px",
        display: "flex",
        [theme.breakpoints.down("md")]: {
            width: "auto",
        },
    },
}));
const Navbar = ({ handleLeftDrawerToggle }: INavbarProps) => {
    const classes = useStyles();

    const [config] = useRecoilState(siteConfig);

    return (
        <React.Fragment>
            <div className={classes.boxContainer}>
                <Box
                    component="span"
                    sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
                >
                    <ButtonBase
                        disableRipple
                        component={Link}
                        to={config.defaultPath}
                    >
                        <Logo />
                    </ButtonBase>
                </Box>
                <ButtonBase sx={{ borderRadius: "12px", overflow: "hidden" }}>
                    <Avatar
                        variant="rounded"
                        className={classes.headerAvatar}
                        onClick={handleLeftDrawerToggle}
                        color="inherit"
                    >
                        <MenuIcon />
                    </Avatar>
                </ButtonBase>
            </div>
            <Search />
            <div className={classes.grow} />
            <div className={classes.grow} />
            <RefreshLibraryButton />
            <Authentication />
        </React.Fragment>
    );
};

export default Navbar;
