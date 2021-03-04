import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(13),
        marginBottom: "5em",
        width: "70%",
        justifyContent: "space-evenly",
        [theme.breakpoints.down("md")]:{
            width: "80%"
        },
        [theme.breakpoints.down("sm")]:{
            width: "70%"
        },
        [theme.breakpoints.down("xs")]:{
            spacing: theme.spacing(2),
            marginLeft: "3.5em"
        }
    },
    formItem: {
        marginBottom: "1em"
    },
    paper: {
        padding: "3em",
        [theme.breakpoints.down("sm")]: {
            width: "70%"
        },
        [theme.breakpoints.down("xs")]: {
            width: "90%",
            padding: "1em"
        }
    },
    login: {
        marginRight: "3em",
        [theme.breakpoints.down("sm")]:{
            marginRight: 0,
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]:{
            marginRight: 0
        }
    },
    signup: {
        marginLeft: "3em",
        [theme.breakpoints.down("sm")]:{
            marginLeft: 0
        },
        [theme.breakpoints.down("xs")]:{
            marginLeft: 0,
            marginTop: "2em"
        }
    },
    welcome: {
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    },
    imagePaper: {
        padding: "0em",
        width: "70%", 
        [theme.breakpoints.down("sm")]: {
            width: "90%"
        }
    },

}))

export default function Home(){
    const classes = useStyles();

    return(
        <Grid container className={classes.mainContainer}>
            <Grid item align="center" style={{marginBottom: "1em"}} direction="column">
                <Grid className={classes.welcome}>
                    <Typography variant="h4" color="primary">Welcome to Aussies Furever!</Typography>
                    <Divider />
                </Grid> 
                <Paper className={classes.imagePaper} style={{margin: "1em"}}>
                        <Grid item justifyContent="flex-start">
                            <img className={classes.imagePaper} src="https://cdn.dribbble.com/users/1379859/screenshots/3455666/artboard_1.jpg"></img>
                        </Grid>
                </Paper>
            </Grid>
            <Paper className={classes.paper}>
            <Grid item container justify="space-evenly">
                <Grid item align="center" className={classes.login}>
                    <Typography>If you already have an account,</Typography>
                    <Typography style={{marginBottom: "1em"}}> press "LOGIN" to continue.</Typography>
                    <NavLink style={{textDecoration: "none"}} to="/signin">
                        <Button color="secondary" variant="contained">Login</Button>
                    </NavLink>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item align="center" className={classes.signup}>
                    <Typography>If you need to create an account,</Typography>
                    <Typography style={{marginBottom: "1em"}}> press "SIGN UP" to get started.</Typography>
                    <NavLink style={{textDecoration: "none"}} to="/signup">
                        <Button color="secondary" variant="contained">Sign Up</Button>
                    </NavLink>
                </Grid>
            </Grid>
            </Paper>
        </Grid>
    )
}