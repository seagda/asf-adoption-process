import React, {useState, useEffect, createRef} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useParams, Redirect} from "react-router-dom";

import ProfileForm from "../components/ProfileForm";
import API from "../utils/API";


const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(13),
        width: "70%",
        [theme.breakpoints.down("md")]:{
            width: "80%"
        },
        [theme.breakpoints.down("sm")]:{
            width: "100%"
        },
        [theme.breakpoints.down("xs")]:{
            spacing: theme.spacing(2),
            marginLeft: 0
        }
    }
}))


export default function EditProfile(props) {
    const classes = useStyles()

    let {id} = useParams();
    const [userInputData, setUserInputData] = useState(props.userData);
    const [editable, setEditable] = useState(props.userData?.editable || []);
    const [photo, setPhoto] = useState(new Blob());
    const [photoInputUrl, setPhotoInputUrl] = useState("");

    useEffect(() => setPhotoInputUrl(URL.createObjectURL(photo)), [photo]);

    const handleInputChange = ({ target: { name, value } }) => {
        let newData;
        if (name.includes(".")) {
            const names = name.split(".")
            newData = {
                ...userInputData,
                [names[0]]: {
                    ...userInputData[names[0]],
                    [names[1]]: value
                }
            }
        } else {
            newData = {
                ...userInputData,
                [name]: value
            }
        }
        setUserInputData(newData)
    }

    const handlePhotoChange = event => {
        setPhoto(event.target.files[0]);
    }

    useEffect(() => {
        (({ editable, ...data }) => {
            setUserInputData(data);
            setEditable(editable);
        })(props.userData);
    }, [props.userData]);
    useEffect(() => setPhotoInputUrl(props.photoUrl), [props.photoUrl]);

    let redirect = null;

    const submitFunction = event =>{
        event.preventDefault();
        Promise.all(id ? [API.updateOtherUser(userInputData, id), API.setProfilePhoto(photo, id)] : [API.updateMyUserData(userInputData), API.setMyProfilePhoto(photo)]).then(res=>{
            setUserInputData({})
            redirect = <Redirect push to={`/user/${id}`} />;
        }).catch(err=>{
            console.error(err.response.data.message)
        })
    }

    return (
        <Grid container className={classes.mainContainer}>
            {redirect}
            <ProfileForm 
            handleInputChange={handleInputChange}
            submitFunction={submitFunction}
            userData={userInputData}
            editable={editable}
            photoUrl={photoInputUrl}
            handlePhotoChange={handlePhotoChange}
            />
        </Grid>
       
    )
}