import React, {useState} from "react";
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import theme from "../src/components/Theme";
import ResponsiveDrawer from "../src/components/Header"; 
import DogDossiersAll from "../src/pages/DogDossiersAll"
import Login from "../src/pages/Login"
import CreateUser from "../src/pages/CreateUser";
import AdopterApplication from "./pages/AdopterApplication";
import ViewASFUsers from "./pages/ViewASFUsers";
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
import DogDossierDocs from "./pages/DogDossierDocs";
import UserProfileView from "./pages/UserProfileView";
import Profile from "./pages/Profile";
import AppAnswersAdopt from "./pages/AppAnswersAdopt";
import AppAnswersFoster from "./pages/AppAnswersFoster";
import BehaveAssessAnswers from "./pages/BehavAssessAnswers";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <ResponsiveDrawer/>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Redirect from="/My-Profile" to="/user/me" />
                    <Route path="/My-Dashboard"><DashboardMain/></Route>
                    <Route path="/Settings"><Settings/></Route>
                    <Route path="/Logout" />
                    <Route path="/Dog-Dossiers"><DogDossiersAll /></Route>
                    <Route path="/View-ASF-Users"><ViewASFUsers/></Route>
                    <Redirect from="/editprofile" to="/user/me/edit" />
                    <Route path="/adopterApplication"><AdopterApplication/></Route>
                    <Route path="/fosterApplication"><FosterApplication/></Route>
                    <Route path="/createUser"><CreateUser/></Route>
                    <Route path="/dogView/:id"><DogProfileView/></Route>
                    <Redirect from="/viewDog/:id" to="/dogView/:id" />
                    <Route path="/createdog"><DogProfileCreate/></Route>
                    <Route path="/signin"><Login /></Route>
                    <Route path="/signup"><SignUp/></Route>
                    <Route path="/editDog/:id"><DogProfileEdit/></Route>
                    <Route path="/behavior/:id"><BehaviorAssessment/></Route>
                    <Route path="/dogDocument/:id"><DogDossierDocs/></Route>
                    <Route path="/user/:id"><Profile/></Route>
                    <Redirect from="/userView/:id" to="/user/:id" />
                    <Redirect from="/editOtherUser/:id" to="/user/:id/edit" />
                    <Route path="/appAnswersAdopt"><AppAnswersAdopt/></Route>
                    <Route path="/appAnswersFoster"><AppAnswersFoster/></Route>
                    <Route path="/behaveAnswers/:id"><BehaveAssessAnswers/></Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}
