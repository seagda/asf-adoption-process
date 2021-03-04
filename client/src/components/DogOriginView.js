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

export default function DogOriginView(props){
    const classes = useStyles();
    const admin = true;

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid item container xs={10} sm={8} md={8} lg={10} style={      {marginTop: "3em"}} direction="column">
                    <Grid item>
                        <Typography variant="h4">Origin Info</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container style={{marginTop: "1em"}}>
                        <Grid item xs={6} sm={6} md={8} lg={6}>
                            <Typography style={{marginTop: "1em"}}>Region:  {props.coat}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={8} lg={6}>
                            <Typography style={{marginTop: "1em"}}>Name:{props.originName}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={8} lg={6}>
                            <Typography style={{marginTop: "1em"}}>Phone:{props.weight}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={8} lg={6}>
                            <Typography style={{marginTop: "1em"}}>Address:{props.weight}</Typography>
                            <Divider/>
                            <Typography style={{marginTop: "1em"}}>Street:{props.weight}</Typography>
                            <Typography style={{marginTop: "1em"}}>City:{props.weight}</Typography>
                            <Typography style={{marginTop: "1em"}}>State:{props.weight}</Typography>
                            <Typography style={{marginTop: "1em"}}>Zip:{props.weight}</Typography>
                        </Grid>
                    </Grid>
            </Grid>
        </Grid>
    )
}