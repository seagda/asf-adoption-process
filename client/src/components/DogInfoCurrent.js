import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    }
}));

export default function DogInfoCurrent(props){
    const classes = useStyles();
    const admin = true;

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid item container xs={10} sm={8} md={8} lg={10} style={      {marginTop: "3em"}} direction="column">
                    <Grid item>
                        <Typography variant="h4">Current Info</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container style={{marginTop: "1em"}}>
                        <Grid item xs={10} sm={6} md={8} lg={6}>
                            {props.currentlyWith ? <Typography style={{marginTop: "1em"}}>Currently With:  {props.currentlyWith}</Typography> : <Typography>Dog not currently assigned to ASF team member</Typography>}
                        </Grid>
                        <Grid item xs={10} sm={6} md={8} lg={6}>
                            {props.behaviorIssues ? <Typography>Behaviorial Issues: Yes</Typography> : <Typography>Behaviorial Issues: No</Typography>}
                        </Grid>
                        <Grid item xs={10} sm={6} md={8} lg={6}>
                            {props.behaviorIssues ? <Typography style={{marginTop: "1em"}}>Medical Issues: Yes</Typography> : <Typography style={{marginTop: "1em"}}>Medical Issues: No</Typography>}
                        </Grid>
                        <Grid item xs={10} sm={6} md={8} lg={6}>
                            {props.blocked ? <Typography style={{marginTop: "1em", color: "red"}}>Dog is BLOCKED</Typography> : null}
                        </Grid>
                    </Grid>
            </Grid>
        </Grid>
    )
}