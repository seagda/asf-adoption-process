import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

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
    }
}))

export default function Home(){
    const classes = useStyles();

    return(
        <Grid container className={classes.mainContainer}>
            <Grid item>
                <NavLink style={{textDecoration: "none"}} to="/signin">
                    <Button color="secondary" variant="contained">Login</Button>
                </NavLink>
            </Grid>
            <Grid item>
                <NavLink style={{textDecoration: "none"}} to="/signup">
                    <Button color="secondary" variant="contained">Sign Up</Button>
                </NavLink>
            </Grid>
        </Grid>
    )
}