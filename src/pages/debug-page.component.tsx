import React from 'react';
import { toast } from 'react-toastify';
import jobService from '../services/api/jobService';
const DebugPage = () => {
  const [artistName, setArtistName] = React.useState('');
  const scanArtist = async (artistName: string) => {
    const result = await jobService.scanArtist(artistName);
    if (result) {
      toast('🦄 Successfully started scan artist job!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('💩 Failed to scan artist!', {
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
      <div className="flex flex-col w-full p-12 space-y-5">
        <div className="flex flex-row justify-center p-4 space-x-4 bg-white rounded-lg shadow-2xl">
          <button
            className="px-5 py-2 text-white transition duration-150 ease-in-out bg-red-500 rounded-lg hover:bg-red-600"
            onClick={() => startJob('ScanArtists')}
          >
            Start Update Library Job
          </button>
          <button
            className="px-5 py-2 text-white transition duration-150 ease-in-out bg-red-500 rounded-lg hover:bg-red-600"
            onClick={() => startJob('CacheImages')}
          >
            Start cache images job
          </button>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-xl">
          <div className="relative">
            <div className="absolute top-4 left-3">
              <i className="z-20 text-gray-400 fa fa-search hover:text-gray-500" />{' '}
            </div>
            <input
              type="text"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              className="z-0 pl-10 pr-20 rounded-lg h-14 focus:shadow focus:outline-none"
              placeholder="Type artist name..."
            />
            <div className="absolute top-2 right-2">
              <button
                className="h-10 px-8 text-white bg-red-500 rounded-lg hover:bg-red-600"
                onClick={() => scanArtist(artistName)}
              >
                Scan artist
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DebugPage;
