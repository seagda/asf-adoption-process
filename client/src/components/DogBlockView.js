import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Image from "../components/Image";

import dog from "../assets/Cool_Dog.png";
import { Divider } from '@material-ui/core';

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
        marginBottom: "0.25em"
    },
    picContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            padding: 5
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
                <Paper style={{padding: "2em"}}>
                <Grid item container className={classes.formItem}>
                    <Typography style={{fontWeight: "bold"}}>Name: <Typography>{props.name}</Typography> </Typography>
                </Grid>
                <Divider/>
                <Grid item container className={classes.formItem}>
                     <Typography style={{fontWeight: "bold"}}>ASF ID: <Typography>{props.asfId}</Typography> </Typography>
                </Grid>
                <Divider/>
                <Grid item container className={classes.formItem}>
                     <Typography style={{fontWeight: "bold"}}>DOB: <Typography>{props.dob}</Typography> </Typography>
                </Grid>
                <Divider/>
                <Grid item container className={classes.formItem}>
                     <Typography style={{fontWeight: "bold"}}>Gender: <Typography>{props.gender}</Typography> </Typography>
                </Grid>
                <Divider/>
                <Grid item container className={classes.formItem}>
                    <Typography style={{fontWeight: "bold"}}>Size: <Typography>{props.size}</Typography> </Typography>
                </Grid>
                <Divider/>
                <Grid item container>
                     <Typography style={{fontWeight: "bold"}}>Microchip Info: <Typography>{props.mfgCompany}, {props.microchipId}</Typography></Typography>
                 </Grid>
                 </Paper>
            </Grid>
        </Grid>
    </Grid>
    )
}