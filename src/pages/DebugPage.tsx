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
            <button color="secondary" onClick={startJob}>
                Start Update Library Job
            </button>
        </React.Fragment>
    );
};
export default DebugPage;
