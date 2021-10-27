import React from 'react';
import { toast } from 'react-toastify';
import jobService from '../services/api/jobService';
const DebugPage = () => {
  const startJob = async (jobName: string) => {
    const result = await jobService.startJob(jobName);

    if (result) {
      toast('🦄 Job started successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('💩 Failed to start job!', {
        position: 'top-right',
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
    <React.Fragment>
      <div className="flex flex-col space-y-5 w-52">
        <button
          className="px-5 py-2 text-xs text-gray-600 transition duration-150 ease-in-out bg-gray-100 border border-gray-300 rounded focus:outline-none hover:bg-gray-300"
          onClick={() => {
            toast('🦄 Wow so easy!', {
              position: 'top-right',
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
          onClick={() => startJob('ScanArtists')}
        >
          Start Update Library Job
        </button>
        <button
          className="px-5 py-2 text-xs text-gray-600 transition duration-150 ease-in-out bg-gray-100 border border-gray-300 rounded focus:outline-none hover:bg-gray-300"
          onClick={() => startJob('CacheImages')}
        >
          Start cache images job
        </button>
      </div>
    </React.Fragment>
  );
};
export default DebugPage;
