import React from "react";
import { toast } from "react-toastify";
import jobService from "../../../services/api/jobService";
import MiniActionButton from "../../widgets/MiniActionButton";

const RefreshLibraryButton = () => {
    const refreshAudioLibrary = async () => {
        const result = await jobService.startJob("UpdateLibrary");
        if (result) {
            toast("🦄 Refresh library job submitted!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error("💩 Failed to submit refresh job!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
    return (
        <MiniActionButton
            tooltip="Refresh Library"
            onClick={() => refreshAudioLibrary()}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
            </svg>
        </MiniActionButton>
    );
};

export default RefreshLibraryButton;
