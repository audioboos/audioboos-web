import { Button } from "@material-ui/core";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import React from "react";
import jobService from "../services/api/jobService";
const DebugPage = () => {

    const startJob = async () => {
        const result = await jobService.startJob("UpdateLibrary");
        // if (result) {
        //     enqueueSnackbar("Job started successfully");
        // } else {
        //     enqueueSnackbar("Job failed to start", {
        //         variant: "error",
        //     });
        // }
    };
    return (
        <React.Fragment>
            <Button
                variant="outlined"
                color="secondary"
                onClick={startJob}
                startIcon={<LocalLibraryIcon />}
            >
                Start Update Library Job
            </Button>
        </React.Fragment>
    );
};
export default DebugPage;
