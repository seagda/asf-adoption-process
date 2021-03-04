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

export default function DogProfileView(){
    const classes = useStyles();

    let {id} = useParams();
    console.log(id)

    const [dogData, setDogData] = useState({MicrochipMfg:{}, DogStatus:{}, DogPhotos: [], origin: {Region: {}, Address: {}}})
    useEffect(()=>{
        API.getSingleDogData(id).then(res =>{
            console.log(res.data)
            setDogData(res.data)
        }).catch(err=>{
            console.error(err.response.data.message)
            alert("get data failed")
        })
    },[])

    return(
        <Grid container className={classes.mainContainer}>
            <Grid item style={{marginBottom: "3em"}}>
                <Typography variant="h4" color="primary">{dogData.name}'s details</Typography>
                <Divider/>
            </Grid>
            <DogBlockView name={dogData.name} dob={dogData.dob} gender={dogData.gender} size={dogData.size} microchipId={dogData.microchipId} asfId={dogData.asfId} microchipName={dogData.MicrochipMfg.name} image={(dogData.DogPhotos.find((photo)=> photo.profilePhoto)||{}).url}/>

            {dogData.canEdit ? <DogProfileActions/> : null}

            <DogBreedView coat={dogData.coat} weight={dogData.weight} purebred={dogData.isPurebred} secondary={dogData.secondaryBreed}/>
            <DogOriginView originName={dogData.origin.fullName} originRegion={dogData.origin.Region.name} originStreet={dogData.origin.Address.street} originCity={dogData.origin.Address.city} originState={dogData.origin.Address.state} originZip={dogData.origin.Address.zip5} originPhone={dogData.origin.phone} pullCost={dogData.pullCost}/>

            <DogInfoCurrent currentlyWith={dogData.currentlyWith} behaviorIssues={dogData.behaviorIssues} medicalIssues={dogData.medicalIssues}/>
        </Grid>
    )
}