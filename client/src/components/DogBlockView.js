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
        marginBottom: "1.25em"
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
                    <Typography style={{fontWeight: "bold"}}>Name: <Typography>{props.name}</Typography> </Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography style={{fontWeight: "bold"}}>DOB: <Typography>{props.dob}</Typography> </Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography style={{fontWeight: "bold"}}>Gender: <Typography>{props.gender}</Typography> </Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                    <Typography style={{fontWeight: "bold"}}>Size: <Typography>{props.size}</Typography> </Typography>
                </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography style={{fontWeight: "bold"}}>Microchip Info: <Typography>{props.mfgCompany}, {props.microchipId}</Typography></Typography>
                 </Grid>
                <Grid item container className={classes.formItem}>
                     <Typography style={{fontWeight: "bold"}}>ASF ID: <Typography>{props.asfId}</Typography> </Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )
}