import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import PieChart from "../components/PieChart";

export default function PieChartContainer(props){

    
    const fosterStatus = props.data.fosterCounts || []
    
    const adopterStatus = props.data.adopterCounts || []
 
    return (
        <Grid container justify="space-evenly" >
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