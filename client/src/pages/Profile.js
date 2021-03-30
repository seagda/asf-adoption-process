import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch, useParams } from "react-router-dom";
import UserProfileView from "../pages/UserProfileView";
import EditProfile from "../pages/EditProfile";
import API from "../utils/API";

export default function Profile() {
    const id = useParams().id || "me";

    const [userData, setUserData] = useState({});
    const [photo, setPhoto] = useState(new Blob());
    const [photoUrl, setPhotoUrl] = useState("");

    useEffect(() => setPhotoUrl(URL.createObjectURL(photo)), [photo]);

    useEffect(loadData, []);

    function loadData() {
        Promise.all([
            API.getSingleUser(id).then(res => {
                setUserData(res.data)
            }),
            API.getProfilePhoto(id).then(res => {
                setPhoto(res.data)
            })
        ]).catch(err => {
            console.error(err.response.data.message)
            // alert("get data failed")
        });
    }

    function submitFunction(userInputData, photoInput, redirect) {
        const promises = [API.updateOtherUser(userInputData, id)];
        if (photoInput.type.startsWith("image")) promises.push(API.setProfilePhoto(photoInput, id));
        Promise.all(promises).then(()=>{
            loadData();
            redirect(`/user/${id}`);
        }).catch(err=>{
            console.error(err.response.data.message)
        });
    }

    return (
        <Switch>
            <Route path="/user/:id/edit"><EditProfile userData={userData} photo={photo} submitFunction={submitFunction} /></Route>
            <Route><UserProfileView id={id} userData={userData} photoUrl={photoUrl} /></Route>
        </Switch>
    );
}