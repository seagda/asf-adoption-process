import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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


export default function EditProfile() {
    const classes = useStyles()

    const [userData, setUserData] = useState({})
    useEffect(()=>{
        API.getMyUserData().then(res =>{
            console.log(res.data)
            setUserData(res.data)
            // setUserIntakeData()
            // setIsActiveData({active: res.data.active})
        }).catch(err=>{
            console.error(err.response.data.message)
            alert("get data failed")
        })
    }, [])

    return (
        <Grid container className={classes.mainContainer}>
            <ProfileForm userData={userData}/>
        </Grid>
       
    )
}