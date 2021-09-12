import { AppBar, CssBaseline, Toolbar, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React from "react";
import { useRecoilState } from "recoil";
import { siteConfig } from "../../store";
import { drawerWidth } from "../../store/constants";
import { Navbar } from "./Navbar";
import Sidebar from "./Sidebar";

interface ILayoutProps {
    children: React.ReactNode;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        display: "flex",
    },
    appBar: {
        backgroundColor: theme.palette.background.default,
    },
    appBarWidth: {
        transition: theme.transitions.create("width"),
        backgroundColor: theme.palette.background.default,
    },
    content: {
        ...theme.typography.mainContent,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.up("md")]: {
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${drawerWidth}px)`,
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: "20px",
            width: `calc(100% - ${drawerWidth}px)`,
            padding: "16px",
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: "10px",
            width: `calc(100% - ${drawerWidth}px)`,
            padding: "16px",
            marginRight: "10px",
        },
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        [theme.breakpoints.down("md")]: {
            marginLeft: "20px",
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: "10px",
        },
    },
}));

const Layout = ({ children }: ILayoutProps) => {
    const [settings, setSettings] = useRecoilState(siteConfig);
    const classes = useStyles();
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

    const handleLeftDrawerToggle = () => {
        // dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
        alert("Do something here!!");
    };
    React.useEffect(() => {
        // dispatch({ type: SET_MENU, opened: !matchDownMd });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownMd]);

    // useEffect(() => {
    //     const loadSettings = async () => {
    //         const results = await settingsService.getSettings();
    //         setSettings({ settings: results });
    //     };
    //     loadSettings();
    // }, [setSettings]);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                className={
                    settings.opened ? classes.appBarWidth : classes.appBar
                }
            >
                <Toolbar>
                    <Navbar handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
            </AppBar>
            <Sidebar
                drawerOpen={settings.opened}
                drawerToggle={handleLeftDrawerToggle}
            />
            <main
                className={clsx([
                    classes.content,
                    {
                        [classes.contentShift]: settings.opened,
                    },
                ])}
            >
                {/* <Main open={leftDrawerOpened}> */}
                {/* breadcrumb */}
                {/* <Breadcrumbs
                    component="div"
                    separator={ChevronRightIcon}
                    navigation={navigation}
                    icon
                    title
                    rightAlign
                /> */}
                <div>{children}</div>
                {/* </Main> */}
            </main>
        </div>
    );
};
export default Layout;
