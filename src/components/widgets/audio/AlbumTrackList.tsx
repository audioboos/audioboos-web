import React from "react";
import { Album } from "../../../models";

interface IAlbumTrackListProps {
    album?: Album;
}

const AlbumTrackList = ({ album }: IAlbumTrackListProps) => {
    return (
        <React.Fragment>
            {album && album.tracks && <div>List of album tracks</div>}
        </React.Fragment>
    );
};

export default AlbumTrackList;
