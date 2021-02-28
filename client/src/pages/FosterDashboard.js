import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import QuickActionsFoster from "../components/QuickActionsFoster";
import PieChartContainer from "../components/PieChartContainer";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MultiSelectChips from '../components/MultiSelectChips';
import AvatarList from '../components/AvatarList';
import BasicList from '../components/BasicList';
import MediaCard from '../components/MediaCard';

const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(20),
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
            <Grid item xs={3}>
                <MediaCard/>
            </Grid>
            <Grid item xs={3}>
                <MediaCard/>
            </Grid>
            <Grid item xs={3}>
                <MediaCard/>
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