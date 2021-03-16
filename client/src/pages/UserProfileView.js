import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import API from "../utils/API";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";

import ProfileBlock from "../components/ProfileBlock";
import ProfileActions from "../components/ProfileActions";
import CapacityView from "../components/CapacityView";
import Roles from "../components/Roles";

const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(13),
        marginBottom: "5em",
        width: "70%",
        [theme.breakpoints.down("md")]:{
            width: "80%"
        },
        [theme.breakpoints.down("sm")]:{
            width: "80%"
        },
        [theme.breakpoints.down("xs")]:{
            spacing: theme.spacing(2),
            marginLeft: "3.5em"
        }
    }
}))

export default function UserProfileView(){
    const classes = useStyles();

    let {id} = useParams();
    console.log(id)

    const [userData, setUserData] = useState({})
    const [puppiesData, setPuppiesData] = useState(false)
    const [seniorsData, setSeniorsData] = useState(false)
    const [adultsData, setAdultsData] = useState(false)
    const [behaviorData, setBehaviorData] = useState(false)
    const [medicalIssuesData, setMedicalIssuesData] = useState(false)
    const [rolesList, setRolesListData] = useState([])

    useEffect(()=>{
        API.getSingleUser(id).then(res =>{
            console.log(res.data)
            setUserData(res.data)
            setPuppiesData(res.data.puppies)
            setSeniorsData(res.data.seniors)
            setAdultsData(res.data.adults)
            setBehaviorData(res.data.withBehaviorIssues)
            setMedicalIssuesData(res.data.withMedicalIssues)
            setRolesListData(res.data.Roles)
        }).catch(err=>{
            console.error(err)
            // alert("get data failed")
        })
    },[])

    return(
        <Grid container className={classes.mainContainer}>
            <Grid item style={{marginBottom: "3em"}}>
                <Typography variant="h4" color="primary">{userData.firstName}'s details</Typography>
                <Divider/>
            </Grid>

            <ProfileBlock
            image={userData.photoUrl}
            firstName={userData.firstName}
            lastname={userData.lastName}
            phone={userData.phone}
            email={userData.email}
            dob={userData.dob}
            />

            {userData.canEdit ? <ProfileActions id={id}/> : null}

            <Roles
            roles={rolesList.map((role)=><Chip label={role.name}/>)}
            />

            <CapacityView style={{marginBottom: "5em"}} 
            maxCapacity={userData.maxCapacity} 
            puppies={puppiesData} 
            seniors={seniorsData} 
            adults={adultsData} 
            behavior={behaviorData} 
            medical={medicalIssuesData}
            />

        </Grid>
    )
}