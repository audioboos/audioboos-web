import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import Image from "material-ui-image";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Album } from "../../models";
import audioBoosService from "../../services/api/audiosBooService";

interface IAlbumsListProps {
    artistName: string;
}

function AlbumsList({ artistName }: IAlbumsListProps) {
    const history = useHistory();
    const [albums, setAlbums] = useState<Album[] | undefined>();
    useEffect(() => {
        const loadArtists = async () => {
            const results = await audioBoosService.getAlbums(artistName);
            setAlbums(results);
        };
        loadArtists();
    }, [artistName]);
    return (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Title</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {albums?.map((a) => (
                            <TableRow
                                hover
                                key={a.id}
                                onClick={() =>
                                    history.push(
                                        `/artist/${artistName}/${a.name}`
                                    )
                                }
                            >
                                <TableCell component="th" scope="row">
                                    {a.smallImage && (
                                        <Image
                                            style={{
                                                paddingTop: 0,
                                                width: 32,
                                                height: 32,
                                            }}
                                            src={a.smallImage}
                                            disableSpinner
                                        />
                                    )}
                                </TableCell>
                                <TableCell>{a.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}

export default AlbumsList;
