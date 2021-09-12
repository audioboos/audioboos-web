import { Avatar, Box, ButtonBase, Tooltip } from "@material-ui/core";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";
import { makeStyles } from "@material-ui/styles";
import { useSnackbar } from "notistack";
import React from "react";
import jobService from "../../../services/api/jobService";

const useStyles = makeStyles((theme: any) => ({
    headerAvatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        transition: "all .2s ease-in-out",
        background: theme.palette.secondary.light,
        color: theme.palette.secondary.dark,
        '&[aria-controls="menu-list-grow"],&:hover': {
            background: theme.palette.secondary.dark,
            color: theme.palette.secondary.light,
        },
    },
    box: {
        marginLeft: "16px",
        marginRight: "24px",
        [theme.breakpoints.down("sm")]: {
            marginRight: "16px",
        },
    },
}));

const RefreshLibraryButton = () => {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const refreshAudioLibrary = async () => {
        const result = await jobService.startJob("UpdateLibrary");
        if (result) {
            enqueueSnackbar("Job started successfully", {
                variant: "success",
            });
        } else {
            enqueueSnackbar("Job failed to start", {
                variant: "error",
            });
        }
    };
    return (
        <Box component="span" className={classes.box}>
            <Tooltip title="Refresh library">
                <ButtonBase sx={{ borderRadius: "12px" }}>
                    <Avatar
                        variant="rounded"
                        className={classes.headerAvatar}
                        onClick={refreshAudioLibrary}
                        color="inherit"
                    >
                        <RefreshOutlinedIcon />
                    </Avatar>
                </ButtonBase>
            </Tooltip>
        </Box>
    );
};

export default RefreshLibraryButton;
