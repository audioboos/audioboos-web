// material-ui
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React from "react";
import { MainCard } from "../../components/widgets";

// project import

// style constant
const useStyles = makeStyles((theme: any) => ({
    card: {
        maxWidth: "475px",
        "& > *": {
            flexGrow: 1,
            flexBasis: "50%",
        },
        [theme.breakpoints.down("sm")]: {
            margin: "1px",
        },
        [theme.breakpoints.down("lg")]: {
            maxWidth: "400px",
        },
    },
    content: {
        padding: theme.spacing(5) + " !important",
        [theme.breakpoints.down("lg")]: {
            padding: theme.spacing(3) + " !important",
        },
    },
}));

interface IAuthCardWrapperProps {
    children: React.ReactNode;
}
const AuthCardWrapper = ({ children, ...other }: IAuthCardWrapperProps) => {
    const classes = useStyles();

    return (
        <MainCard
            className={classes.card}
            contentClass={classes.content}
            {...other}
        >
            {children}
        </MainCard>
    );
};

AuthCardWrapper.propTypes = {
    children: PropTypes.node,
};

export default AuthCardWrapper;
