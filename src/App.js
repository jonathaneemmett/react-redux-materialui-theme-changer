import React from 'react';
import {connect} from "react-redux";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";

// Components
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";

// Styles
import {useStyles} from "./css/styles";


function App({theme: {theme}}) {
  const classes = useStyles();
  const {currentTheme} = theme;

  return (
    <MuiThemeProvider theme={createMuiTheme(currentTheme)}>
      <div className={classes.root}>
        <CssBaseline/>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme
})

export default connect(mapStateToProps)(App);
