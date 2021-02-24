import React, {useState} from "react";
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import theme from "../src/components/Theme";
import ResponsiveDrawer from "../src/components/Header"; 
import DogDossier from "../src/pages/DogDossier"
import DogDossiersAll from "../src/pages/DogDossiersAll"

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <ResponsiveDrawer/>
                <Switch>
                    <Route path="/" />
                    <Route path="/My Profile" />
                    <Route path="/My Dogs" />
                    <Route path="/Settings" />
                    <Route path="/Logout" />
                    <Route exact path="/Dog-Dossiers" render={ () => <DogDossier />} />
                    <Route path="/Manage ASF Users" />
                    <Route path="/ASF Settings" />
                </Switch>
                <DogDossiersAll />
            </BrowserRouter>
        </ThemeProvider>
    )
}
