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
                <Image alt={"cool dog"} pic={props.image} />
            </Grid>
            <Grid item className={classes.form}>
                <Grid item container className={classes.formItem}>
                    <Typography>Name: {props.name}</Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography>DOB: {props.dob}</Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography>Gender: {props.gender}</Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                    <Typography>Size: {props.size}</Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography style={{fontWeight: "bold"}}>Microchip Info: <Typography>{props.mfgCompany}, {props.microchipId}</Typography></Typography>
                 </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography>ASF ID: {props.asfId}</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )
}