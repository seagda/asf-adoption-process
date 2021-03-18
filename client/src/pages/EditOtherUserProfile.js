import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useParams} from "react-router-dom";

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


export default function EditOtherUserProfile() {
    const classes = useStyles()

    let {id} = useParams();
    const [userData, setUserData] = useState({})
    const [addressData, setAddressData] = useState({})

    const handleInputChange=({target})=>{
        setUserData({
            ...userData,
            [target.name]: target.value
        })
        setAddressData({
            ...addressData,
            [target.name]: target.value
        })
    }

    useEffect(()=>{
        API.getSingleUser(id).then(res =>{
            // console.log(res.data)
            setUserData(res.data)
            setAddressData(res.data.Address)
            console.log(res.data.Address)
        }).catch(err=>{
            console.error(err.response.data.message)
        })
    }, [])

    const submitFunction = event =>{
        event.preventDefault();
        const userInfo = {
            ...userData,
            ...addressData
        }
        API.updateOtherUser(userInfo, id).then(res=>{
            setUserData({})
            setAddressData({})
            window.location = `/`
        }).catch(err=>{
            console.error(err.response.data.message)
        })
    }

    return (
        <Grid container className={classes.mainContainer}>
            <ProfileForm 
            handleInputChange={handleInputChange} 
            submitFunction={submitFunction} 
            userData={userData} 
            addressData={addressData}
            />
        </Grid>
       
    )
}