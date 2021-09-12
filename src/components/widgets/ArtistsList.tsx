import {
    Avatar, Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Artist } from "../../models";
import audioBoosService from "../../services/api/audiosBooService";

const useStyles = makeStyles((theme: any) => ({
    collapseIcon: {
        fontSize: "1rem",
        marginTop: "auto",
        marginBottom: "auto",
    },
    collapseIconSub: {
        fontSize: "1rem",
        marginTop: "auto",
        marginBottom: "auto",
    },
    menuIcon: {
        marginTop: "auto",
        marginBottom: "auto",
    },
    listIcon: {
        minWidth: "18px",
        width: "32px",
        marginTop: "auto",
        marginBottom: "auto",
    },
    listCustomIconSub: {
        width: "6px",
        height: "6px",
    },
    listCustomIconSubActive: {
        width: "8px",
        height: "8px",
    },
    listItem: {
        marginBottom: "5px",
        alignItems: "flex-start",
    },
    listItemNoBack: {
        marginBottom: "5px",
        backgroundColor: "transparent !important",
        paddingTop: "8px",
        paddingBottom: "8px",
        alignItems: "flex-start",
    },
    subMenuCaption: {
        ...theme.typography.subMenuCaption,
    },
    collapseWrapper: {
        position: "relative",
        "&:after": {
            content: "''",
            position: "absolute",
            left: "32px",
            top: 0,
            height: "100%",
            width: "1px",
            opacity: 1,
            background: theme.palette.primary.light,
        },
    },
}));

function ArtistsList() {
    const classes = useStyles();
    const history = useHistory();
    const [selected, setSelected] = React.useState(null);

    const [artists, setArtists] = useState<Artist[] | undefined>();

    useEffect(() => {
        const loadArtists = async () => {
            const results = await audioBoosService.getArtists();
            setArtists(results);
        };
        loadArtists();
    }, []);

    return (
        <React.Fragment>
            <Collapse in={true} timeout="auto" unmountOnExit>
                <List
                    component="div"
                    disablePadding
                    className={classes.collapseWrapper}
                >
                    <ListSubheader component="div" id="nested-list-subheader">
                        Artists
                    </ListSubheader>
                    {artists?.map((a) => {
                        return (
                            <ListItemButton
                                key={a.id}
                                onClick={() =>
                                    history.push(`/artist/${a.name}`)
                                }
                            >
                                <ListItemIcon>
                                    <Avatar
                                        variant="rounded"
                                        color="inherit"
                                    >
                                        <img
                                            className={classes.listIcon}
                                            src={a.smallImage}
                                            alt="Artist"
                                        />
                                    </Avatar>
                                </ListItemIcon>
                                <ListItemText primary={a.name} />
                            </ListItemButton>
                        );
                    })}
                </List>
            </Collapse>
        </React.Fragment>
    );
}

export default ArtistsList;
