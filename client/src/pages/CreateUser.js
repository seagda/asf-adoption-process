import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

import PhoneInput from "../components/PhoneInput";
import Image from "../components/Image";

import ashley from "../assets/ashley.jpg";

const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(13),
        [theme.breakpoints.down("xs")]:{
            marginLeft: theme.spacing(2),
            alkignItems: "center"
        }
    },
    // itemContainer: {
    //     padding: "10em",
    //     [theme.breakpoints.down("md")]:{
    //         padding: "8em"
    //     },
    //     [theme.breakpoints.down("sm")]:{
    //         padding: "6em"
    //     },
    //     [theme.breakpoints.down("xs")]:{
    //         padding: "5.25em"
    //     }
    // },
    paper: {
        backgroundColor: "#eee"
    },
    form: {
        paddingRight: "3em",
        [theme.breakpoints.down("sm")]:{
            padding: "1em"
        }
    },
    formItem: {
        marginBottom: "1em"
    },
    picContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
        }
    }
}))


export default function CreateUser() {
    const classes = useStyles()

    return (
        <Grid container className={classes.mainContainer}>
            {/* Picture and form container */}
            <Grid item container sm className={classes.itemContainer}>
                <Paper className={classes.paper}>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography>Create New User</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>ID #:</Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="space-between" className={classes.picContainer}>
                        <Grid item>
                            <Button>
                                <AddIcon/>
                            </Button>
                            <Image pic={ashley} />
                        </Grid>
                        <Grid item>
                            <form className={classes.form}>
                                <Grid item container className={classes.formItem}>
                                    <TextField variant="outlined" label="Name"/>
                                </Grid>
                                <Grid item container className={classes.formItem}>
                                    <PhoneInput/>
                                </Grid>
                                <Grid item container className={classes.formItem}>
                                    <TextField variant="outlined" label="Email"/>
                                </Grid>
                                <Grid item container className={classes.formItem}>
                                    <TextField variant="outlined" label="City"/>
                                </Grid>
                                <Grid item container className={classes.formItem}>
                                    <TextField variant="outlined" label="State"/>
                                </Grid>
                                <Grid item container className={classes.formItem}>
                                    <TextField variant="outlined" label="About"/>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            
            {/* Role assignment container */}
            <Grid item container>
                <Grid container>
                    <Grid item>
                        <Typography>Role</Typography>
                    </Grid>
                    <Grid item>
                    <Typography>Last Updated:</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Typography>Select roles</Typography>
                </Grid>
                <Grid container>
                    <Typography>Admin Notes</Typography>
                </Grid>
                <Grid container>
                    <Typography>Create account</Typography>
                </Grid>
            </Grid>
        </Grid>
       
    )
}