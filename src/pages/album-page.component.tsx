import React from 'react';
import { MdModeEdit, MdPlayArrow, MdPlaylistPlay } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AlbumCard, IconButton } from '../components/widgets';
import EditAlbumDialog from '../components/widgets/audio/EditAlbumDialog';
import TrackList from '../components/widgets/audio/TrackList';
import InlineEdit from '@atlaskit/inline-edit';
import { Album, Artist } from '../models';
import {
  useArtistQuery,
  useUpdateAlbumMutation,
  useUpdateArtistMutation,
} from '../store/redux/api';
import { addAllToQueue, clearQueue, INowPlaying, setNowPlaying } from '../store/redux/audio';
import Textfield from '@atlaskit/textfield';
import { toast } from 'react-toastify';

const AlbumPage = () => {
  const { artistName, albumName } = useParams();
  const [editing, setEditing] = React.useState(false);
  const [album, setAlbum] = React.useState<Album>();
  const { data: artist, isLoading, isError, isSuccess } = useArtistQuery(artistName as string);
  const [updateAlbum, updateResult] = useUpdateAlbumMutation();
  const [editAlbumName, setEditAlbumName] = React.useState<string>();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (artist) {
      console.log('AlbumPage', 'isLoading', isLoading);
      console.log('AlbumPage', 'isError', isError);
      console.log('AlbumPage', 'isSuccess', isSuccess);
      console.log('AlbumPage', 'artist', artist);
      const album = artist.albums.find((a) => a.name === albumName);
      if (album && album.name) {
        setAlbum(album);
        setEditAlbumName(album.name);
      }
    }
  }, [artist, isLoading, isError, isSuccess]);
  const _playAll = () => {
    dispatch(clearQueue());
    _addAllToQueue(true);
  };

  const _addAllToQueue = (playFirst: boolean = false) => {
    const tracks = album?.tracks?.map((t) => {
      return {
        album: album,
        artist: artist,
        track: t,
      } as INowPlaying;
    });
    if (tracks && tracks.length >= 0) {
      dispatch(addAllToQueue(tracks));
      if (playFirst) {
        dispatch(setNowPlaying(tracks[0]));
      }
    }
  };
  const _renderLoading = () => <div>Loading.....</div>;
  const _renderError = () => <div>Error loading.....</div>;
  const _renderAlbumPage = () => (
    <React.Fragment>
      <div className="overflow-x-hidden">
        <EditAlbumDialog isOpen={editing} setOpen={setEditing} album={album} />

        <div className="container flex flex-col items-start justify-between px-6 py-6 pb-4 mx-auto my-1 mb-0 bg-white border-b border-gray-300 rounded-t lg:my-2 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-bold leading-tight text-gray-800">{artist?.name}</h2>
            <h4 className="text-xl font-bold leading-tight text-gray-600">
              <InlineEdit
                defaultValue={editAlbumName}
                editView={({ errorMessage, ...fieldProps }) => (
                  <Textfield {...fieldProps} autoFocus />
                )}
                readView={() => <div data-testid="read-view">{editAlbumName || ''}</div>}
                onConfirm={(value: string) => {
                  if (value && value != album?.name) {
                    setEditAlbumName(value);
                    updateAlbum({ id: album?.id, name: value })
                      .unwrap()
                      .then((payload) => {
                        toast.success('💩 Artist updated!', {
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
            <ul className="flex flex-col items-start mt-3 text-sm text-gray-600 md:flex-row md:items-center">
              <li className="flex items-center mt-3 mr-3 md:mt-0">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-paperclip"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5" />
                  </svg>
                </span>
                <span>Active</span>
              </li>
              <li className="flex items-center mt-3 mr-3 md:mt-0">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-trending-up"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="3 17 9 11 13 15 21 7" />
                    <polyline points="14 7 21 7 21 14" />
                  </svg>
                </span>
                <span> Trending</span>
              </li>
              <li className="flex items-center mt-3 md:mt-0">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-plane-departure"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path
                      d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z"
                      transform="rotate(-15 12 12) translate(0 -1)"
                    />
                    <line x1={3} y1={21} x2={21} y2={21} />
                  </svg>
                </span>
                <span>Released {album?.releaseDate}</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-row mt-2 space-x-1 lg:-mt-4">
            <IconButton
              text={'Play'}
              iconRight={false}
              fullWidth={false}
              onClick={() => _playAll()}
            >
              <MdPlayArrow className="w-5 h-5 mr-1 text-white" />
            </IconButton>
            <IconButton
              text={'Queue'}
              iconRight={false}
              fullWidth={false}
              onClick={() => _addAllToQueue()}
            >
              <MdPlaylistPlay className="w-5 h-5 mr-1 text-white" />
            </IconButton>
            <IconButton
              text={'Edit'}
              iconRight={false}
              fullWidth={false}
              onClick={() => setEditing(true)}
            >
              <MdModeEdit className="w-5 h-5 mr-1 text-white" />
            </IconButton>
          </div>
        </div>
        {/* Page title ends */}
        {artist && album && (
          <div className="container px-2 mx-auto">
            <div className="w-full">
              <div className="flex flex-col space-x-3 md:flex-row">
                <div className="container flex flex-col items-center w-full mx-auto rounded-lg shadow">
                  <TrackList artist={artist} album={album} />
                </div>
                <div className="hidden md:block">
                  <AlbumCard album={album} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      {isLoading && _renderLoading()}
      {isError && _renderError()}
      {isSuccess && album && _renderAlbumPage()}
    </React.Fragment>
  );
};
export default AlbumPage;
