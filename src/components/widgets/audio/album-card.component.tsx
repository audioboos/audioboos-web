import React from 'react';
import { Album } from '../../../models';
import { ImageWithFallback } from '../../widgets';
import { Images } from '../../../services';
interface IAlbumCardProps {
  album: Album;
}
const AlbumCard = ({ album }: IAlbumCardProps) => {
  return (
    <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
      <ImageWithFallback
        className="object-cover w-full max-h-40"
        src={album.largeImage}
        alt="Album"
        fallback={Images.DefaultAlbum}
      />
      <div className="w-full p-4 bg-white dark:bg-gray-800">
        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">{album.name}</p>
        <p className="font-light text-gray-400 dark:text-gray-300 text-md">{album.description}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
