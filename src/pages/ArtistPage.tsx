import React from "react";
import { useParams } from "react-router-dom";
import { AlbumsList, MainCard } from "../components/widgets";

interface ParamTypes {
    artistName: string;
}

const ArtistPage = () => {
    const { artistName } = useParams<ParamTypes>();
    return (
        <React.Fragment>
            <MainCard title={artistName}>
                <AlbumsList artistName={artistName} />
            </MainCard>
        </React.Fragment>
    );
};
export default ArtistPage;
