import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import PieChart from "../components/PieChart";

const useStyles = makeStyles(theme => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    },
    form: {
        paddingRight: "3em",
        [theme.breakpoints.down("sm")]:{
            padding: "1em"
        }
    },
    formItem: {
        marginBottom: "2em"
    },
    picContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
        }
    }
}))



export default function PieChartContainer(){
    const classes = useStyles();
    // update the numbers to grab the quantity from the database
    const dogStatus = [
        { status: 'Pending Intake', number: 12 },
        { status: 'Foster Ready', number: 7 },
        { status: 'Adoption Ready', number: 7 }
      ];
    const fosterStatus = [
        { status: 'Application Received', number: 12 },
        { status: 'Background Check Complete', number: 7 },
        { status: 'Reference Check Complete', number: 7 },
        { status: 'Approved', number: 7 }
      ];
      const adopterStatus = [
        { status: 'Application Received', number: 12 },
        { status: 'Background Check Complete', number: 7 },
        { status: 'Reference Check Complete', number: 7 },
        { status: 'Approved', number: 7 }
      ];

    return (
        <Grid container justify="space-evenly" style={{marginTop: "4em"}}>
            <Grid item>
                <PieChart data={{data: dogStatus}} />
            </Grid>
            <Grid item>
                <PieChart data={{data: fosterStatus}}/>
            </Grid>
            <Grid item>
                <PieChart data={{data: adopterStatus}} />
            </Grid>
        </Grid>
    )
}