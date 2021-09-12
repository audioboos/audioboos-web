import { Paper, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Home from "@material-ui/icons/Home";
import React from "react";

const NotFoundPage = () => {
    return (
        <Paper>
            <div>
                <Typography variant="h1">F*ck</Typography>
                <Typography variant="subtitle1">I said boo urns...</Typography>
                <Button color="secondary" aria-label="home" href="/">
                    Might as well go <Home />
                </Button>
            </div>
        </Paper>
    );
};

export default NotFoundPage;
