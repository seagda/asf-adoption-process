import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import RoleTitles from "./RoleTitles";
import Chip from "@material-ui/core/Chip";

import API from "../utils/API";


const useStyles = makeStyles((theme) => ({
    itemContainer: {
        width: "100%",
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center",
            padding: "1em"
        }
    }
}));

export default function Roles(props){
    const classes = useStyles();

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid item container style={{marginTop: "3em"}} direction="column">
                <Grid item>
                    <Typography variant="h4">Role Title(s)</Typography>
                    <Divider/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item style={{marginTop: "1em"}}>
                    {props.roles}
                </Grid>
            </Grid>
        </Grid>
    )
}