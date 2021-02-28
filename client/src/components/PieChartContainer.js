import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import PieChart from "../components/PieChart";

export default function PieChartContainer(){

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
            <Grid item s={12} m={3} lg={3}>
                <PieChart data={{data: dogStatus}} text={{text: "Total ASF Dogs"}}/>
            </Grid>
            <Grid item s={12} m={3} lg={3}>
                <PieChart data={{data: fosterStatus}} text={{text: "Total Fosters"}}/>
            </Grid>
            <Grid item s={12} m={3} lg={3}>
                <PieChart data={{data: adopterStatus}} text={{text: "Total Adopters"}}/>
            </Grid>
        </Grid>
    )
}