import React from 'react';
import { MdManageSearch, MdModeEditOutline, MdRefresh } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { AlbumsList, ArtistCard, ArtistStats, MiniActionButton } from '../components/widgets';
import { Artist } from '../models';
import jobService from '../services/api/job.service';
import InlineEdit from '@atlaskit/inline-edit';
import Textfield from '@atlaskit/textfield';

import { useArtistQuery, useUpdateArtistMutation } from '../store/redux/api';
import { toast } from 'react-toastify';

const ArtistPage = () => {
  const { artistName } = useParams();
  const { data: artist, isLoading, isError, isSuccess } = useArtistQuery(artistName as string);
  const [updateArtist, updateResult] = useUpdateArtistMutation();

  const [editArtistName, setEditArtistName] = React.useState<string>();
  React.useEffect(() => {
    if (artist) {
      console.log('ArtistPage', 'isLoading', isLoading);
      console.log('ArtistPage', 'isError', isError);
      console.log('ArtistPage', 'isSuccess', isSuccess);
      console.log('ArtistPage', 'artist', artist);
      setEditArtistName(artist.name);
    }
  }, [artist, isLoading, isError, isSuccess]);
  const _renderLoading = () => <div>Loading.....</div>;
  const _renderError = () => <div>Error loading.....</div>;
  const _renderArtist = (artist: Artist) => {
    return (
      <div>
        <div className="container flex flex-col items-start justify-between px-6 py-6 pb-4 mx-auto my-1 mb-0 bg-white border-b border-gray-300 rounded-t lg:my-2 lg:flex-row lg:items-center">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-gray-800">
              <InlineEdit
                defaultValue={editArtistName}
                editView={({ errorMessage, ...fieldProps }) => (
                  <Textfield {...fieldProps} autoFocus />
                )}
                readView={() => <div data-testid="read-view">{editArtistName || ''}</div>}
                onConfirm={(value: string) => {
                  if (value && value != artistName) {
                    setEditArtistName(value);
                    updateArtist({ id: artist.id, name: value })
                      .unwrap()
                      .then((payload) => {
                        toast.success('Artist updated!', {
                          position: 'top-right',
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        });
                      })
                      .catch((error) => {
                        console.error('ArtistPage', 'updateArtist', error);
                        toast.error('💩 Failed to update artist!', {
                          position: 'top-right',
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        });
                      });
                  }
                }}
              />
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
        <div className="container px-2 mx-auto">
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
