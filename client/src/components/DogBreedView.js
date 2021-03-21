import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    }
}));

export default function DogBreedView(props){
    const classes = useStyles();
    const admin = true;

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid item container xs={10} sm={8} md={8} lg={10} style={{marginTop: "3em"}} direction="column">
                    <Grid item>
                        <Typography variant="h4">Breed Info</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container style={{marginTop: "1em"}}>
                        <Grid item xs={6} sm={6} md={8} lg={6}>
                            <Typography style={{marginTop: "1em", fontWeight: "bold"}}>Coat: <Typography>{props.coat}</Typography> </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={8} lg={6}>
                            <Typography style={{marginTop: "1em", fontWeight: "bold"}}>Weight: <Typography>{props.weight}</Typography></Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={8} lg={6}>
                            {props.purebred ? <Typography style={{marginTop: "1em", fontWeight: "bold"}}> Purebred</Typography> : <Typography style={{marginTop: "1em", fontWeight: "bold"}}>Mixed Breed</Typography>}
                        </Grid>
                        <Grid item xs={6} sm={6} md={8} lg={6}>
                            {props.secondary ? <Typography style={{marginTop: "1em", fontWeight: "bold"}}>Secondary Breed:<Typography>{props.secondary}</Typography></Typography> : null}
                        </Grid>
                    </Grid>
            </Grid>
        </Grid>
    )
}