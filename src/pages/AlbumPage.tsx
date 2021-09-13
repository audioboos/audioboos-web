import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Album } from "../models";
import audioBoosService from "../services/api/audiosBooService";

interface ParamTypes {
    artistName: string;
    albumName: string;
}
const AlbumPage = () => {
    const { artistName, albumName } = useParams<ParamTypes>();
    const [album, setAlbum] = useState<Album | undefined>();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        const loadArtists = async () => {
            const results = await audioBoosService.getAlbum(
                artistName,
                albumName
            );
            setAlbum(results);
        };
        loadArtists();
    }, [artistName, albumName]);

    return <React.Fragment>I am album page</React.Fragment>;
};
export default AlbumPage;
