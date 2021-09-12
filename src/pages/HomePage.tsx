import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { MainCard } from "../components/widgets";

const HomePage = () => {
    return (
        <React.Fragment>
            <MainCard title="Sample Card">
                <Typography variant="body2">
                    Lorem ipsum dolor sit amen, consenter nipissing eli, sed do
                    elusion tempos incident ut laborers et doolie magna alissa.
                    Ut enif ad minim venice, quin nostrum exercitation illampu
                    laborings nisi ut liquid ex ea commons construal. Duos aube
                    grue dolor in reprehended in voltage veil esse colum doolie
                    eu fujian bulla parian. Exceptive sin ocean cuspidate non
                    president, sunk in culpa qui officiate descent molls anim id
                    est labours.
                </Typography>
                <Link to="/artists">Artists</Link>
            </MainCard>
        </React.Fragment>
    );
};
export default HomePage;
