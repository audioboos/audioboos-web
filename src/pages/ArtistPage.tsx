import React from 'react';
import { MdManageSearch, MdModeEditOutline, MdRefresh } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { AlbumsList, ArtistCard, ArtistStats, MiniActionButton } from '../components/widgets';
import InlineEdit from '../components/widgets/editable-text/inline-edit.component';
import { Artist } from '../models';
import jobService from '../services/api/jobService';
import { useArtistQuery, useUpdateArtistMutation } from '../store/redux/api';

interface IArtistPageRouteProps {
  artistName: string;
}

const ArtistPage = () => {
  const { artistName } = useParams<IArtistPageRouteProps>();
  const { data, isLoading, isError, isSuccess } = useArtistQuery(artistName);
  const [updateArtist, updateResult] = useUpdateArtistMutation();

  const _renderLoading = () => <div>Loading.....</div>;
  const _renderError = () => <div>Error loading.....</div>;
  const _renderArtist = (artist: Artist) => {
    return (
      <div>
        <div className="container flex flex-col items-start justify-between px-6 pb-4 mx-auto my-6 border-b border-gray-300 lg:my-12 lg:flex-row lg:items-center">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-gray-800">
              <InlineEdit
                text={artist.name}
                onSetText={(text: string) => {
                  updateArtist({ id: artist.id, name: text });
                }}
              >
                <input
                  type="text"
                  name="artist-name"
                  placeholder="Artist name"
                  value={artist.name}
                ></input>
              </InlineEdit>
            </h4>
            <ArtistStats artist={artist} />
          </div>
          <div className="inline-flex space-x-2 text-gray-500">
            <MiniActionButton
              onClick={async () => await jobService.scanArtist(artist.name)}
              tooltip="Refresh artist info"
            >
              <MdRefresh />
            </MiniActionButton>
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
                <AlbumsList artist={artist} />
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
      {isLoading && _renderLoading()}
      {isError && _renderError()}
      {isSuccess && artist != undefined && _renderArtist(artist)}
    </React.Fragment>
  );
};
export default ArtistPage;
