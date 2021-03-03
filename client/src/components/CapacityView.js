import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";

import CapacityNums from "../components/CapacityNums";
import CaresFor from "../components/CaresFor";

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

export default function CapacityView(props){
    const classes = useStyles();
    const capacityNums = [{number: "4"}, {number: "2"}, {number: "2"}];
    const caresFor = [{type: "Senior"}, {type: "Puppy"}]

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid container direction="row" justify={"space-between"}>
                <Grid item container xs={12} sm={6} md={6} lg={6} style={{marginTop: "3em"}} direction="column">
                    <Grid item>
                        <Typography variant="h4">Capacity</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container>
                        <Grid>
                            <Typography style={{marginTop: "1em"}}>Max Capacity: {props.maxCapacity}</Typography>
                            {/* <Typography style={{marginTop: "1em"}}>Dogs in care:</Typography>
                            <Typography style={{marginTop: "1em", marginRight: "0.5em"}}>Available space:</Typography> */}
                        </Grid>
                        {/* <Grid item xs={6} sm={6} md={8} lg={6}>
                            {capacityNums.map((number)=>(
                                <CapacityNums
                                number={number.number}
                            />
                            ))}
                        </Grid> */}
                    </Grid>
                </Grid>
                <Grid item container xs={10} sm={6} md={6} lg={6} style={{marginTop: "3em"}} direction="column">
                    <Grid item>
                        <Typography variant="h4">Cares for:</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container style={{marginTop: "1em"}}>
                        <Grid item>
                            {props.puppies ? <Chip label="Puppies"/> : null}
                        </Grid>
                        <Grid item>
                            {props.seniors ? <Chip label="Seniors"/> : null}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}