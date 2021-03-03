import React, {useState} from "react";
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import theme from "../src/components/Theme";
import ResponsiveDrawer from "../src/components/Header"; 
// import DogDossier from "../src/pages/DogDossier"
import DogDossiersAll from "../src/pages/DogDossiersAll"
import Login from "../src/pages/Login"
import CreateUser from "../src/pages/CreateUser";
import Application from "./pages/Application";
import MyProfile from "./pages/MyProfile";
// import MyDogs from "./pages/MyDogs";
import ManageASFUsers from "./pages/ManageASFUsers";
// import ASFSettings from "./pages/ASFSettings";
import EditProfile from "./pages/EditProfile";
// import AdminDashboard from "./pages/AdminDashboard";
import FosterDashboard from "./pages/FosterDashboard";
import DogProfileView from "./pages/DogProfileView";
import DogProfileEdit from "./pages/DogProfileEdit";
import DashboardMain from "./pages/DashboardMain";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

export default function App() {
    const admin = true;

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <ResponsiveDrawer/>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/My-Profile"><MyProfile/></Route>
                    <Route path="/My-Dashboard"><FosterDashboard/></Route>
                    <Route path="/Settings"><Settings/></Route>
                    <Route path="/Logout" />
                    <Route path="/Dog-Dossiers"><DogDossiersAll /></Route>
                    <Route path="/Manage-ASF-Users"><ManageASFUsers/></Route>
                    {/* <Route path="/ASF-Settings"><ASFSettings/></Route> */}
                    <Route path="/editprofile"><EditProfile/></Route>
                    <Route path="/application"><Application/></Route>
                    {/* <Route path="/Admin-Dashboard"><AdminDashboard/></Route> */}
                    {/* <Route path="/Foster-Dashboard"><FosterDashboard/></Route> */}
                    <Route path="/createUser"><CreateUser/></Route>
                    <Route path="/dogView"><DogProfileView/></Route>
                    <Route path="/createdog"><DogProfileEdit/></Route>
                    <Route path="/signin"><Login /></Route>
                    <Route path="/signup"><SignUp/></Route>
                    <Route path="/signup"><SignUp/></Route>
                    <Route path="/ASF-Admin-Settings"><DashboardMain/></Route>
                    <Route path="/My-Settings"><Settings/></Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}
