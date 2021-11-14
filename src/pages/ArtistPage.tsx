import React from 'react';
import { MdManageSearch, MdModeEditOutline } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { AlbumsList, ArtistCard, ArtistStats, MiniActionButton } from '../components/widgets';
import { Artist } from '../models';
import { useArtistQuery } from '../store/redux/api';

interface IArtistPageRouteProps {
  artistName: string;
}

const ArtistPage = () => {
  const { artistName } = useParams<IArtistPageRouteProps>();
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
          <div className="inline-flex space-x-2 text-gray-500">
            <MiniActionButton onClick={() => null} tooltip="Edit artist info">
              <MdModeEditOutline />
            </MiniActionButton>
            <MiniActionButton
              buttonText="Lookup"
              onClick={() => null}
              tooltip="Lookup artist info online"
            >
              <MdManageSearch />
            </MiniActionButton>
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
