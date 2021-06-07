import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {loadTheme} from "../../actions/themeActions";
import {AppBar, Button, Container, CssBaseline, IconButton, Toolbar, Typography} from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';

// Styles
import {useStyles} from "../../css/styles";

const Navbar = ({theme: {theme}, loadTheme }) => {
    const classes = useStyles();

    /**
     * @desc    load new theme after click
     * @param   current
     */
    const onClick = (current) => {
        loadTheme(current);
    }

    return (
        <AppBar position="fixed">
            <CssBaseline/>
            <Container>
                <Toolbar>
                    <IconButton edge="start" className={classes.links} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.links}>
                            Theme Changer
                        </Link>
                    </Typography>
                    <Button onClick={() => onClick(theme.name)}>
                        <SettingsBrightnessIcon color={"secondary"} />
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

const mapStateToProps = (state) => ({
    theme: state.theme
})


export default connect(mapStateToProps, {loadTheme})(Navbar);