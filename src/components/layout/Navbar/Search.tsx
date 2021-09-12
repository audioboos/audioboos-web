import {
    Avatar,
    Box,
    ButtonBase,
    Card,
    CardContent,
    Grid,
    InputAdornment,
    OutlinedInput,
    Popper
} from "@material-ui/core";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/styles";
import PopupState, { bindPopper, bindToggle } from "material-ui-popup-state";
import React, { useState } from "react";
import Transitions from "../../widgets/Transitions";

// style constant
const useStyles = makeStyles((theme: any) => ({
    searchControl: {
        width: "434px",
        marginLeft: "16px",
        paddingRight: "16px",
        paddingLeft: "16px",
        "& input": {
            background: "transparent !important",
            paddingLeft: "5px !important",
        },
        [theme.breakpoints.down("lg")]: {
            width: "250px",
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
            marginLeft: "4px",
            background: "#fff",
        },
    },
    startAdornment: {
        fontSize: "1rem",
        color: theme.palette.grey[500],
    },
    headerAvatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        background: theme.palette.secondary.light,
        color: theme.palette.secondary.dark,
        "&:hover": {
            background: theme.palette.secondary.dark,
            color: theme.palette.secondary.light,
        },
    },
    closeAvatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        background: theme.palette.orange.light,
        color: theme.palette.orange.dark,
        "&:hover": {
            background: theme.palette.orange.dark,
            color: theme.palette.orange.light,
        },
    },
    popperContainer: {
        zIndex: 1100,
        width: "99%",
        top: "-55px !important",
        padding: "0 12px",
        [theme.breakpoints.down("sm")]: {
            padding: "0 10px",
        },
    },
    cardContent: {
        padding: "12px !important",
    },
    card: {
        background: "#fff",
        [theme.breakpoints.down("sm")]: {
            border: 0,
            boxShadow: "none",
        },
    },
}));

//-----------------------|| SEARCH INPUT ||-----------------------//

const Search = () => {
    const classes = useStyles();
    const [value, setValue] = useState("");

    return (
        <React.Fragment>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
                <PopupState variant="popper" popupId="demo-popup-popper">
                    {(popupState) => (
                        <React.Fragment>
                            <Box
                                sx={{
                                    ml: 2,
                                }}
                            >
                                <ButtonBase sx={{ borderRadius: "12px" }}>
                                    <Avatar
                                        variant="rounded"
                                        className={classes.headerAvatar}
                                        {...bindToggle(popupState)}
                                    >
                                        <SearchIcon />
                                    </Avatar>
                                </ButtonBase>
                            </Box>
                            <Popper
                                {...bindPopper(popupState)}
                                transition
                                className={classes.popperContainer}
                            >
                                {({ TransitionProps }) => (
                                    <Transitions
                                        type="zoom"
                                        {...TransitionProps}
                                        sx={{ transformOrigin: "center left" }}
                                    >
                                        <Card className={classes.card}>
                                            <CardContent
                                                className={classes.cardContent}
                                            >
                                                <Grid
                                                    container
                                                    alignItems="center"
                                                    justifyContent="space-between"
                                                >
                                                    <Grid item xs>
                                                        <OutlinedInput
                                                            className={
                                                                classes.searchControl
                                                            }
                                                            id="input-search-header"
                                                            value={value}
                                                            onChange={(e) =>
                                                                setValue(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="Search"
                                                            startAdornment={
                                                                <InputAdornment position="start">
                                                                    <SearchIcon
                                                                        className={
                                                                            classes.startAdornment
                                                                        }
                                                                    />
                                                                </InputAdornment>
                                                            }
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <ButtonBase
                                                                        sx={{
                                                                            borderRadius:
                                                                                "12px",
                                                                        }}
                                                                    >
                                                                        <Avatar
                                                                            variant="rounded"
                                                                            className={
                                                                                classes.headerAvatar
                                                                            }
                                                                        >
                                                                            <AccessAlarmIcon />
                                                                        </Avatar>
                                                                    </ButtonBase>
                                                                    <Box
                                                                        sx={{
                                                                            ml: 2,
                                                                        }}
                                                                    >
                                                                        <ButtonBase
                                                                            sx={{
                                                                                borderRadius:
                                                                                    "12px",
                                                                            }}
                                                                        >
                                                                            <Avatar
                                                                                variant="rounded"
                                                                                className={
                                                                                    classes.closeAvatar
                                                                                }
                                                                                {...bindToggle(
                                                                                    popupState
                                                                                )}
                                                                            >
                                                                                <AccessAlarmIcon />
                                                                            </Avatar>
                                                                        </ButtonBase>
                                                                    </Box>
                                                                </InputAdornment>
                                                            }
                                                            aria-describedby="search-helper-text"
                                                            inputProps={{
                                                                "aria-label":
                                                                    "weight",
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Transitions>
                                )}
                            </Popper>
                        </React.Fragment>
                    )}
                </PopupState>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
                <OutlinedInput
                    className={classes.searchControl}
                    id="input-search-header"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <ButtonBase sx={{ borderRadius: "12px" }}>
                                <Avatar
                                    variant="rounded"
                                    className={classes.headerAvatar}
                                >
                                    <AccessAlarmIcon />
                                </Avatar>
                            </ButtonBase>
                        </InputAdornment>
                    }
                    aria-describedby="search-helper-text"
                    inputProps={{
                        "aria-label": "weight",
                    }}
                />
            </Box>
        </React.Fragment>
    );
};

export default Search;
