import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        width: "100%",
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center",
            padding: "1em"
        }
    }
}));

export default function AdminNotes(){
    const classes = useStyles();
    const adminNotes = ["Looking like a viable candidate. Waiting to hear back from vet."]

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid container>
                <Grid item style={{marginTop: "3em"}}>
                    <Typography variant="h4">Admin notes</Typography>
                    <Divider/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item style={{marginTop: "1em"}}>
                    <Typography>{adminNotes}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}