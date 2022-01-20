import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Artist } from '../../../models';
import { useArtistsQuery } from '../../../store/redux/api';

function ArtistsList() {
  const queryResult = useArtistsQuery();
  const _renderArtists = (artists: Artist[]) => {
    return (
      <ul className="flex flex-col list-none md:flex-col md:min-w-full">
        {artists.map((artist) => {
          return (
            <li className="items-center" key={artist.id}>
              <Link
                className={
                  'text-xs uppercase py-3 font-bold block ' +
                  (window.location.href.indexOf('/admin/dashboard') !== -1
                    ? 'text-sky-500 hover:text-sky-600'
                    : 'text-blueGray-700 hover:text-blueGray-500')
                }
                to={`/artist/${artist.name}`}
              >
                <img
                  src={artist.smallImage}
                  alt={artist.name}
                  className="inline object-cover w-8 h-8 mr-2 text-sm rounded-full "
                />
                {artist.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };
  const _renderLoading = () => <div>Loading.....</div>;
  const _renderError = () => <div>Error loading.....</div>;

  return (
    <div className="overflow-y-auto">
      {queryResult.isLoading && _renderLoading()}
      {queryResult.isError && _renderError()}
      {queryResult.isSuccess && _renderArtists(queryResult.data || [])}
    </div>
  );
}

export default ArtistsList;
