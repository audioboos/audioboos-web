import React from 'react';
import { Artist } from '../../../models';

interface IArtistStatsProps {
  artist: Artist;
}
const ArtistStats = ({ artist }: IArtistStatsProps) => {
  return (
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
        <span>Released: 29 Jan 2020</span>
      </li>
    </ul>
  );
};

export default ArtistStats;
