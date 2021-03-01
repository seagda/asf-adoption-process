import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useState, useEffect } from "react";
import QuickActionsAdmin from "../components/QuickActionsAdmin";
import PieChartContainer from "../components/PieChartContainer";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MultiSelectChips from '../components/MultiSelectChips';
import AvatarList from '../components/AvatarList';
import BasicList from '../components/BasicList';
import ListContainer from '../components/ListContainer';
import TeamAPI from '../utils/Team';
import AlertAPI from '../utils/Alerts';


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

export default function AdminDashboard(){
    const classes = useStyles();
// api call for employee data to display
    const [team, setTeamState] = useState([])

    useEffect(() => {
        loadTeam()
    }, [])

    function loadTeam() {
        
        TeamAPI.getTeam()
        .then(res => {
            setTeamState(res)
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

// region select drop down
    const [selectedRegions, setRegion] = React.useState([]);

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
      };
    const regions = [
        'Midwest/South',
        'Mid-Atlantic',
        'Mississippi Valley',
        'West Coast',
        'Great Lakes',
        'Plains States',
        'Rocky Mountain',
        'Southeast',
        'Northeast',
        'Texas'
      ];

    return(
        <Grid container className={classes.mainContainer}>
            <Grid item xs={12}>
                <Typography variant="h3" component="h4" gutterBottom align="center" color="primary">
                    Admin Dashboard
                    <Divider />
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <QuickActionsAdmin/>
            </Grid>
            <Grid item m={8} lg={8} />
            <Grid item xs={12} s={12} m={4} lg={4}>
                <MultiSelectChips names={regions} title="Select Region" selectedOption={selectedRegions} onOptionChange={handleRegionChange}/>
            </Grid>
            <Grid item xs={12}>
                <PieChartContainer/>
            </Grid>
            <Grid item xs={12} s={12} m={6} lg={6} style={{marginTop: "2em"}}>
                 <Typography variant="h5" component="h4" gutterBottom align="center" color="primary">
                    ASF Team Members
                    <Divider />
                </Typography>
                {team.length ? (
                <ListContainer>
                    {team.map(teamMember =>{
                        return (
                            <AvatarList name={teamMember.name} image={teamMember.image} role={teamMember.role} city={teamMember.city} email={teamMember.email}/>
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