import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Artist } from '../../../models';
import { useArtistsQuery } from '../../../store/redux/api';

function ArtistsList() {
  const queryResult = useArtistsQuery();
  const _renderArtists = (artists: Artist[]) => {
    return (
      <ul className="flex flex-col list-none md:flex-col md:min-w-full">
        {artists.map((a) => {
          return (
            <li className="flex flex-row justify-between">
              <Link
                className={
                  'text-xs uppercase py-3 font-bold block ' +
                  (window.location.href.indexOf('/admin/dashboard') !== -1
                    ? 'text-lightBlue-500 hover:text-lightBlue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500')
                }
                to={`/artist/${a.name}`}
              >
                <img
                  src={a.smallImage}
                  alt={a.name}
                  className="inline object-cover w-8 h-8 mr-2 text-sm rounded-full "
                />
                {a.name}
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
