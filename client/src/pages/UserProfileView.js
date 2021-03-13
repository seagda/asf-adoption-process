import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import API from "../utils/API";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import DogBlockView from "../components/DogBlockView";
import DogProfileActions from "../components/DogProfileActions";
import DogBreedView from "../components/DogBreedView";
import DogOriginView from "../components/DogOriginView";
import DogInfoCurrent from "../components/DogInfoCurrent";
import ProfileBlock from "../components/ProfileBlock";

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

    // const [dogData, setDogData] = useState({
    //     MicrochipMfg:{}, 
    //     DogStatus:{}, 
    //     DogPhotos: [], 
    //     origin: {Region: {}, Address: {}}
    // })

    const [userData, setUserData] = useState({})

    useEffect(()=>{
        API.getSingleUser(id).then(res =>{
            console.log(res.data)
            setUserData(res.data)
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

            {/* <DogBlockView 
            name={dogData.name} 
            dob={dogData.dob} 
            gender={dogData.gender} 
            size={dogData.size} 
            mfgCompany={dogData.MicrochipMfg.name}
            microchipId={dogData.microchipId} 
            asfId={dogData.asfId} 
            // microchipName={dogData.MicrochipMfg.name} 
            image={(dogData.DogPhotos.find((photo)=> photo.profilePhoto)||{}).url}/> */}

            {/* {dogData.canEdit ? <DogProfileActions id={id}/> : null} */}
{/* 
            <DogBreedView 
            coat={dogData.coat} 
            weight={dogData.weight} 
            purebred={dogData.isPurebred} 
            secondary={dogData.secondaryBreed}/> */}

            {/* <DogOriginView 
            originName={dogData.origin.fullName} 
            originRegion={dogData.origin.Region.name} 
            originStreet={dogData.origin.Address.street} 
            originCity={dogData.origin.Address.city} 
            originState={dogData.origin.Address.state} 
            originZip={dogData.origin.Address.zip5} 
            originPhone={dogData.origin.phone} 
            pullCost={dogData.pullCost}/> */}

            {/* <DogInfoCurrent 
            currentlyWith={dogData.currentlyWith} 
            behaviorIssues={dogData.behaviorIssues} 
            medicalIssues={dogData.medicalIssues} 
            blocked={dogData.blocked}/> */}
        </Grid>
    )
}