import React from "react";
import { MdRefresh } from 'react-icons/md';
import { toast } from "react-toastify";
import jobService from "../../../services/api/job.service";
import { MiniActionButton } from "../../widgets";

const RefreshLibraryButtonComponent = () => {
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
            <MdRefresh />
        </MiniActionButton>
    );
};

export default RefreshLibraryButtonComponent;
