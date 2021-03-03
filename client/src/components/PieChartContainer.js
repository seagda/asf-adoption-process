import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import PieChart from "../components/PieChart";

export default function PieChartContainer(props){

    // update the numbers to grab the quantity from the database

    // no need for this - look at the controller for the object details and the server for the route 
    // line 34 pass in the data: object that matches the controller being passed in as props 
    // const dogStatus = props.data.dogStatusCounts || []
    // [
    //     { status: 'Pending Intake', number: 12 },
    //     { status: 'Foster Ready', number: 7 },
    //     { status: 'Adoption Ready', number: 7 },
    //     { status: 'Adopted', number: 100 }
    //   ];
    const fosterStatus = props.data.fosterCounts || []
    // [
    //     { status: 'Application Received', number: 12 },
    //     { status: 'Background Check Complete', number: 70 },
    //     { status: 'Reference Check Complete', number: 50 },
    //     { status: 'Approved', number: 100 }
    //   ];
      const adopterStatus = props.data.adopterCounts || []
    //   [
    //     { status: 'Application Received', number: 12 },
    //     { status: 'Background Check Complete', number: 7 },
    //     { status: 'Reference Check Complete', number: 70 },
    //     { status: 'Approved', number: 7 }
    //   ];

    return (
        <Grid container justify="space-evenly" style={{marginTop: "2em"}}>
            {console.log(props.data.dogStatusCounts)}
            <Grid item s={12} m={3} lg={3} style={{marginTop: "1em"}}>
                <PieChart data={props.data.dogStatusCounts} text={"Total ASF Dogs"} />
            </Grid>
            <Grid item s={12} m={3} lg={3} style={{marginTop: "1em"}}>
                <PieChart data={fosterStatus} text={"Total Fosters"}/>
            </Grid>
            <Grid item s={12} m={3} lg={3} style={{marginTop: "1em"}}>
                <PieChart data={adopterStatus} text={"Total Adopters"}/>
            </Grid>
        </Grid>
    )
}