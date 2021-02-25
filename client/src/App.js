import React, {useState} from "react";
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import theme from "../src/components/Theme";
import ResponsiveDrawer from "../src/components/Header"; 
import DogDossier from "../src/pages/DogDossier"
import DogDossiersAll from "../src/pages/DogDossiersAll"
import CreateUser from "../src/pages/CreateUser";
import Question from "./pages/Question";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <ResponsiveDrawer/>
                <Switch>
                    <Route exact path="/" />
                    <Route path="/My-Profile" />
                    <Route path="/My-Dogs" />
                    <Route path="/Settings" />
                    <Route path="/Logout" />
                    <Route path="/Dog-Dossiers"><DogDossiersAll /></Route>
                    <Route path="/Manage-ASF-Users" />
                    <Route path="/ASF-Settings" />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}
