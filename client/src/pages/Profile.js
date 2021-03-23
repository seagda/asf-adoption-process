import React, { useState, useEffect } from "react";
import { Route, Switch, useParams } from "react-router-dom";
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
            alert("get data failed")
        });
    }

    return (
        <Switch>
            <Route path="/user/:id/edit"><EditProfile id={id} userData={userData} photoUrl={photoUrl} reload={loadData} /></Route>
            <Route><UserProfileView id={id} userData={userData} photoUrl={photoUrl} /></Route>
        </Switch>
    );
}