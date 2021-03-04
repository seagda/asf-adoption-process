// Takes props: number
import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function CapacityNums(props){
    return(
        <Typography style={{marginTop: "1em"}}>{props.number}</Typography>
    )
}