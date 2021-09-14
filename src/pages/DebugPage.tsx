import React from "react";
import { toast } from "react-toastify";
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
            <div className="flex flex-col space-y-5 w-52">
                <button
                    className="px-5 py-2 text-xs text-gray-600 transition duration-150 ease-in-out bg-gray-100 border border-gray-300 rounded focus:outline-none hover:bg-gray-300"
                    onClick={() => {
                        toast("🦄 Wow so easy!", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }}
                >
                    Show Toast
                </button>

                <button
                    className="px-5 py-2 text-xs text-gray-600 transition duration-150 ease-in-out bg-gray-100 border border-gray-300 rounded focus:outline-none hover:bg-gray-300"
                    onClick={startJob}
                >
                    Start Update Library Job
                </button>
            </div>
        </React.Fragment>
    );
};
export default DebugPage;
