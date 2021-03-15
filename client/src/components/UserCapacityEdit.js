import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        },
        marginBottom: "5em"
    },
    marginFix: {
        [theme.breakpoints.down("sm")]: {
            marginLeft: "2.5em"
        }
    }
}));

export default function UserCapacityEdit(props){
    const classes = useStyles();

    return(
        <Grid item container className={classes.itemContainer, classes.marginFix}>
            <Grid container direction="row" justify={"space-between"}>
            <Grid item container xs={10} sm={6} md={6} lg={6} style={{marginTop: "3em"}} direction="column">
                <Grid item>
                    <Typography variant="h4">Capacity</Typography>
                    <Divider/>
                </Grid>
                <Grid item container>
                    <Grid item xs={6} sm={6} md={8} lg={6}>
                        <Typography style={{marginTop: "1em"}}>Max Capacity:</Typography>
                        {/* <Typography style={{marginTop: "1.5em"}}>Dogs in care:</Typography>
                        <Typography style={{marginTop: "2em"}}>Available space:</Typography> */}
                    </Grid>
                    <Grid item xs={6} sm={6} md={8} lg={6}>
                        <div>
                        <TextField variant="outlined" type="number" style={{marginTop: "0.5em"}} 
                        onChange={props.handleInputChange} 
                        value={props.userData?.maxCapacity} 
                        name="maxCapacity"></TextField>
                        {/* <TextField type="number" style={{marginTop: "1em"}}></TextField>
                        <TextField type="number" style={{marginTop: "1em"}}></TextField> */}
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </Grid>
    )
}