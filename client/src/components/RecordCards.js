import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import HoldCheckbox from "../components/HoldCheckbox";

const useStyles = makeStyles(theme => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        },
        marginBottom: "5em"
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
        },
        marginBottom: "2em"
    },
    references: {
        marginTop: "3em",
        [theme.breakpoints.down("xs")]:{
            marginLeft: "5em"
        }
    },
    root: {
        marginBottom: "1em",
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    }
}))

export default function RecordCards(){
    const classes = useStyles();

    return (
    <Grid item container justify="space-evenly" className={classes.references}>
        <Grid container style={{marginTop: "1em", marginBottom: "5em"}}> 
            <Grid item container direction="column" xs={10} sm={10} md={4} lg={5}>
                <Grid item container align="center">
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Foster Record
                            </Typography>
                            <div>
                                <TextField variant="outlined" label="Name"/>
                                <TextField variant="outlined" label="Phone"/>
                                <TextField variant="outlined" label="Email"/>
                                <TextField variant="outlined" label="City, State"/>
                                <TextField variant="outlined" label="Transfer Date"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid item container xs={12} sm={12} md={3} lg={2}/>
            <Grid item container direction="column" xs={10} sm={10} md={4} lg={5}>
            <Grid item container align="center">
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Adoption Record
                            </Typography>
                            <div>
                                <TextField variant="outlined" label="Name"/>
                                <TextField variant="outlined" label="Phone"/>
                                <TextField variant="outlined" label="Email"/>
                                <TextField variant="outlined" label="City, State"/>
                                <TextField variant="outlined" label="Transfer Date"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
)}