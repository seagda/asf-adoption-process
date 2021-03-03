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
            width: "80%"
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
        padding: "3em"
    }
}))

export default function Home(){
    const classes = useStyles();

    return(
        <Grid container className={classes.mainContainer}>
            <Grid item container align="center" style={{marginBottom: "3em"}} direction="column">
                <Grid item>
                    <Typography variant="h4" color="primary">Welcome!</Typography>
                    <Divider/>
                </Grid>
            </Grid>
            <Paper className={classes.paper}>
            <Grid item container justify="space-evenly">
                <Grid item align="center" style={{marginRight: "3em"}}>
                    <Typography>If you already have an account,</Typography>
                    <Typography style={{marginBottom: "1em"}}> press "LOGIN" to continue.</Typography>
                    <NavLink style={{textDecoration: "none"}} to="/signin">
                        <Button color="secondary" variant="contained">Login</Button>
                    </NavLink>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item align="center" style={{marginLeft: "3em"}}>
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