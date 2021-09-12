import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse,
    Container,
    Grid,
    IconButton, Paper
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumTrackList from "../components/widgets/AlbumTrackList";
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

    return (
        <React.Fragment>
            {artistName && (
                <React.Fragment>
                    <Container maxWidth="xl">
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper>
                                    <AlbumTrackList album={album} />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3}>
                                <Card>
                                    <CardHeader
                                        avatar={
                                            <Avatar
                                                aria-label="recipe"
                                            >
                                                R
                                            </Avatar>
                                        }
                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title={artistName}
                                        subheader={albumName}
                                    />
                                    <CardMedia
                                        image={
                                            album?.largeImage ||
                                            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                                        }
                                        title={albumName}
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            {album?.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </CardActions>
                                    <Collapse
                                        in={expanded}
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        <CardContent>
                                            <Typography paragraph>
                                                Method:
                                            </Typography>
                                            <Typography paragraph>
                                                Heat 1/2 cup of the broth in a
                                                pot until simmering, add saffron
                                                and set aside for 10 minutes.
                                            </Typography>
                                            <Typography paragraph>
                                                Heat oil in a (14- to 16-inch)
                                                paella pan or a large, deep
                                                skillet over medium-high heat.
                                                Add chicken, shrimp and chorizo,
                                                and cook, stirring occasionally
                                                until lightly browned, 6 to 8
                                                minutes. Transfer shrimp to a
                                                large plate and set aside,
                                                leaving chicken and chorizo in
                                                the pan. Add pimentón, bay
                                                leaves, garlic, tomatoes, onion,
                                                salt and pepper, and cook,
                                                stirring often until thickened
                                                and fragrant, about 10 minutes.
                                                Add saffron broth and remaining
                                                4 1/2 cups chicken broth; bring
                                                to a boil.
                                            </Typography>
                                            <Typography paragraph>
                                                Add rice and stir very gently to
                                                distribute. Top with artichokes
                                                and peppers, and cook without
                                                stirring, until most of the
                                                liquid is absorbed, 15 to 18
                                                minutes. Reduce heat to
                                                medium-low, add reserved shrimp
                                                and mussels, tucking them down
                                                into the rice, and cook again
                                                without stirring, until mussels
                                                have opened and rice is just
                                                tender, 5 to 7 minutes more.
                                                (Discard any mussels that don’t
                                                open.)
                                            </Typography>
                                            <Typography>
                                                Set aside off of the heat to let
                                                rest for 10 minutes, and then
                                                serve.
                                            </Typography>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};
export default AlbumPage;
