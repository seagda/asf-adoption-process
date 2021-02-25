import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';

import PhoneInput from "../components/PhoneInput";
import Image from "../components/Image";
import AddButton from "../components/AddButton";
import MultiLineText from "../components/MultiLineText";
import SaveButton from "../components/SaveButton";

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
        marginBottom: "1em"
    },
    picContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
        }
    }
}))

export default function ProfileBlock(){
    const classes = useStyles();

    return (
        <Grid item container className={classes.itemContainer}>
        <Grid container justify="space-evenly" className={classes.picContainer}>
            <Grid item>
                <Image alt={"Ashley"} pic={ashley} />
                <AddButton buttonText="Add Photo"/>
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
                        <MultiLineText label="About"/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <SaveButton buttonText="Save Changes"/>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    </Grid>
    )
}