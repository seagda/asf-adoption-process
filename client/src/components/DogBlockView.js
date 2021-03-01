import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Image from "../components/Image";

import dog from "../assets/Cool_Dog.png";

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

export default function DogBlockView(props){
    const classes = useStyles();

    return (
        <Grid item container className={classes.itemContainer}>
        <Grid container justify="space-evenly" className={classes.picContainer}>
            <Grid item>
                <Image alt={"cool dog"} pic={dog} />
            </Grid>
            <Grid item className={classes.form}>
                <Grid item container className={classes.formItem}>
                    <Typography>Name: </Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography>Age: </Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography>Gender: </Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                    <Typography>Size: </Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography>Location: </Typography>
                 </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography>About Me: </Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )
}