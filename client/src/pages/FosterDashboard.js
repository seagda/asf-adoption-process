import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useState, useEffect } from "react";
import QuickActionsFoster from "../components/QuickActionsFoster";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AvatarList from '../components/AvatarList';
import BasicList from '../components/BasicList';
import MediaCard from '../components/MediaCard';
// import DogAPI from '../utils/Dogs';
import AlertAPI from '../utils/Alerts';
import API from '../utils/API';
import TeamAPI from '../utils/Team';
import ListContainer from '../components/ListContainer';

const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(12),
        width: "70%",
        [theme.breakpoints.down("md")]:{
            width: "80%"
        },
        [theme.breakpoints.down("sm")]:{
            width: "100%"
        },
        [theme.breakpoints.down("xs")]:{
            spacing: theme.spacing(2),
            marginLeft: 5
        }
    }, 
    cardContainer: {
        flexGrow: '1', 
        padding: theme.spacing(3),
        flexWrap: "wrap",
        direction: "row"
    }
}))

export default function FosterDashboard(){
    const classes = useStyles();

    // api call for dog data to display
    const [dogs, setDogState] = useState([])

    useEffect(() => {
    loadDogs()
    }, [])

    function loadDogs() {
    
    API.getDogDossiersAll()
        .then(res => {
        setDogState(res)
        console.log(res)
        })
        .catch(err => console.log(err));
    };

    // api call for alert data to display
    const [alerts, setAlertState] = useState([])

    useEffect(() => {
        loadAlerts()
    }, [])

    function loadAlerts() {
        
    AlertAPI.getAlerts()
        .then(res => {
        setAlertState(res)
        console.log(res)
        })
        .catch(err => console.log(err));
    };

   //ASF team data to display
  const [team, setTeamState] = useState([])

    useEffect(() => {
        loadTeam()
    }, [])

    function loadTeam() {
        
        TeamAPI.getTeam()
        .then(res => {
            setTeamState(res)
            console.log(res)
        })
        .catch(err => console.log(err));
    };

    return(
        <Grid container className={classes.mainContainer} justify="space-evenly" spacing={4}>
            <Grid item xs={12}>
                <Typography variant="h3" component="h4" gutterBottom align="center" color="primary">
                    My Dashboard
                    <Divider />
                </Typography>
            </Grid>
            <Grid item xs={12} s={10}>
                <Typography variant="h5" component="h6" gutterBottom color="primary">
                    Quick Actions
                    <Divider />
                </Typography>
                <QuickActionsFoster/>
            </Grid>
            <Grid item xs={12} s={10}>
                <Typography variant="h5" component="h6" gutterBottom color="primary">
                    My Dogs
                    <Divider />
                </Typography>
            {dogs.length ? (
                <Grid container className={classes.cardContainer} justify="center">
                        {dogs.map(dog =>{
                            return (
                                <Grid item xs={10} s={10} m={6} lg={3}>
                                    <MediaCard name={dog.name} image={dog.image} dossierLink={dog.dossierLink} assessmentLink={dog.assessmentLink} />
                                </Grid>
                            )
                        })}    
                </Grid>
                ):(<p>Currently no data to display</p>)}
            </Grid>
            <Grid item xs={12} s={12} m={6} lg={6} style={{marginTop: "2em"}}>
                 <Typography variant="h5" component="h4" gutterBottom align="center" color="primary">
                    Approved ASF Adopters
                    <Divider />
                </Typography>
                {team.length ? (
                <ListContainer>
                    {team.map(teamMember =>{
                        return (
                            <AvatarList name={teamMember.name} image={teamMember.image} email={teamMember.email}/>
                        )
                    })}    
                </ListContainer>
                ):(<p>Currently no data to display</p>)}
            </Grid>
            <Grid item xs={12} s={12} m={6} lg={6} style={{marginTop: "2em"}}>
                <Typography variant="h5" component="h4" gutterBottom align="center" color="primary">
                    My Alerts
                    <Divider />
                </Typography>
                {alerts.length ? (
                <ListContainer>
                    {alerts.map(alert =>{
                        return (
                            <BasicList name={alert.name} image={alert.image} dueDate={alert.dueDate} dogName={alert.dogName}/>
                        )
                    })}    
                </ListContainer>
                ):(<p>Currently no data to display</p>)}
            </Grid>
        </Grid>
    )
}