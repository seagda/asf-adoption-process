import React, {useState} from "react";
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import theme from "../src/components/Theme";
import ResponsiveDrawer from "../src/components/Header"; 
import DogDossiersAll from "../src/pages/DogDossiersAll"
import Login from "../src/pages/Login"
import CreateUser from "../src/pages/CreateUser";
import AdopterApplication from "./pages/AdopterApplication";
import MyProfile from "./pages/MyProfile";
import ManageASFUsers from "./pages/ManageASFUsers";
import EditProfile from "./pages/EditProfile";
import DogProfileView from "./pages/DogProfileView";
import DogProfileCreate from "./pages/DogProfileCreate";
import DashboardMain from "./pages/DashboardMain";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import FosterApplication from "./pages/FosterApplication";
import DogProfileEdit from "./pages/DogProfileEdit";
import BehaviorAssessment from "./pages/BehaviorAssessment";
import UserProfileView from "./pages/UserProfileView";

export default function App() {
    const admin = true;
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <ResponsiveDrawer/>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/My-Profile"><MyProfile/></Route>
                    <Route path="/My-Dashboard"><DashboardMain/></Route>
                    <Route path="/Settings"><Settings/></Route>
                    <Route path="/Logout" />
                    <Route path="/Dog-Dossiers"><DogDossiersAll /></Route>
                    <Route path="/Manage-ASF-Users"><ManageASFUsers/></Route>
                    <Route path="/editprofile"><EditProfile/></Route>
                    <Route path="/adopterApplication"><AdopterApplication/></Route>
                    <Route path="/fosterApplication"><FosterApplication/></Route>
                    <Route path="/createUser"><CreateUser/></Route>
                    <Route path="/dogView/:id"><DogProfileView/></Route>
                    <Route path="/viewDog"><p style={{fontSize: 100}}>THE PATH IS DOGVIEW</p></Route>
                    <Route path="/createdog"><DogProfileCreate/></Route>
                    <Route path="/signin"><Login /></Route>
                    <Route path="/signup"><SignUp/></Route>
                    <Route path="/editDog/:id"><DogProfileEdit/></Route>
                    <Route path="/behavior/:id"><BehaviorAssessment/></Route>
                    <Route path="/userView/:id"><UserProfileView/></Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}
