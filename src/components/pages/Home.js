import React, {Fragment} from 'react';
import {Container} from "@material-ui/core";

// Styles
import {useStyles} from "../../css/styles";

const Home = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Container component="div" className={classes.container}>

            </Container>
        </Fragment>
    );
};

export default Home;