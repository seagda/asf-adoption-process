import React, {useState, useEffect, createRef} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';

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

    const [redirect, setRedirect] = useState();
    const [userInputData, setUserInputData] = useState(props.userData);
    const [editable, setEditable] = useState(props.userData?.editable || []);
    const [photoInput, setPhotoInput] = useState(new Blob());
    const [photoInputUrl, setPhotoInputUrl] = useState("");

    useEffect(() => setPhotoInputUrl(URL.createObjectURL(photoInput)), [photoInput]);

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
        setPhotoInput(event.target.files[0]);
    }

    useEffect(() => {
        (({ editable, ...data }) => {
            setUserInputData(data);
            setEditable(editable || []);
        })(props.userData);
    }, [props.userData]);
    useEffect(() => setPhotoInput(props.photo), [props.photo]);

    const submitFunction = event => {
        event.preventDefault();
        props.submitFunction(userInputData, photoInput, url => setRedirect(<Redirect push to={url} />));
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