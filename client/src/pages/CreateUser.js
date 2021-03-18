import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import ProfileForm from "../components/ProfileForm";
import RoleAssignment from "../components/RoleAssignment";
import API from '../utils/API';


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


export default function CreateUser() {
    const classes = useStyles();

    const [userData, setUserData] = useState({})
    const [addressData, setAddressData] = useState({})

    const handleInputChange = event =>{
        const {name,value} = event.target
        setUserData({
            ...userData,
            [name]: value
        })
        setAddressData({
            ...addressData,
            [name]: value
        })
    }

    const submitFunction = event =>{
        event.preventDefault();
        const newUser = {
            ...userData,
            ...addressData
        }
        API.createUser(newUser).then(res=>{
            setUserData({})
            setAddressData({})
            window.location = `/`
        }).catch(err=>{
            console.error(err.response.data.message)
        })
    }

    return (
        <Grid container className={classes.mainContainer}>
            <ProfileForm userData={userData} addressData={addressData} handleInputChange={handleInputChange} submitFunction={submitFunction}/>
            {/* <RoleAssignment/> */}
        </Grid>
    )
}