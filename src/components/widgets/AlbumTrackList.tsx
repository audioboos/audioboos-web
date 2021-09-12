import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import React from "react";
import { Album } from "../../models";

interface IAlbumTrackListProps {
    album?: Album;
}

const AlbumTrackList = ({ album }: IAlbumTrackListProps) => {
    return (
        <React.Fragment>
            {album && album.tracks && (
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Title</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {album.tracks.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.trackNumber}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {/* <AudioPlayer
                                            useStyles={useStyles}
                                            rounded={true}
                                            elevation={100}
                                            width="100%"
                                            volume={false}
                                            variation="secondary"
                                            spacing={3}
                                            download={false}
                                            autoplay={false}
                                            order="standart"
                                            loop={false}
                                            src={row.audioUrl}
                                        /> */}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </React.Fragment>
    );
};

export default AlbumTrackList;
