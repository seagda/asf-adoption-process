import React, {useState, useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import Image from "../components/Image";


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
    },
    large: {
        width: theme.spacing(40),
        height: theme.spacing(40),
        [theme.breakpoints.down("md")]: {
            width: theme.spacing(30),
            height: theme.spacing(30),
            marginRight: "10em"
        },
        [theme.breakpoints.down("sm")]: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            marginRight: "4em"
        },
        [theme.breakpoints.down("xs")]: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            marginRight: 0
        }
    }
}))

export default function ProfileBlock(props){
    const classes = useStyles();

    return (
        <Grid item container className={classes.itemContainer}>
        <Grid container justify="space-evenly" className={classes.picContainer}>
            <Grid item>
                <Avatar className={classes.large} src={props.image} alt="user-photo"/>
            </Grid>
            <Grid item className={classes.form}>
                <Grid item container className={classes.formItem}>
                    <Typography style={{fontWeight: "bold"}}>First Name:<Typography> {props.firstName}</Typography></Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                    <Typography style={{fontWeight: "bold"}}>Last Name:<Typography>{props.lastName}</Typography> </Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography style={{fontWeight: "bold"}}>Phone:<Typography>{props.phone}</Typography> </Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography style={{fontWeight: "bold"}}>Email:<Typography>{props.email}</Typography> </Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography style={{fontWeight: "bold"}}>DOB:<Typography>{props.dob}</Typography> </Typography>
                </Grid>
                {/* <Grid item container className={classes.formItem}>
                    <Typography>City: Camarillo</Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography>State: CA</Typography>
                 </Grid> */}
                {/* <Grid item container className={classes.formItem}>
                     <Typography>About Me: Passionate about animal rescue!</Typography>
                </Grid> */}
            </Grid>
        </Grid>
    </Grid>
    )
}