import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback, MiniActionButton } from '..';
import { Album, Artist } from '../../../models';
import { Images } from '../../../services';
import audioBoosService from '../../../services/api/audiosBooService';

interface IAlbumsListProps {
  artist: Artist;
}

function AlbumsList({ artist }: IAlbumsListProps) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <table className="w-full whitespace-nowrap">
        <thead className="hidden">
          <tr className="w-full h-16 text-sm leading-none text-gray-800">
            <th className="pl-4 font-normal text-left">Title</th>
            <th className="pl-12 font-normal text-left">Released</th>
            <th className="pl-12 font-normal text-left">Play count</th>
            <th className="pl-16 font-normal text-left"></th>
          </tr>
        </thead>
        <tbody className="w-full">
          {artist.albums?.map((album: Album) => {
            return (
              <tr
                key={album.id}
                onClick={() => navigate(`/artist/${artist.name}/${album.name}`)}
                className="h-20 text-sm leading-none text-gray-800 bg-white border-t border-b border-gray-100 cursor-pointer hover:bg-gray-100"
              >
                <td className="pl-4 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <ImageWithFallback
                        className="w-full h-full"
                        src={album.smallImage}
                        alt="Album"
                        fallback={Images.DefaultAlbum}
                      />
                    </div>
                    <div className="pl-4">
                      <p className="font-semibold text-gray-700 uppercase">{album.name}</p>
                      <p className="pt-2 text-xs leading-3 text-gray-600">{album.description}</p>
                    </div>
                  </div>
                </td>
                <td className="pl-12">
                  <p className="text-sm font-medium leading-none text-gray-800">
                    {album.releaseDate.year}
                  </p>
                </td>
                <td className="pl-12">
                  <p className="font-medium">32/47</p>
                  <p className="mt-2 text-xs leading-3 text-gray-600">5 tasks pending</p>
                </td>
                <td className="pl-16">
                  <div className="flex items-center space-x-3">
                    <MiniActionButton
                      tooltip="Refresh Album"
                      onClick={() => alert('How refreshing')}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </MiniActionButton>
                    <MiniActionButton tooltip="Edit Album" onClick={() => alert('How editing')}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </MiniActionButton>
                    <MiniActionButton tooltip="Delete Album" onClick={() => alert('How deleting')}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </MiniActionButton>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default AlbumsList;
