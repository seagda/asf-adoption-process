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

export default function AdminNotes(props){
    const classes = useStyles();

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid container direction="row">
                <Grid item container xs={12} sm={6} md={6} lg={12} style={{marginTop: "3em"}} direction="column">
                    <Grid item>
                        <Typography variant="h4">Admin notes</Typography>
                        <Divider/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item style={{marginTop: "1em"}}>
                    <Typography>{props.notes}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}