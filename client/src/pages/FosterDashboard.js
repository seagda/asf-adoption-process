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
import DogAPI from '../utils/Dogs';
import AlertAPI from '../utils/Alerts';
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
    }
}))

export default function FosterDashboard(){
    const classes = useStyles();

    // api call for employee data to display
const [dogs, setDogState] = useState([])

useEffect(() => {
  loadDogs()
}, [])

function loadDogs() {
   
  DogAPI.getDogs()
    .then(res => {
      setDogState(res)
      console.log(res)
    }
    )
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
      }
      )
      .catch(err => console.log(err));
  };

    return(
        <Grid container className={classes.mainContainer} justify="space-evenly" spacing={4}>
            <Grid item xs={12}>
                <Typography variant="h3" component="h4" gutterBottom align="center" color="primary">
                    Foster Dashboard
                    <Divider />
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <QuickActionsFoster/>
            </Grid>
            <Grid item xs={12} >
            {dogs.length ? (
                <ListContainer>
                    {dogs.map(dog =>{
                        return (
                            <MediaCard xs={12} lg={3} name={dog.name} image={dog.image} dossierLink={dog.dossierLink} assessmentLink={dog.assessmentLink} />
                        )
                    })}    
                </ListContainer>
                ):(<p>Currently no data to display</p>)}
            </Grid>
            <Grid item xs={6}>
                 <Typography variant="h5" component="h4" gutterBottom align="center" color="primary">
                    Alerts
                    <Divider />
                </Typography>
                <BasicList/>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h5" component="h4" gutterBottom align="center" color="primary">
                    Approved Adopters
                    <Divider />
                </Typography>
                <AvatarList />
            </Grid>
        </Grid>
    )
}