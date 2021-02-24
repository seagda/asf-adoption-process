import React, {useState} from "react";
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import ResponsiveDrawer from "../src/components/Header" 

export default function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <ResponsiveDrawer/>
            </BrowserRouter>
        </ThemeProvider>
    )
}
