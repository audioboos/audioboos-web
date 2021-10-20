import React from 'react';
import { AlbumsList, ArtistCard, ArtistStats } from '../components/widgets';
import { Artist } from '../models';
import { useArtistQuery } from '../store/redux/api';

interface IArtistPageParams {
  artistName: string;
}

const ArtistPage = ({ artistName }: IArtistPageParams) => {
  const queryResult = useArtistQuery(artistName);

  const _renderLoading = () => <div>Loading.....</div>;
  const _renderError = () => <div>Error loading.....</div>;
  const _renderArtist = (artist: Artist) => {
    return (
      <div>
        <div className="container flex flex-col items-start justify-between px-6 pb-4 mx-auto my-6 border-b border-gray-300 lg:my-12 lg:flex-row lg:items-center">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-gray-800">{artistName}</h4>
            <ArtistStats artist={artist} />
          </div>
          <div className="mt-6 lg:mt-0">
            <button className="flex flex-row px-8 py-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 border rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              Edit
            </button>
          </div>
        </div>
        {/* Page title ends */}
        <div className="container px-6 mx-auto">
          <div className="w-full">
            <div className="flex flex-col space-x-3 md:flex-row">
              <div className="container flex flex-col items-center w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
                <AlbumsList artistName={artistName} />
              </div>
              <div className="hidden md:block">
                <ArtistCard artist={artist} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <React.Fragment>
      {queryResult.isLoading && _renderLoading()}
      {queryResult.isError && _renderError()}
      {queryResult.isSuccess && _renderArtist(queryResult.data || [])}
    </React.Fragment>
  );
};
export default ArtistPage;
