import { Box, Button, Chip } from "@material-ui/core";
import LoginIcon from "@material-ui/icons/Login";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import authService from "../../../services/api/authService";
import { auth } from "../../../store";
const useStyles = makeStyles((theme: any) => ({
    box: {
        marginLeft: "8px",
        marginRight: "4px",
        [theme.breakpoints.down("sm")]: {
            marginRight: "16px",
        },
    },
}));
const Authentication = () => {
    const history = useHistory();
    const [authSettings, setAuthSettings] = useRecoilState(auth);
    const classes = useStyles();

    const authenticatedView = () => {
        return (
            <React.Fragment>
                <Button
                    color="inherit"
                    onClick={async () => {
                        const result = await authService.logout();
                        if (result) {
                            setAuthSettings({ isLoggedIn: false });
                            result && history.push("/");
                        }
                    }}
                >
                    Logout
                </Button>
            </React.Fragment>
        );
    };
    const anonymousView = (registerPath: string, loginPath: string) => {
        return (
            <React.Fragment>
                <Box component="span" className={classes.box}>
                    <Chip
                        label="Register"
                        component={Link}
                        to={registerPath}
                        clickable
                        variant="outlined"
                        icon={<PersonAddIcon />}
                    />
                </Box>
                <Box component="span" className={classes.box}>
                    <Chip
                        label="Login"
                        component={Link}
                        to={loginPath}
                        clickable
                        variant="outlined"
                        icon={<LoginIcon />}
                    />
                </Box>
            </React.Fragment>
        );
    };

    return authSettings.isLoggedIn
        ? authenticatedView()
        : anonymousView("/register", "/login");
};

export default Authentication;
