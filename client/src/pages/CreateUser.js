import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import ProfileForm from "../components/ProfileForm";
import RoleAssignment from "../components/RoleAssignment";
import API from '../utils/API';
import EditProfile from './EditProfile';

export default function CreateUser() {
    const submitFunction = (userInputData, photoInput, redirect) => {
        API.createUser(userInputData).then(res=>{
            if (photoInput.type.startsWith("image")) return Promise.all([res.data.id, API.setProfilePhoto(photoInput, res.data.id)]);
            return [res.data.id];
        }).then(([id]) => redirect(`/user/${id}`)).catch(err=>{
            console.error(err.response.data.message)
        });
    }

    return (
        <EditProfile userData={{ editable: ["*"] }} photo={new Blob()} submitFunction={submitFunction} />
    )
}