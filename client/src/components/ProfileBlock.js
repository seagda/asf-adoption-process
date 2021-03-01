import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Image from "../components/Image";

import ashley from "../assets/ashley.jpg";

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

export default function ProfileBlock(props){
    const classes = useStyles();

    return (
        <Grid item container className={classes.itemContainer}>
        <Grid container justify="space-evenly" className={classes.picContainer}>
            <Grid item>
                <Image alt={"Ashley"} pic={ashley} />
            </Grid>
            <Grid item className={classes.form}>
                <Grid item container className={classes.formItem}>
                    <Typography>Name: Betsy Best</Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography>Phone: 805-345-2781</Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography>Email: bestbets@gmail.com</Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                    <Typography>City: Camarillo</Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography>State: CA</Typography>
                 </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography>About Me: Passionate about animal rescue!</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )
}