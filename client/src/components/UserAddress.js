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

export default function UserAddress(props){
    const classes = useStyles();

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid item container style={{marginTop: "3em"}} direction="column">
                    <Grid item>
                        <Typography variant="h4">Address</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container>
                        <Grid container>
                            <Grid item container direction="column" style={{marginTop: "2em"}} xs={10} sm={10} md={6} lg={6}>
                                <Typography name="street">{props.street}</Typography>
                                <Typography name="street2">{props.street2}</Typography>
                                <Typography name="city">{props.city}</Typography>
                                <Typography name="state">{props.state}</Typography>
                                <Typography name="zip5">{props.zip}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
        </Grid>
    )
}